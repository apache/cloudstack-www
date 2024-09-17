import React from "react";

export default function EventContents(): JSX.Element {
    return <>
        <section>
          <div className="container">

            <div className="row margin-second">
              <div className="col-lg-8 offset-lg-2 text-center">
                <h2 className="section-title">CloudStack Events</h2>
                <p className="px18 mt-4">
There’s always plenty of Cloudstack Events happening in different
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
                  <img src="/img/CSEUG 2024.png" alt="" className="events-img events-overview-img"/>
                  <p className="title mt-2">CloudStack European User Group 2024</p>
                  <p className="events-info"><img src="/img/pin_icon.png" className="me-2" alt=""/>Frankfurt, Germany</p>
                  <p className="events-info"><img src="/img/calendar_icon.png" className="me-2" alt=""/>Sep 19, 2024</p>
                </div>
                <div className="col-lg-3 px-4 events-btn-margin d-flex justify-content-center justify-content-lg-end align-items-center">
                  <a href="/blog/cseug-2024" className="btn btn-outline-secondary me-3">Read More</a>
                  <a className="button button--primary" href="https://www.eventbrite.co.uk/e/cloudstack-european-user-group-germany-tickets-879369205967" target="_blank">Register Now</a>
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
                  <a className="button button--primary" href="https://communityovercode.org/registration/" target="_blank">Register Now</a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 pt-3 px-4">
                  <img src="/img/CCC-2024.png" alt="" className="events-img events-overview-img"/>
                  <p className="title mt-2">CloudStack Collaboration Conference 2024</p>
                  <p className="events-info"><img src="img/pin_icon.png" className="me-2" alt=""/>Madrid, Spain</p>
                  <p className="events-info"><img src="img/calendar_icon.png" className="me-2" alt=""/>November 20-22, 2024</p>
                </div>
                <div className="col-lg-3 px-4 events-btn-margin d-flex justify-content-center justify-content-lg-end align-items-center">
                  <a href="/blog/ccc-2024" className="btn btn-outline-secondary me-3">Read More</a>
                  <a href="https://www.eventbrite.com/e/cloudstack-collaboration-conference-2024-tickets-879401903767" className="btn btn-primary">Register Now</a>
                </div>
              </div>
            </div>

            <div className="horizontal-card">
              <div className="hc-header">Past Events:</div>
              <div className="row">
                <div className="col-lg-9 pt-3 px-4">
                  <img src="/img/india 2024.jpeg" alt="" className="events-img events-overview-img"/>
                  <p className="title mt-2">CloudStack India User Group 2024</p>
                  <p className="events-info"><img src="img/pin_icon.png" className="me-2" alt=""/>Hyderabad, India</p>
                  <p className="events-info"><img src="img/calendar_icon.png" className="me-2" alt=""/>February 23, 2024</p>
                </div>
                <div className="col-lg-3 px-4 events-btn-margin d-flex justify-content-center justify-content-lg-end align-items-center">
                  <a href="https://cloudstack.apache.org/blog/india-user-group-2024/" className="btn btn-outline-secondary me-3">Read More</a>
                  <a href="https://www.meetup.com/india-cloudstack-user-group/events/298324389/?isFirstPublish=true" className="btn btn-primary">Register</a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 pt-3 px-4">
                  <img src="/img/ceph day.png" alt="" className="events-img events-overview-img"/>
                  <p className="title mt-2">Ceph and CloudStack day 2024</p>
                  <p className="events-info"><img src="img/pin_icon.png" className="me-2" alt=""/>Amsterdam, the Netherlands</p>
                  <p className="events-info"><img src="img/calendar_icon.png" className="me-2" alt=""/>February 22, 2024</p>
                </div>
                <div className="col-lg-3 px-4 events-btn-margin d-flex justify-content-center justify-content-lg-end align-items-center">
                  <a href="https://www.eventbrite.nl/e/cloudstack-and-ceph-day-netherlands-2024-tickets-700177167757" className="btn btn-primary">Register</a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 pt-3 px-4">
                  <img src="/img/event_img2.png" alt="" className="events-img events-overview-img"/>
                  <p className="title mt-2">CloudStack Collaboration Conference 2023</p>
                  <p className="events-info"><img src="img/pin_icon.png" className="me-2" alt=""/>Paris, Île-de-France, France</p>
                  <p className="events-info"><img src="img/calendar_icon.png" className="me-2" alt=""/>November 23-24, 2023</p>
                </div>
                <div className="col-lg-3 px-4 events-btn-margin d-flex justify-content-center justify-content-lg-end align-items-center">
                  <a href="https://cloudstack.apache.org/blog/ccc2023-roundup" className="btn btn-outline-secondary me-3">Read More</a>
                  <a href="https://www.youtube.com/playlist?list=PLnIKk7GjgFlZsBJestxnL-xF5DxgewxYh" className="btn btn-primary">Watch</a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 pt-3 px-4">
                  <img src="/img/CSEUG 2023.png" alt="" className="events-img events-overview-img"/>
                  <p className="title mt-2">CloudStack European User Group 2023</p>
                  <p className="events-info"><img src="img/pin_icon.png" className="me-2" alt=""/>London, UK</p>
                  <p className="events-info"><img src="img/calendar_icon.png" className="me-2" alt=""/>May 4, 2023</p>
                </div>
                <div className="col-lg-3 px-4 events-btn-margin d-flex justify-content-center justify-content-lg-end align-items-center">
                  <a href="https://cloudstack.apache.org/blog/cseug-2023-roundup" className="btn btn-outline-secondary me-3">Read More</a>
                  <a href="https://www.youtube.com/playlist?list=PLnIKk7GjgFlZtSvP7zSXDKr-r5qLCKCFd" className="btn btn-primary">Watch</a>
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
