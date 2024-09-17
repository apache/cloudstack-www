import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Committers from '@site/src/components/Committers';

export default function Who() {
    return (
    <Layout title="Apache CloudStack Project Members">
        <section>
            <div class="container">
            <div class="row">
                 <h1 class="section-title mt-lg-5">Apache CloudStack Project Members</h1>
                 <div>
                    <p>
                        PMC Information: https://projects.apache.org/committee.html?cloudstack
                    </p>
                    <p>
                        Board Minutes: https://whimsy.apache.org/board/minutes/CloudStack.html
                    </p>
                    <p>
                        <b>PMC Chair</b>: Daniel Augusto Veronezi Salvador	(gutoveronezi)
                    </p>
                    <p>
                        The following data is subject to change. The up-to-date information can be found on <a href="http://people.apache.org/committers-by-project.html#cloudstack-pmc">the Apache Peoples site</a>:
                    </p>
                    <p>
                        <b>PMC members in bold</b> (also in the Committers group):
                    </p>
                    <section>
                        <Committers />
                    </section>
                 </div>
            </div>
            </div>
        </section>
    </Layout>
    );
}
