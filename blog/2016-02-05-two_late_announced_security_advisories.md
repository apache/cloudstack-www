---
layout: post
title: Two late-announced security advisories

slug: two_late_announced_security_advisories
---
<p>Today I sent out two CloudStack-related security advisories: CVE-2015-3251 (related to VM credential exposure) and CVE-2015-3252 (related to VNC authentication). Details about these issues can be found on the CloudStack user and dev mailing lists, as well as on the Full Disclosure and BUGTRAQ security mailing lists.
</p>

<!-- truncate -->

<p>While these vulnerabilities are of moderate and low severity (respectively), the reason for this post is because the advisories were announced approximately 5 months after the first release of the patches in 4.5.2. This is personally embarrassing, unacceptable, and in a more severe case could be downright dangerous.</p>
<H2>What happened?</H2>
<p>The CloudStack security team worked through the related vulnerabilities through the summer of 2015. We had advisory drafts, patches, and mitigations all ready well before the release. Far enough ahead, actually, that we forgot about the release and weren't paying attention to the release (at least I wasn't - I know others were), and didn't send out the advisories at the appropriate time. Part of this is due to me having become an unofficial lead/spokesperson for the security team; In the past there has been at least one occasion when others released advisories when I was not available, but usually I'm coordinating issues and publishing announcements.</p>
<p>Luckily, the CloudStack Security Team works with and under the direction of the ASF security team. During one of their periodic reviews, they noticed CloudStack had loose ends on these two advisories, and asked for an update. Earlier today I realized the advisories had not been released, so here we are. </p>
<H2>How will we improve?</H2>
<p>Obviously, we don't want to be in this situation again. Here's some steps we're taking to minimize the chance of a repeat performance:</p>
<ul>
<li> I've modified the <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Release+Procedure">Release Procedure</a> to specifically request the release manager give the security team a heads up that a release is about to be announced. This can be a simple non-blocking email that shouldn't slow down the release process, but still ensure that we're aware of the upcoming release.</li>
<li>I'll be ensuring that other members of the security team feel comfortable crafting and releasing advisories. Like the rest of CloudStack and other ASF projects, the CloudStack security team does not have a named leader and should be able to operate if I or others are unavailable.</li>
</ul>
<p>In the past I've referred to CloudStack as "critical infrastructure" - CloudStack powers infrastructure clouds for many large cloud providers. We take information security seriously, realizing that many depend upon our work. Vulnerabilities happen in most software at some point in time - the important part is how they are responded to. While in this case we did respond quickly to the issues and created and applied patches, we let the community down by not quickly releasing the advisories. This is an unfortunate chink in our armor, but we'll be taking steps to ensure it doesn't happen again.</p>
