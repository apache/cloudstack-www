import React from "react";

export default function EventContents(): JSX.Element {
    return <>
        <section>
          <div className="container">

            <div className="row margin-second">
              <div className="col-lg-8 offset-lg-2 text-center">
                <h2 className="section-title">CloudStack Events</h2>
                <p className="px18 mt-4">
There’s always plenty of CloudStack Events happening in different
parts of the world. These range from Meet-ups, User Groups to
CloudStack Collaboration Conference events. Each event will feature a
lot of opportunities to learn, collaborate and engage with the
CloudStack community. The CloudStack Collaboration Conferences are
valuable for both developers and users, and are a great way to get
involved with the community.
		</p>
              </div>
            </div>

            <div className="horizontal-card">
              <div className="hc-header">Upcoming Events:</div>
              <div className="row">
                <div className="col-lg-9 pt-3 px-4">
                  <img src="/img/cseug-2025-autumn.png" alt="" className="events-img events-overview-img"/>
                  <p className="title mt-2">Autumn Edition: CloudStack European User Group 2025</p>
                  <p className="events-info"><img src="img/pin_icon.png" className="me-2" alt=""/>London, UK</p>
                  <p className="events-info"><img src="img/calendar_icon.png" className="me-2" alt=""/>September 18th, 2025</p>
                </div>
                <div className="col-lg-3 px-4 events-btn-margin d-flex justify-content-center justify-content-lg-end align-items-center">
                  <a href="https://www.eventbrite.com/e/autumn-edition-cloudstack-european-user-group-2025-tickets-1366848914899?aff=oddtdtcreator" className="btn btn-primary me-3">Register</a>
                  <a href="/blog/cseug-2025-london" className="btn btn-outline-secondary me-3">Read More</a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 pt-3 px-4">
                  <img src="/img/ccc-2025.jpg" alt="" className="events-img events-overview-img"/>
                  <p className="title mt-2">CloudStack Collaboration Conference 2025</p>
                  <p className="events-info"><img src="img/pin_icon.png" className="me-2" alt=""/>Milan, Italy</p>
                  <p className="events-info"><img src="img/calendar_icon.png" className="me-2" alt=""/>November 19-21, 2025</p>
                </div>
                <div className="col-lg-3 px-4 events-btn-margin d-flex justify-content-center justify-content-lg-end align-items-center">
                  <a href="https://www.eventbrite.co.uk/e/cloudstack-collaboration-conference-2025-tickets-1301872940009?aff=oddtdtcreator" className="btn btn-primary me-3">Register</a>
                  <a href="https://www.cloudstackcollab.org/" className="btn btn-outline-secondary me-3">Read More</a>
                </div>
              </div>
            </div>

            <div className="horizontal-card">
              <div className="hc-header">Past Events:</div>
              <div className="row">
                <div className="col-lg-9 pt-3 px-4">
                  <img src="/img/csiug2025.png" alt="" className="events-img events-overview-img"/>
                  <p className="title mt-2">CloudStack India User Group 2025</p>
                  <p className="events-info"><img src="img/pin_icon.png" className="me-2" alt=""/>Greater Noida, India</p>
                  <p className="events-info"><img src="img/calendar_icon.png" className="me-2" alt=""/>July 11th, 2025</p>
                </div>
                <div className="col-lg-3 px-4 events-btn-margin d-flex justify-content-center justify-content-lg-end align-items-center">
                  <a href="/blog/csiug-2025" className="btn btn-outline-secondary me-3">Read More</a>
                </div>
                <div className="col-lg-9 pt-3 px-4">
                  <img src="/img/cseug-2025.png" alt="" className="events-img events-overview-img"/>
                  <p className="title mt-2">CloudStack European User Group 2025</p>
                  <p className="events-info"><img src="img/pin_icon.png" className="me-2" alt=""/>Vienna, Austria</p>
                  <p className="events-info"><img src="img/calendar_icon.png" className="me-2" alt=""/>May 8th, 2025</p>
                </div>
                <div className="col-lg-3 px-4 events-btn-margin d-flex justify-content-center justify-content-lg-end align-items-center">
                  <a href="/blog/cseug-2025" className="btn btn-outline-secondary me-3">Read More</a>
                  <a href="https://www.youtube.com/watch?v=Kcp8BSb2QJE&list=PLnIKk7GjgFlaMg8GePeADgfC-XLmUD8-l" className="btn btn-primary me-3">Watch</a>
                </div>
                <div className="col-lg-9 pt-3 px-4">
                  <img src="/img/CCC-2024.png" alt="" className="events-img events-overview-img"/>
                  <p className="title mt-2">CloudStack Collaboration Conference 2024</p>
                  <p className="events-info"><img src="img/pin_icon.png" className="me-2" alt=""/>Madrid, Spain</p>
                  <p className="events-info"><img src="img/calendar_icon.png" className="me-2" alt=""/>November 20-22, 2024</p>
                </div>
                <div className="col-lg-3 px-4 events-btn-margin d-flex justify-content-center justify-content-lg-end align-items-center">
                  <a href="/blog/ccc-2024" className="btn btn-outline-secondary me-3">Read More</a>
                  <a href="https://youtube.com/playlist?list=PLnIKk7GjgFlaWZzwxq7UxIYdMGy_oo0W5&si=2dvKUkuoxM82hARV" target="_blank" className="btn btn-primary me-3">Watch</a>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-9 pt-3 px-4">
                  <div className="events-img events-overview-img" style={{display: "flex",  alignItems: "center"}}>
                    <img src="https://www.apachecon.com/event-images/na2024-wide-light.png" alt="C/C NA 2024"/>
                  </div>
                  <p className="title mt-2">Community Over Code North America 2024</p>
                  <p className="events-info"><img src="img/pin_icon.png" className="me-2" alt=""/>Denver, United States of America</p>
                  <p className="events-info"><img src="img/calendar_icon.png" className="me-2" alt=""/>October 7-10, 2024</p>
                </div>
                <div className="col-lg-3 px-4 events-btn-margin d-flex justify-content-center justify-content-lg-end align-items-center">
                  <a href="https://communityovercode.org/" className="btn btn-outline-secondary me-3">Read More</a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 pt-3 px-4">
                  <img src="/img/CSEUG 2024.png" alt="" className="events-img events-overview-img"/>
                  <p className="title mt-2">CloudStack European User Group 2024</p>
                  <p className="events-info"><img src="/img/pin_icon.png" className="me-2" alt=""/>Frankfurt, Germany</p>
                  <p className="events-info"><img src="/img/calendar_icon.png" className="me-2" alt=""/>Sep 19, 2024</p>
                </div>
                <div className="col-lg-3 px-4 events-btn-margin d-flex justify-content-center justify-content-lg-end align-items-center">
                  <a href="/blog/cseug-2024" className="btn btn-outline-secondary me-3">Read More</a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 pt-3 px-4">
                  <img src="/img/india 2024.jpeg" alt="" className="events-img events-overview-img"/>
                  <p className="title mt-2">CloudStack India User Group 2024</p>
                  <p className="events-info"><img src="img/pin_icon.png" className="me-2" alt=""/>Hyderabad, India</p>
                  <p className="events-info"><img src="img/calendar_icon.png" className="me-2" alt=""/>February 23, 2024</p>
                </div>
                <div className="col-lg-3 px-4 events-btn-margin d-flex justify-content-center justify-content-lg-end align-items-center">
                  <a href="https://cloudstack.apache.org/blog/india-user-group-2024/" className="btn btn-outline-secondary me-3">Read More</a>
                  <a href="https://youtube.com/playlist?list=PLnIKk7GjgFlYRGmxK70VXSgpNXjEBHpYw&si=JQzS5sYCbmTeIsfs" target="_blank" className="btn btn-primary me-3">Watch</a>
                </div>
              </div>
            </div>

            <div className="text-center load-more">
              <a href="/blog/tags/roundup" className="btn btn-outline-secondary">See Past Events</a>
            </div>

          </div>
        </section>
    </>
}
