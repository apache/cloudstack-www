import React from "react";

const pmc_chair_quote = `"Earlier this year, I was selected by my fellow PMC members as the project’s VP. The main role of the VP is to report
        quarterly to the Apache Software Foundation Board,
        representing CloudStack and providing updates on the health
        and status of the project. I am grateful for the opportunity
        to serve as the CloudStack VP and to work with amazing people
        from the community to continue making CloudStack an even
        greater cloud orchestration platform!"`

const pmc_chair_name = "Nicolás Vázquez"
const pmc_chair_picture = "/img/authors/nicolas.png"
const pmc_chair_githandle = "nvazquez"
const pmc_chair_linked = "nvazquezuy"

const git_link = "https://github.com/"+pmc_chair_githandle
const linked_link = "https://www.linkedin.com/in/"+pmc_chair_linked

export default function VP(): JSX.Element {
    return <>
      <div className="row">
        <div className="col col--3">

<img src={pmc_chair_picture} alt={pmc_chair_name} className="blog-image"/>

        </div>
        <div className="col col--9">

          <p>
	    <b>
		PMC Chair</b>: {pmc_chair_name}
                <a href={git_link} target="_blank">
		  <img src="/img/git_logo.svg" width="40px" alt=""/>
		</a>
		&nbsp;
                <a href={linked_link} target="_blank">
		  <img src="/img/social/LinkedIn-Blue.png" width="40px" alt=""/>
		</a>
	  </p>
          <p>

            {pmc_chair_quote}

          </p>
	</div>
      </div>
    </>
}
