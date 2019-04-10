#!/usr/bin/env python
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

"""This module can be used to parse and print the PMC and Committer info
of Apache CloudStack and potentially other ASF projects.

Can be used at command line by running: python makewholist.py"""

import json
import sys
import urllib
import argparse

GROUPS_URL = "https://projects.apache.org/json/foundation/groups.json"
NAMES_URL = "https://projects.apache.org/json/foundation/people_name.json"

names = {}   # Placeholder for names parsed in getNames()
groups = {}  # Placeholder for groups parsed in getCommittersAndPMC()

reload(sys)
sys.setdefaultencoding('utf8')

def getCommittersAndPMC():
    """Get Committer and PMC info from ASF"""
    global groups
    try:
        response = urllib.urlopen(GROUPS_URL)
        groups = json.loads(response.read())
    except Exception, ex:
        print "Error during groups JSON download or parsing: %s" % ex.message


def getNames():
    """ Get committer names info from ASF"""
    global names
    try:
        response = urllib.urlopen(NAMES_URL)
        names = json.loads(response.read())
    except Exception, ex:
        print "Error during names JSON download or parsing: %s" % ex.message


def printWhoList(emeritus_members=''):
    if len(names) == 0 or len(groups) == 0:
        print "Names or groups not initialized, aborting"
        sys.exit(1)

    print ("Active Project Management Committee contains "
           "(in alphabetical order of their usernames):")

    print "{:.table-bordered}"
    print "| Username | Name |"
    print "|----------|------|"
    for pmc in groups['cloudstack-pmc']:
        if pmc not in emeritus_members.split(','):
            print "|%s|%s|" % (pmc, names[pmc])

    print ""
    print ""
    print ("Active list of committers "
           "(in alphabetical order of their usernames):")

    print "{:.table-bordered}"
    print "| Username | Name |"
    print "|----------|------|"
    for committer in groups['cloudstack']:
        if committer not in emeritus_members.split(','):
            print "|%s|%s|" % (committer, names[committer])


if __name__ == "__main__":
    # construct the argument parse and parse the arguments
    ap = argparse.ArgumentParser()
    ap.add_argument("-e", "--emeritusMembers", required=False, help="Emeritus PMCs and committers usernames (comma separated values).", default='')

    args = vars(ap.parse_args())
 
    emeritus_members = args["emeritusMembers"]

    getNames()
    getCommittersAndPMC()
    printWhoList(emeritus_members)
