import { AppFooter } from "../cmps/AppFooter.jsx"
const { Fragment} = React;
export function About() {
    return (
        <Fragment>
        <section className="about">
         <div className="bg-image-about"></div>
      <div className="about-section">
        <h1>
        About Us
        </h1>
        <p>
        At Appsus, we are a dynamic duo passionate about crafting a multitude of applications. Founded by a team of two dedicated individuals, our mission is to innovate and create a diverse range of apps.With our collective expertise and relentless drive, we aim to deliver high-quality solutions that cater to various needs. Join us on our journey as we continue to shape the world of technology, one app at a time.
        </p>
        <p>
        Our inaugural app focuses on revolutionizing the email experience. With a dedication to simplifying communication, our team has meticulously designed an intuitive and efficient mail application. Our goal is to streamline your inbox, offering a seamless interface that enhances productivity while ensuring a delightful user experience. Stay tuned as we unveil our innovative approach to managing emails, redefining how you interact with your inbox.
        </p>
        <p>
        Following the success of our email app, we're thrilled to introduce our next innovation: a cutting-edge note-taking application. Crafted with precision and user convenience in mind, this app aims to elevate your note-taking experience. From organizing thoughts to capturing ideas on-the-go, our intuitive interface and powerful features are tailored to empower your creativity and productivity. Get ready to reimagine the way you jot down and manage your thoughts with our upcoming note-taking app.
        </p>
        <h2>Our Team</h2>
        <div className="team-member">
            <div className="team-avatar"><img src="./../assets/img/hacker.jpg"/></div>
          <h3>Boris</h3>
          <p>It's wonderful to hear about Boris's contribution to the world of mail applications! Boris, through his dedication and expertise, has created an exceptional mail app that redefines how users interact with their emails. This application is a testament to Boris's commitment to simplifying communication and enhancing productivity. With an intuitive interface and innovative features, Boris's mail app promises to streamline inboxes and offer a seamless user experience. It's exciting to see individuals like Boris making significant strides in the tech world with their remarkable creations.</p>
        </div>
        <div className="team-member">
            <div className="team-avatar"><img src="./../assets/img/man.jpg"/></div>
          <h3>Konstantin </h3>
          <p>Konstantin's dedication to creating a notes application has led to an incredible innovation in the realm of digital note-taking. His application stands as a testament to his passion for enhancing productivity and creativity. Konstantin's notes app is designed with precision, offering an intuitive interface and powerful features that cater to organizing thoughts and ideas efficiently. Through his expertise and commitment to user-centric design, Konstantin has crafted a note-taking experience that is set to transform the way users capture and manage their thoughts seamlessly. It's inspiring to witness individuals like Konstantin contributing to the tech landscape with their remarkable creations.</p>
        </div>
      </div>
      </section>
      <AppFooter/>
      </Fragment>
    )
}

    // <section className="about">
    //     <h1>About Page</h1>
    // </section>