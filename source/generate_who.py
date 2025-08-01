# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

import os
import git
import requests
from bs4 import BeautifulSoup
import locale

# Set locale to handle special characters properly (if necessary)
locale.setlocale(locale.LC_COLLATE, 'en_US.UTF-8')

def fetch_cloudstack_members():
    url = "https://people.apache.org/committers-by-project.html#cloudstack"
    response = requests.get(url)
    response.encoding = 'utf-8'
    if response.status_code != 200:
        print("Failed to fetch the page")
        return None, None

    soup = BeautifulSoup(response.text, "html.parser")

    pmc_section = soup.find("h2", {"id": "cloudstack-pmc"})
    committers_section = soup.find("h2", {"id": "cloudstack"})

    pmc_members = []
    committers = []

    if pmc_section:
        pmc_table = pmc_section.find_next("table")
        if pmc_table:
            rows = pmc_table.find_all("tr")[1:]  # Skip header row
            for row in rows:
                columns = row.find_all("td")
                if len(columns) >= 2:
                    name = columns[1].text.strip()
                    svn_id = columns[0].text.strip()
                    pmc_members.append((name, svn_id))

    if committers_section:
        committers_table = committers_section.find_next("table")
        if committers_table:
            rows = committers_table.find_all("tr")[1:]  # Skip header row
            for row in rows:
                columns = row.find_all("td")
                if len(columns) >= 2:
                    name = columns[1].text.strip()
                    svn_id = columns[0].text.strip()
                    committers.append((name, svn_id))

    return pmc_members, committers

def get_repo_path():
    try:
        # Find the current working directory
        current_dir = os.getcwd()

        # Check if it's a Git repository
        repo = git.Repo(current_dir)

        # Get the absolute path of the repository
        repo_path = repo.git.rev_parse("--show-toplevel")
        return repo_path
    except git.exc.InvalidGitRepositoryError:
        print("Not a git repository.")
        return None

def generate_markdown(pmc_members, committers):
    # Sort the members alphabetically by their names
    pmc_members.sort(key=lambda x: locale.strxfrm(x[0].lower()))
    committers.sort(key=lambda x: locale.strxfrm(x[0].lower()))
    repo_path = get_repo_path()
    with open(repo_path + "/src/pages/who.md", "w", encoding="utf-8") as f:
        f.write("""---
title: Apache CloudStack Project Membership
---

# Apache CloudStack Project Members

PMC Information: https://projects.apache.org/committee.html?cloudstack

Board Minutes: https://whimsy.apache.org/board/minutes/CloudStack.html

""")

        pmc_chair = "Daniel Augusto Veronezi Salvador (gutoveronezi)"
        f.write(f"**PMC Chair**: {pmc_chair}\n\n")

        f.write("The following data is subject to change. The up-to-date information can be found on <a href=\"http://people.apache.org/committers-by-project.html#cloudstack-pmc\">the Apache Peoples site</a>:\n\n")

        f.write("**PMC members (also in the [Committers](#committers) group)**:\n\n")
        for name, id in pmc_members:
            f.write(f"- {name}  ({id})\n")

        f.write("\n**<a name=\"committers\">Committers</a>**:\n\n")
        for name, id in committers:
            f.write(f"- {name}  ({id})\n")
    print("who.md file has been generated successfully!")

def main():
    pmc_members, committers = fetch_cloudstack_members()
    if pmc_members and committers:
        generate_markdown(pmc_members, committers)

if __name__ == "__main__":
    main()
