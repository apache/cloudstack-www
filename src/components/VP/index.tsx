import React from "react";

const pmc_chair_quote = `"I’m excited to continue as VP this year, with a clear focus: supporting a active, open community and ensuring the project is healthy, especially as reliable, private clouds are ever more important."`

const pmc_chair_name = "Wido den Hollander"
const pmc_chair_picture = "/img/authors/wido.png"
const pmc_chair_githandle = "wido"
const pmc_chair_linked = "widodh"

const git_link = "https://github.com/"+pmc_chair_githandle
const linked_link = "https://www.linkedin.com/in/"+pmc_chair_linked

export default function VP(): JSX.Element {
    return <>
      <div className="row">
        <div className="col col--3">

<img src={pmc_chair_picture} alt={pmc_chair_name} className="blog-image"/>

        </div>
        <div className="col col--9">

          <div className="row">
            <div className="col">
          <p>
		PMC Chair: <b>{pmc_chair_name}</b>
	  </p>
	    </div>
	    <div className="col col--2">
	  <p>
                <a href={git_link} target="_blank">
		  <img src="/img/git_logo.svg" width="20px" alt=""/>
		</a>
		&nbsp;&nbsp;
                <a href={linked_link} target="_blank">
		  <img src="/img/social/LinkedIn-Blue.png" width="20px" alt=""/>
		</a>
	  </p>
	    </div>
	  </div>
          <p>

            {pmc_chair_quote}

          </p>
	</div>
      </div>
    </>
}
