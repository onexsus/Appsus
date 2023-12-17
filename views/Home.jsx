
const { Link } = ReactRouterDOM
const { Fragment} = React;

import { AppFooter } from "../cmps/AppFooter.jsx"
export function Home() {
    return(
      <Fragment>
       <section className="home">
         <div className="bg-image"></div>
      <div className="hero-section">
        <h1>
        Welcome to Appsus, your ultimate <br/>destination for a myriad of apps!
        </h1>
        <p>
        Discover a myriad of tools, entertainment, and utilities tailored to elevate your digital experience. Explore and empower your tech journey with us!"
        </p>
       <div className="link-btn">
        <Link to="/mail">
            <div className='btn-logo-app bk-logo'><img src="./../assets/img/bkmail-logo.jpg"/></div>
        </Link>
        <Link to="/note">
            <div className='btn-logo-app'>
            <img src="./../assets/img/note-logo.jpg"/>
            </div>

        </Link>
         
        </div>
      </div>
      <div className="services-cards flex ">
        <div className="service-card flex column space-between align-center">
          <div className="service-card-img">
            <img src="./../assets/img/icons-app-store.jpg" />
          </div>
          <h3 className="service-card-title">Top 10 App</h3>
          <div className="service-card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="service-card flex column space-between align-center">
          <div className="service-card-img ">
            <img src="./../assets/img/icons-rating.jpg" />
          </div>
          <h3 className="service-card-title">App Rating</h3>
          <div className="service-card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="service-card flex column  align-center space-between">
          <div className="service-card-img ">
            <img src="./../assets/img/icons-users.jpg" />
          </div>
          <h3 className="service-card-title">+100K<br/> Users</h3>
          <div className="service-card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="service-card flex column space-between align-center service-card-apps">
          <div className="service-card-img">
            <img src="./../assets/img/icons-apps.jpg" />
          </div>
          <h3 className="service-card-title">Appsus</h3>
          <div className="service-card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="service-card flex column space-between align-center">
          <div className="service-card-img">
            <img src="./../assets/img/icon-service.jpg" />
          </div>
          <h3 className="service-card-title">24/7<br/>Support</h3>
          <div className="service-card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </section>
    <AppFooter/>
    </Fragment>
    )
}