"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1140],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,k=h["".concat(i,".").concat(d)]||h[d]||p[d]||r;return a?o.createElement(k,l(l({ref:t},s),{},{components:a})):o.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[h]="string"==typeof e?e:n,l[1]=u;for(var c=2;c<r;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},51524:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>u,toc:()=>i});var o=a(87462),n=(a(67294),a(3905));const r={title:"Developer Resources for Apache CloudStack"},l="CloudStack Developer Resources",u={type:"mdx",permalink:"/developers",source:"@site/src/pages/developers.md",title:"Developer Resources for Apache CloudStack",description:"Contributing as a Non-Committer",frontMatter:{title:"Developer Resources for Apache CloudStack"}},i=[{value:"Contributing as a Non-Committer",id:"contributing-as-a-non-committer",level:2},{value:"Submitting a patch",id:"submitting-a-patch",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Fork the code",id:"fork-the-code",level:3},{value:"Making Changes",id:"making-changes",level:3},{value:"Rebase <code>feature_x</code> to include updates from <code>upstream/main</code>",id:"rebase-feature_x-to-include-updates-from-upstreammain",level:3},{value:"Make a GitHub pull request to contribute your changes",id:"make-a-github-pull-request-to-contribute-your-changes",level:3},{value:"Cleaning up after a successful pull request",id:"cleaning-up-after-a-successful-pull-request",level:4},{value:"Further Reading",id:"further-reading",level:3},{value:"Resources",id:"resources",level:2},{value:"CloudStack Git Repositories",id:"cloudstack-git-repositories",level:3}],c={toc:i},s="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cloudstack-developer-resources"},"CloudStack Developer Resources"),(0,n.kt)("h2",{id:"contributing-as-a-non-committer"},"Contributing as a Non-Committer"),(0,n.kt)("p",null,"If you're a committer on an Apache project, it means that you can commit\ndirectly to the project's repository. For instance, with Apache CloudStack\ncommitters are allowed to directly push commits into the git repository."),(0,n.kt)("p",null,"Non-committers, however, have to submit patches for review. Apache CloudStack\naccepts ",(0,n.kt)("a",{href:"https://github.com/apache/cloudstack",target:"_blank"},"GitHub")," pull requests. If you are new to Git and GitHub,\ncheck these two links:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://try.github.io/levels/1/challenges/1"},"GitHub in 15 minutes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.github.com/articles/creating-a-pull-request/"},"Creating GitHub Pull Request"))),(0,n.kt)("p",null,"The Apache CloudStack repository is on ",(0,n.kt)("a",{href:"https://github.com/apache/cloudstack",target:"_blank"},"GitHub")," that is\nkept in sync with the canonical Git repo maintained by the Apache Software\nFoundation. Submitting GitHub pull requests is the easiest way to get your\ncontribution upstream."),(0,n.kt)("p",null,"For detailed instructions see the link below: ",(0,n.kt)("a",{href:"https://github.com/apache/cloudstack/blob/main/CONTRIBUTING.md",target:"_blank"},"CloudStack GitHub Contribution Guidelines"),"."),(0,n.kt)("h3",{id:"submitting-a-patch"},"Submitting a patch"),(0,n.kt)("p",null,"While we encourage you to submit your contribution through GitHub pull requests,\nyou can also attach a patch in a GitHub issue/ticket. For the purpose of these\ninstructions, we'll assume that you already have a system with ",(0,n.kt)("a",{href:"http://git-scm.com/",target:"_blank"},"Git")," and have found a bug to fix\nor have a feature that you'd like to submit, and you're willing to contribute\nthat code or documentation under the ",(0,n.kt)("a",{href:"http://www.apache.org/licenses/LICENSE-2.0.html",target:"_blank"},"Apache\nLicense 2.0"),"."),(0,n.kt)("p",null,"Further, if you're fixing a bug we'll assume that you've either filed a bug\nreport (where you will attach your patch) or are submitting a fix for a known\nbug. If you find a bug and would like to fix it, that's awesome! Please be sure\nto file the bug too, though."),(0,n.kt)("p",null,"If you want to add a feature, you should bring it up for discussion on the ",(0,n.kt)("a",{href:"mailto:dev@cloudstack.apache.org"},(0,n.kt)("a",{parentName:"p",href:"mailto:dev@cloudstack.apache.org"},"dev@cloudstack.apache.org"))," mailing\nlist before implementing it. This ensures that it meshes with the plans that\nother contributors have for Apache CloudStack, and that you're not doing\nredundant work. Other developers may also have ideas for the feature or\nsuggestions that will help you land the feature without having to re-do the\nwork. More information about our mailing lists can be found ",(0,n.kt)("a",{href:"/mailing-lists"},"here"),"."),(0,n.kt)("p",null,"In short, communication is a vital part of making a contribution to an Apache\nproject."),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"fork-the-code"},"Fork the code"),(0,n.kt)("p",null,"In your browser, navigate to: ",(0,n.kt)("a",{href:"https://github.com/apache/cloudstack"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack"},"https://github.com/apache/cloudstack")),"."),(0,n.kt)("p",null,"Fork the repository by clicking on the 'Fork' button on the top right hand side.\nThe fork will happen and you will be taken to your own\nfork of the repository. Copy the Git repository URL by clicking on the clipboard\nnext to the URL on the right hand side of the page under '",(0,n.kt)("b",null,"HTTPS")," clone\nURL'."),(0,n.kt)("p",null,"You will paste this URL when doing the following ",(0,n.kt)("code",null,"git clone")," command."),(0,n.kt)("p",null,"On your computer, follow these steps to setup a local repository for working on ACS:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git clone https://github.com/YOUR_ACCOUNT/cloudstack.git\n$ cd cloudstack\n$ git remote add upstream https://github.com/apache/cloudstack.git\n$ git checkout main\n$ git fetch upstream\n$ git rebase upstream/main\n")),(0,n.kt)("h3",{id:"making-changes"},"Making Changes"),(0,n.kt)("p",null,"It is important that you create a new branch to make changes on and that you do\nnot change the ",(0,n.kt)("code",null,"main")," branch (other than to rebase in changes from"),(0,n.kt)("code",null,"upstream/main"),").  In this example I will assume you will be making your changes to a branch called ",(0,n.kt)("code",null,"feature_x"),". This",(0,n.kt)("code",null,"feature_x")," branch will be created on your local repository and will be pushed to your forked repository on GitHub. Once this branch is on your fork you will create a Pull Request for the changes to be added to the ACS project.",(0,n.kt)("p",null,"It is best practice to create a new branch each time you want to contribute\nto the project and only track the changes for that pull request in this\nbranch."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ git checkout -b feature_x\n   (make your changes)\n$ git status\n$ git add .\n$ git commit -a -m "descriptive commit message for your changes"\n')),(0,n.kt)("blockquote",null,"The ",(0,n.kt)("code",null,"-b")," specifies that you want to create a new branch called ",(0,n.kt)("code",null,"feature_x"),".  You only specify ",(0,n.kt)("code",null,"-b")," the first time you checkout because you are creating a new branch.  Once the ",(0,n.kt)("code",null,"feature_x"),"branch exists, you can later switch to it with only ",(0,n.kt)("code",null,"git checkout feature_x"),"."),(0,n.kt)("h3",{id:"rebase-feature_x-to-include-updates-from-upstreammain"},"Rebase ",(0,n.kt)("code",null,"feature_x")," to include updates from ",(0,n.kt)("code",null,"upstream/main")),(0,n.kt)("p",null,"It is important that you maintain an up-to-date ",(0,n.kt)("code",null,"main")," branch in\nyour local repository.  This is done by rebasing in the code\nchanges from ",(0,n.kt)("code",null,"upstream/main")," (the official ACS project repository)\ninto your local repository.  You will want to do this before you start\nworking on a feature as well as right before you submit your changes as a pull\nrequest. We recommend you do this process periodically while you work to make\nsure you are working off the most recent project code."),(0,n.kt)("p",null,"This process will do the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Checkout your local ",(0,n.kt)("code",null,"main")," branch;"),(0,n.kt)("li",{parentName:"ul"},"Synchronize your local ",(0,n.kt)("code",null,"main")," branch with the ",(0,n.kt)("code",null,"upstream/main")," so you have all the latest changes from the project;"),(0,n.kt)("li",{parentName:"ul"},"Rebase the latest project code into your ",(0,n.kt)("code",null,"feature_x")," branch so it is up-to-date with the upstream code.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git checkout main\n$ git fetch upstream\n$ git rebase upstream/main\n$ git checkout feature_x\n$ git rebase main\n")),(0,n.kt)("blockquote",null,"Now your ",(0,n.kt)("code",null,"feature_x")," branch is up-to-date with all the code in ",(0,n.kt)("code",null,"upstream/main"),"."),(0,n.kt)("h3",{id:"make-a-github-pull-request-to-contribute-your-changes"},"Make a GitHub pull request to contribute your changes"),(0,n.kt)("p",null,"When you are happy with your changes and you are ready to contribute them, you will create a Pull Request on GitHub to do so. This is done by pushing your local changes to your forked repository (default remote name is ",(0,n.kt)("code",null,"origin"),") and then initiating a pull request on GitHub."),(0,n.kt)("p",null,"Please include JIRA ID or GitHub ID, detailed information about the bug/feature, what all tests are executed, how the reviewer can test this feature etc. In case of UI PRs, a screenshot is preferred."),(0,n.kt)("blockquote",null,(0,n.kt)("b",null,"IMPORTANT:"),"Make sure you have rebased your",(0,n.kt)("code",null,"feature_x")," branch to include the latest code from",(0,n.kt)("code",null,"upstream/main")," ",(0,n.kt)("b",null,"before"),"you do this."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git push origin main\n$ git push origin feature_x\n")),(0,n.kt)("p",null,"Now that the ",(0,n.kt)("code",null,"feature_x")," branch has been pushed to your GitHub repository, you can initiate the pull request."),(0,n.kt)("p",null,"To initiate the pull request, do the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In your browser, navigate to your forked repository: ",(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"li",href:"https://github.com/YOUR_ACCOUNT/cloudstack"},"https://github.com/YOUR_ACCOUNT/cloudstack")),";"),(0,n.kt)("li",{parentName:"ul"},"Click the new button called '",(0,n.kt)("b",null,"Compare & pull request"),"' that showed up just above the main area in your forked repository;"),(0,n.kt)("li",{parentName:"ul"},"Validate the pull request will be into the upstream ",(0,n.kt)("code",null,"main")," and will be from your ",(0,n.kt)("code",null,"feature_x")," branch;"),(0,n.kt)("li",{parentName:"ul"},"Enter a detailed description of the work you have done and then click '",(0,n.kt)("b",null,"Send pull request"),"'.")),(0,n.kt)("p",null,"If you are requested to make modifications to your proposed changes, make the changes locally on your ",(0,n.kt)("code",null,"feature_x")," branch, re-push the ",(0,n.kt)("code",null,"feature_x")," branch to your fork. The existing pull request should automatically pick up the change and update accordingly."),(0,n.kt)("h4",{id:"cleaning-up-after-a-successful-pull-request"},"Cleaning up after a successful pull request"),(0,n.kt)("p",null,"Once the ",(0,n.kt)("code",null,"feature_x")," branch has been committed into the",(0,n.kt)("code",null,"upstream/main")," branch, your local ",(0,n.kt)("code",null,"feature_x")," branch and the ",(0,n.kt)("code",null,"origin/feature_x")," branch are no longer needed. If you want to make additional changes, restart the process with a new branch."),(0,n.kt)("blockquote",null,(0,n.kt)("b",null,"IMPORTANT:"),"Make sure that your changes are in",(0,n.kt)("code",null,"upstream/main"),"before you delete your ",(0,n.kt)("code",null,"feature_x"),"and ",(0,n.kt)("code",null,"origin/feature_x")," branches!"),(0,n.kt)("p",null,"You can delete these deprecated branches with the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git checkout main\n$ git branch -D feature_x\n$ git push origin :feature_x\n")),(0,n.kt)("h3",{id:"further-reading"},"Further Reading"),(0,n.kt)("p",null,"You might want to peruse the ",(0,n.kt)("a",{href:"http://www.apache.org/foundation/getinvolved.html",target:"_blank"},"Get Involved")," page on Apache.org. Please, respect the original style of the CloudStack code, and ensure that you're using spaces rather than tabs, and your code have Unix line endings (LF) rather than Windows-type line endings (CRLF)."),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/cloudstack/"},"Public repository (on GitHub)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/cloudstack/blob/main/CONTRIBUTING.md"},"Contribution Guidelines")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://builds.apache.org/view/A-D/view/Cloudstack/"},"ASF Jenkins")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://jenkins.buildacloud.org/"},"CloudStack Jenkins")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/Development+101"},"CloudStack Development 101")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/Setting+up+CloudStack+Development+Environment"},"Setting up a Dev Environment")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/Coding+conventions"},"Code Conventions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/Testing"},"Testing CloudStack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/CLOUDSTACK"},"Obsolete Jira issue tracker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/shapeblue/hackerbook"},"Hackerbook - opensource CloudStack Developer training course")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/shapeblue/mbx"},"mbx - build and run appliance based CloudStack env for development and QA"))),(0,n.kt)("h3",{id:"cloudstack-git-repositories"},"CloudStack Git Repositories"),(0,n.kt)("p",null,"The git repositories are hosted on Apache infrastructure, and can be found here:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/cloudstack"},"https://github.com/apache/cloudstack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/cloudstack-cloudmonkey"},"https://github.com/apache/cloudstack-cloudmonkey")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/cloudstack-go"},"https://github.com/apache/cloudstack-go")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/cloudstack-terraform-provider"},"https://github.com/apache/cloudstack-terraform-provider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/cloudstack-kubernetes-provider"},"https://github.com/apache/cloudstack-kubernetes-provider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/cloudstack-ec2stack"},"https://github.com/apache/cloudstack-ec2stack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/cloudstack-documentation"},"https://github.com/apache/cloudstack-documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/cloudstack-www"},"https://github.com/apache/cloudstack-www"))),(0,n.kt)("p",null,"To get the most recent source for Apache CloudStack, use:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git clone https://github.com/apache/cloudstack.git\n")),(0,n.kt)("p",null,"Similarly, clone the cloudstack-cloudmonkey repository or the other repositories\nto get access to the most recent source of all CloudStack subprojects."),(0,n.kt)("p",null,"For projects related to Apache CloudStack but not under ASF governance, see the ",(0,n.kt)("a",{href:"https://github.com/cloudstack-extras",target:"_blank"},"CloudStack-extras repositories on GitHub"),"."))}h.isMDXComponent=!0}}]);