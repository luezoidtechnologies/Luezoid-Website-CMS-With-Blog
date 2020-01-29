import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
export const IndexPageTemplate = ({
    image,
    bannerimage,    
    aboutUsData, 
    ourserviceData,   
    portfolioData,
    ourapproachData,
    ourteamTitle,
    teamList,
    ourTeamData,
    contactUsData,
    footerData    
}) => (
        <div>
            <div id="dotted-naviagtion" className="dotstyle dotstyle-tooltip align-items-center" id="navbarSupportedContent"
                style={{
                    background: "rgba(255,255,255,0.6)",
                    position: "fixed",
                    right: "0.5%",
                    top: "50%",
                    marginTop: "-308px",
                    boxShadow: "0px 0px 1px 1px #f0f0f0",
                    borderRadius: "2rem",
                    zIndex: "1000"
                }}>
                <ul className="navbar-nav ml-auto">
                    <a href="#home" style={{ outline: "none" }}>
                        <li className="list-items nav-item dropdown home-dot current"></li>
                    </a>
                    <a href="#about_us" style={{ outline: "none" }}>
                        <li className="list-items nav-item dropdown about-us-dot"></li>
                    </a>
                    <a href="#services" style={{ outline: "none" }}>
                        <li className="list-items nav-item dropdown services-dot"></li>
                    </a>
                    <a href="#portfolio" style={{ outline: "none" }}>
                        <li className="list-items nav-item dropdown our-work-dot"></li>
                    </a>
                    <a href="#our-client" style={{ outline: "none" }}>
                        <li className="list-items nav-item dropdown client-dot"></li>
                    </a>
                    <a href="#our-approach" style={{ outline: "none" }}>
                        <li className="list-items nav-item dropdown our-way-dot"></li>
                    </a>
                    <a href="#teams" style={{ outline: "none" }}>
                        <li className="list-items nav-item dropdown our-team-dot"></li>
                    </a>
                    <a href="#contact_us" style={{ outline: "none" }}>
                        <li className="list-items nav-item dropdown contact-us-dot" style={{ marginBottom: "3.2rem" }}></li>
                    </a>
                </ul>
            </div>
            <nav>
                <a className="navbar-brand" href="#">
                    <img alt="Luezoid Logo" src={image && image.childImageSharp ? image.childImageSharp.fluid.src : image} className="luezoid-logo" />
                </a>
            </nav>
            <div className="container-fluid banner-container" style={{
                backgroundImage: `url(${bannerimage && bannerimage.childImageSharp ? bannerimage.childImageSharp.fluid.src : bannerimage
                    })`
            }}>
                <div className="row" style={{ paddingBottom: "6rem" }}>
                    <div className="col-md-12 text-center" style={{ overflowX: "hidden" }}>
                        <h4 className="color-purple font-weight-bold sec-text-technologies">TECHNOLOGIES</h4>
                    </div>
                    <div className="col-md-12 text-center scroll-icon">
                        <a href="#about_us">
                            <div className="mousey mt-2">
                                <div className="scroller"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div id="about_us" className="container-fluid common-margins">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xl-12">
                        <div className="header-background" style={{ overflowX: "hidden" }}>
                            <div>WE ARE</div>
                        </div>
                        <div className="header-text ml-4">
                            {aboutUsData && aboutUsData.title ? aboutUsData.title : 'We are'}
                            {console.log('-------->>>>ourserviceData', ourserviceData)}
                            {console.log('-------->>>>portfolioData', portfolioData)}
                            {console.log('-------->>>>ourapproachData', ourapproachData)}
                            {console.log('---------->>> teamsdata', ourTeamData)}
            </div>
                    </div>
                </div>
                <div className="row about-us-content">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-5">
                        <div className="detail-header" style={{ lineHeight: "4rem" }}>
                            {aboutUsData && aboutUsData.heading ? aboutUsData.heading : ''}
            </div>
                        <div className="detail-content mt-3">{aboutUsData && aboutUsData.textcontent ? aboutUsData.textcontent : ''}</div>
                        <div className="text-left start-project-btn">
                            <a href="start-project.html" target="_blank">
                                <button className="btn btn-primary btn-round btn-gradient mt-4 mb-4 f_14 start-project">
                                    START A PROJECT
                    </button>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 align-items-center">

                        <div style={{
                            overflowX: "hidden",
                            overflowY: "visible"
                        }} className="forAnimation">
                            <img src={aboutUsData && aboutUsData.image && aboutUsData.image.childImageSharp ? aboutUsData.image.childImageSharp.fluid.src : image} className="about-us-img" width="80%" height="80%"
                                alt="Creative Partners Images" />
                        </div>

                    </div>
                </div>
            </div>
            {/* <div id="services" className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="header-background">
                            SERVICES
            </div>
                        <div className="header-text ml-4">
                            Services
            </div>
                    </div>
                </div>

                <div className="row our-service-mobile">
                    <div className="col-12 col-md-6">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <img src="assets/images/web-app.png" className="service-img mt-4" alt="Services Image"
                                    width="100%" height="100%" />
                            </div>
                            <div className="col-md-12 mt-5">
                                <div className="detail-heading">
                                    WEB APPLICATIONS
                    </div>
                                <div className="detail-contents mt-4">
                                    Professional and prominent Development team is proficient in all the contemporary languages and
                                    latest framework
                        technologies providing the best quality web applications.<br />
                                    Team looks beyond the visual effect of the website and takes other factors into consideration
                                    such as the user-friendliness of the website, ease of maintenance and adhering to the best
                                    practices and website development standards.
                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <img src="assets/images/mobile-app.png" className="service-img mt-4" alt="Services Image" width="100%"
                                    height="100%" />
                            </div>
                            <div className="col-md-12 mt-5">
                                <div className="detail-heading">
                                    MOBILE APPLICATION
                    </div>
                                <div className="detail-contents mt-4">
                                    The smartphone has changed the way we communicate. Professional mobile development team is
                                    highly skilled and proficient in Native as well as Hybrid application development.
                                    We carefully craft every single app to give the end-user the best product experience possible,
                                    every time they engage - no matter the platform, device, or channel and finally delivery high
                                    quality, cost effective and beautiful mobile application.
                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <img src="assets/images/ui-ux-design.png" className="service-img mt-4" alt="Services Image"
                                    width="100%" height="100%" />
                            </div>
                            <div className="col-md-12 mt-5">
                                <div className="detail-heading">
                                    UI/UX Design
                    </div>
                                <div className="detail-contents mt-4">
                                    Professional designing team are specialists in web and app design. They find a total balance
                                    between usability, aesthetics and code to create a unique user experience. Team have the ability
                                    to take UX/UI design from ideation to production such as user flows, journey diagrams,
                                    wireframes, sketches, prototypes, layouts, UI assets, and production documents etc. and develop
                                    a simple, clean, and attractive UI/front-end and reinforce brand identity through awesome
                                    designs.
                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <img src="assets/images/digital-marketing.png" className="service-img mt-4" alt="Services Image"
                                    width="100%" height="100%" />
                            </div>
                            <div className="col-md-12">
                                <div className="detail-heading mt-5">
                                    DIGITAL STRATEGY
                    </div>
                                <div className="detail-contents mt-4">
                                    Our digital strategy helps clients identify ways they can better reach current and future
                                    customers. We do this through a whole suite of options and discplines, including Digital
                                    Consultancy, Content Strategy, E-Commerce Strategy. Brand Strategy, Technical Strategy,
                                    Marketing Strategy and Search Strategy.
                    </div>
                            </div>
                        </div>~
                    </div>
                </div>

                <div className="flickity flickity-fullscreen service-slider">
                    <div className="gallery-cell">
                        <div className="row service-1" style={{ flex: "0 0 100%" }} data-id="service-1">
                            <div className="col-md-6">
                                <div className="detail-heading">
                                    WEB APPLICATION
                    </div>
                                <div className="detail-contents mt-4">
                                    Professional and prominent Development team is proficient in all the contemporary languages and
                                    latest framework
                        technologies providing the best quality web applications.<br />
                                    Team looks beyond the visual effect of the website and takes other factors into consideration
                                    such as the user-friendliness of the website, ease of maintenance and adhering to the best
                                    practices and website development standards.
                    </div>
                                <div className="text-left start-project-btns">
                                    <a href="start-project.html" target="_blank">
                                        <button className="btn btn-primary btn-round btn-gradient mt-4 mb-4 f_14 start-project">
                                            START A PROJECT
                            </button>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 text-center">
                                <img src="assets/images/web-app.png" className="service-img mt-4" alt="Services Image" />
                            </div>
                        </div>
                    </div>
                    <div className="gallery-cell">
                        <div className="row service-1" style={{ flex: "0 0 100%" }} data-id="service-1">
                            <div className="col-md-6">
                                <div className="detail-heading">
                                    MOBILE APPLICATION
                    </div>
                                <div className="detail-contents mt-4">
                                    The smartphone has changed the way we communicate. Professional mobile development team is
                                    highly skilled and proficient in Native as well as Hybrid application development.
                                    We carefully craft every single app to give the end-user the best product experience possible,
                                    every time they engage - no matter the platform, device, or channel and finally delivery high
                                    quality, cost effective and beautiful mobile application.
                    </div>
                                <div className="text-left start-project-btns">
                                    <a href="start-project.html" target="_blank">
                                        <button className="btn btn-primary btn-round btn-gradient mt-4 mb-4 f_14 start-project">
                                            START A PROJECT
                            </button>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 text-center">
                                <img src="assets/images/mobile-app.png" className="service-img mt-4" alt="Services Image" />
                            </div>
                        </div>
                    </div>
                    <div className="gallery-cell">
                        <div className="row service-1" style={{ flex: "0 0 100%" }} data-id="service-1">
                            <div className="col-md-6">
                                <div className="detail-heading">
                                    UI/UX Design
                    </div>
                                <div className="detail-contents mt-4">
                                    Professional designing team are specialists in web and app design. They find a total balance
                                    between usability, aesthetics and code to create a unique user experience. Team have the ability
                                    to take UX/UI design from ideation to production such as user flows, journey diagrams,
                                    wireframes, sketches, prototypes, layouts, UI assets, and production documents etc. and develop
                                    a simple, clean, and attractive UI/front-end and reinforce brand identity through awesome
                                    designs.
                    </div>
                                <div className="text-left start-project-btns">
                                    <a href="start-project.html" target="_blank">
                                        <button className="btn btn-primary btn-round btn-gradient mt-4 mb-4 f_14 start-project">
                                            START A PROJECT
                            </button>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 text-center">
                                <img src="assets/images/ui-ux-design.png" className="service-img mt-4" alt="UI/UX Design" />
                            </div>
                        </div>
                    </div>
                    <div className="gallery-cell">
                        <div className="row service-1" style={{ flex: "0 0 100%" }} data-id="service-1">
                            <div className="col-md-6">
                                <div className="detail-heading">
                                    DIGITAL STRATEGY
                    </div>
                                <div className="detail-contents mt-4">
                                    Our digital strategy helps clients identify ways they can better reach current and future
                                    customers. We do this through a whole suite of options and discplines, including Digital
                                    Consultancy, Content Strategy, E-Commerce Strategy. Brand Strategy, Technical Strategy,
                                    Marketing Strategy and Search Strategy.
                    </div>
                                <div className="text-left start-project-btns">
                                    <a href="start-project.html" target="_blank">
                                        <button className="btn btn-primary btn-round btn-gradient mt-4 mb-4 f_14 start-project">
                                            START A PROJECT
                            </button>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 text-center">
                                <img src="assets/images/digital-marketing.png" className="service-img mt-4" alt="Services Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div id="portfolio" className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="header-background">
                            OUR WORK
            </div>
                        <div className="header-text ml-4">
                            {portfolioData && portfolioData.portfoliotitle ? portfolioData.portfoliotitle : 'Our Work'}
            </div>
                    </div>
                </div>

                <div className="l-work-wrapper my-5">
                    <div className="mx-md-5">
                        <div className="row mb-2">
                            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-12 p-0 mb-3">
                                <div className="w-100 d-flex flex-row justify-content-center">
                                    <a href="http://takkeh.com" target="_blank" className="project-box text-decoration-none text-dark">
                                        <div className="project-image-sec">
                                            <img src="assets/images/portfolio/2.png" alt="" className="proj-image img-responsive" />
                                        </div>
                                        <div className="about-project-sec py-3 px-2">
                                            <h5 className="text-center font-weight-bold">TAKKEH</h5>
                                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut risus viverra,
                                    tempor ipsum eget, efficitur leo.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-12 p-0 mb-3">
                                <div className="w-100 d-flex flex-row justify-content-center">
                                    <a href="http://samagragovernance.in/" target="_blank" className="project-box text-decoration-none text-dark">
                                        <div className="project-image-sec">
                                            <img src="assets/images/portfolio/7.png" alt="" className="proj-image img-responsive" />
                                        </div>
                                        <div className="about-project-sec py-3 px-2">
                                            <h5 className="text-center font-weight-bold">SAMAGRA GOVERNANCE</h5>
                                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut risus viverra,
                                    tempor ipsum eget, efficitur leo.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-12 p-0 mb-3">
                                <div className="w-100 d-flex flex-row justify-content-center">
                                    <a href="https://www.bonoride.com" target="_blank" className="project-box text-decoration-none text-dark">
                                        <div className="project-image-sec">
                                            <img src="assets/images/portfolio/1.png" alt="" className="proj-image img-responsive" />
                                        </div>
                                        <div className="about-project-sec py-3 px-2">
                                            <h5 className="text-center font-weight-bold">BONO RIDE</h5>
                                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut risus viverra,
                                    tempor ipsum eget, efficitur leo.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="row mb-2">
                            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-12 p-0 mb-3">
                                <div className="w-100 d-flex flex-row justify-content-center">
                                    <a href="http://www.kasoexplorers.co.in" target="_blank" className="project-box text-decoration-none text-dark">
                                        <div className="project-image-sec">
                                            <img src="assets/images/portfolio/3.png" alt="" className="proj-image img-responsive" />
                                        </div>
                                        <div className="about-project-sec py-3 px-2">
                                            <h5 className="text-center font-weight-bold">KASO EXPLORERS</h5>
                                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut risus viverra,
                                    tempor ipsum eget, efficitur leo.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-12 p-0 mb-3">
                                <div className="w-100 d-flex flex-row justify-content-center">
                                    <a href="http://timesinternet.in" target="_blank" className="project-box text-decoration-none text-dark">
                                        <div className="project-image-sec">
                                            <img src="assets/images/portfolio/6.png" alt="" className="proj-image img-responsive" />
                                        </div>
                                        <div className="about-project-sec py-3 px-2">
                                            <h5 className="text-center font-weight-bold">TIMES INTERNET</h5>
                                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut risus viverra,
                                    tempor ipsum eget, efficitur leo.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-12 p-0 mb-3">
                                <div className="w-100 d-flex flex-row justify-content-center">
                                    <a href="http://beehealthee.com" target="_blank" className="project-box text-decoration-none text-dark">
                                        <div className="project-image-sec">
                                            <img src="assets/images/portfolio/4.png" alt="" className="proj-image img-responsive" />
                                        </div>
                                        <div className="about-project-sec py-3 px-2">
                                            <h5 className="text-center font-weight-bold">BEEHEALTHEE</h5>
                                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut risus viverra,
                                    tempor ipsum eget, efficitur leo.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div id="our-approach" className="container-fluid ">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="header-background">
                            OUR WAY
            </div>
                        <div className="header-text ml-4">
                            Our Way
            </div>
                    </div>
                </div>
                <div className="row p-4 mb-4 our-way forAnimation">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="row" style={{ overflowX: "hidden" }}>
                            <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12 mt-md-3 text-center">
                                <img src="assets/images/our_ways/1.png" className="img-ways" />
                            </div>
                            <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12 our-way-text text-md-left">
                                <strong className="text-uppercase our-way-headings">We Talk</strong>
                                <p className="mt-1">
                                    All great relationships start with a chat. Online or ever coffee, there's no better way of
                                    getting to know each other. We'll listen, offer advice, and present solutions which will help
                                    achieve your goals.
                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="row our-ways-we-think" style={{ overflowX: "hidden" }}>
                            <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12 mt-md-3 text-center">
                                <img src="assets/images/our_ways/2.png" className="img-ways" />
                            </div>
                            <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12 our-way-text text-md-left">
                                <strong className="text-uppercase our-way-headings">We Think</strong>
                                <p className="mt-1">
                                    Stategise, plan, and execute. We create concepts that challange your ideas and get you thining
                                    differently. We then work with you to refine them, leaving you grinning from ear-to-ear.
                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-4 mt-2 forAnimation">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="row" style={{ overflowX: "hidden" }}>
                            <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12 mt-md-3 text-center">
                                <img src="assets/images/our_ways/3.png" className="img-ways" />
                            </div>
                            <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12 our-way-text text-md-left">
                                <strong className="text-uppercase our-way-headings">We Create</strong>
                                <p className="mt-1">
                                    From beautiful brands to exciting websites, we craft our designs with flair, care and attention
                                    to detail. We've listened, we've planned, now we make those ideas into a reality.
                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="row our-ways-we-develop" style={{ overflowX: "hidden" }}>
                            <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12 mt-md-3 text-center">
                                <img src="assets/images/our_ways/4.png" className="img-ways" />
                            </div>
                            <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12 our-way-text text-md-left">
                                <strong className="text-uppercase">We Deliver</strong>
                                <p className="mt-1">
                                    In pixels or on papper, our projects are delivered with the minimum of fuss using a finely tuned
                                    process. We keep you posted at every stage, giving you the confidence that we'll deliver your
                                    projects on time, every time.
                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="start-project.html" target="_blank">
                        <button className="btn btn-primary btn-round btn-gradient mt-4 mb-4 f_14 start-project">
                            START A PROJECT
            </button>
                    </a>
                </div>
            </div>

            <div id="teams" className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="header-background">
                            OUR TEAM
            </div>
                        <div className="header-text ml-4">
                            {ourTeamData && ourTeamData.ourteamtitle ? ourTeamData.ourteamtitle : 'Our Team'}
            </div>
                    </div>
                </div>
                <div className="row mb-4 team-content forAnimation">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 we-r-zoids">
                        <div className="container">
                            <div className="row">
                                {ourTeamData && ourTeamData.teamlist ? ourTeamData.teamlist.map((d , index) =>                  
                                    <div key={index} className="col-md-4 my-3 team-image" data-id={d.name}>
                                    <img alt={d.name} src={d.image && d.image.childImageSharp ? d.image.childImageSharp.fluid.src : d.image} width="100%" height="100%"
                                        className="team-img" />
                                    <div className="team-member-names-profile text-center pb-3 pt-3">
                                        <h5>
                                            <a href={d.linkedinprofilelink} target="_blank"
                                                className="color-white text-decoration-none">
                                                <i className="fab fa-linkedin color-linkedin"></i> <span>&nbsp;{d.name}</span>
                                            </a>
                                        </h5>
                                <span>{d.designation}</span>
                                    </div>
                                </div>         
                                    
                                ): ''}                                                       
                            </div>              
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact_us" className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="header-background">
                            CONTACT US
            </div>
                        <div className="header-text ml-4">
                        {contactUsData && contactUsData.contactustitle ? contactUsData.contactustitle : 'Contact Us'}
            </div>
                    </div>
                </div>
                <div className="row contact-us-content">
                    <iframe className="light-overlay iframe-section"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803.4561956651662!2d77.21498797072277!3d28.548710135661437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf4cee3ee4a8e368e!2sLuezoid+Technologies+Private+Limited!5e0!3m2!1sen!2sin!4v1551771849981"
                        width="100%" height="800" frameBorder="0" allowFullScreen></iframe>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contact-us-bg forAnimation" style={{ overflow: "hidden" }}>
                        <div className="col-md-12 text-center get-in-touch">
                            <h6 className="text-black-50">{contactUsData && contactUsData.heading ? contactUsData.heading : ''}</h6>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center mt-5 info-Luezoid">
                                <h2>{contactUsData && contactUsData.companyid ? contactUsData.companyid : ''}</h2>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center mt-5 luezoid-img">
                            <img src={contactUsData && contactUsData.companylogo && contactUsData.companylogo.childImageSharp ? contactUsData.companylogo.childImageSharp.fluid.src : image} className="luezoid-logo" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center mt-5 contact-addr-box">
                            <span className="text-black-50">125-A, 2nd Floor, Shahpur Jat</span><br />
                            <span className="text-black-50">New Delhi 110049</span><br />
                            <span>+91 9666718260</span>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center mt-5 mb-5">
                            <a href="start-project.html" target="_blank">
                                <button className="btn btn-primary btn-round btn-gradient f_14 start-project">
                                    START A PROJECT
                    </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <footer>
                    <div className="row">
                        <div className="footer-list col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-2 text-center">
                            <ul className="list-unstyled text-uppercase text-center" style={{ display: "inline-table", marginTop: "1px" }}>
                                <li style={{ display: "inline" }}>
                                    <a href="https://www.facebook.com/luezoidtechnologies" target="_blank">
                                        <i className="fab fa-facebook-square fa-2x color-facebook"></i>
                                    </a>
                                </li>
                                <li style={{ display: "inline" }}>
                                    <a href="https://github.com/luezoidtechnologies" target="_blank">
                                        <i className="fab fa-github-square fa-2x color-github"></i>
                                    </a>
                                </li>
                                <li style={{ display: "inline" }}>
                                    <a href="https://stackoverflow.com/users/10594868/luezoid-technologies" target="_blank">
                                        <i className="fab fa-stack-overflow fa-2x color-stack-overflow"></i>
                                    </a>
                                </li>
                                <li style={{ display: "inline" }}>
                                    <a href="https://twitter.com/luezoidtech" target="_blank">
                                        <i className="fab fa-twitter-square fa-2x color-twitter"></i>
                                    </a>
                                </li>
                                <li style={{ display: "inline" }}>
                                    <a href="https://www.linkedin.com/in/luezoid-technologies-250597174/" target="_blank">
                                        <i className="fab fa-linkedin fa-2x color-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
                        <div className="footer-copyright col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                            <p className="mt-4">
                                <i className="far fa-copyright"></i> {footerData && footerData.copyright ? footerData.copyright : ''}
                </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    bannerimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    aboutus: PropTypes.shape({
        title: PropTypes.string,
        heading: PropTypes.string,
        textcontent: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])

    }),
    ourservice: PropTypes.shape({
        servicetitle: PropTypes.string,
        servicelist: PropTypes.shape({
            heading: PropTypes.string,
            description: PropTypes.string,
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        })
    }),
    portfolio: PropTypes.shape({
        portfoliotitle: PropTypes.string,
        portfoliolist: PropTypes.shape({
            portfolioimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            portfolioheading: PropTypes.string,
            description: PropTypes.string,
            url: PropTypes.string
            })
    }),
    ourapproach: PropTypes.shape({
        ourapproachtitle: PropTypes.string,
        ourapproachlist: PropTypes.shape({
            iconimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            heading: PropTypes.string,
            description: PropTypes.string

        })             
    }),
    ourteam: PropTypes.shape({
        ourteamtitle: PropTypes.string,
        teamlist: PropTypes.shape({
            name: PropTypes.string,
            designation: PropTypes.string,
            linkedinprofilelink: PropTypes.string,
            image:PropTypes.oneOfType([PropTypes.object, PropTypes.string])
        })
    }),
    contactus: PropTypes.shape({
        contactustitle: PropTypes.string,
        heading: PropTypes.string,
        companyid: PropTypes.string,
        companyaddress: PropTypes.string,
        companylogo: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    }),
    footer: PropTypes.shape({
        copyright: PropTypes.string,
        socialmedialist: PropTypes.shape({
            socialmedianame: PropTypes.string,
            socialmediaiconimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        }),
        medialink: PropTypes.string,
    })
}

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                bannerimage={frontmatter.bannerimage}                               
                aboutUsData = {frontmatter.aboutus}
                ourserviceData = {frontmatter.ourservice}
                portfolioData = {frontmatter.portfolio}
                ourapproachData = {frontmatter.ourapproach}                
                ourTeamData = {frontmatter.ourteam}
                contactUsData = {frontmatter.contactus}
                footerData = {frontmatter.footer} 
            />
        </Layout>
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {       
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }      
        bannerimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aboutus{
            title
            heading
            textcontent
            image{
                childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
            }
        }
        ourservice{
            servicetitle
            servicelist{
                heading
                description
                image{
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                }
            }
        }
        portfolio{
            portfoliotitle
            portfoliolist{
                portfolioimage{
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                }
                portfolioheading
                description
                url
            }
        }
        ourapproach{
            ourapproachtitle
            ourapproachlist{
                iconimage{
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      } 
                }
                heading
                description
            }
        }
        ourteam{
            ourteamtitle
            teamlist{
                name
                designation
                linkedinprofilelink
                image{
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      } 
                }
            }
        }
        contactus{
            contactustitle
            heading
            companyid
            companyaddress
            companylogo{
                childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
            }

        }
        footer{
            copyright
            socialmedialist{
                socialmedianame
                socialmediaiconimage{
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                }
                medialink
            }
        }
      }
    }
  }
`
