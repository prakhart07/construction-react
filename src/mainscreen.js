import AboutSection from "./aboutSection";
import BlogSection from "./blogsection";
import ClientLogo from "./clientlogo";
import Contact from "./contact";
import Footer from "./footer";
import Header from "./header";
import HomeSection from "./home";
import PriceSection from "./pricesection";
import Project from "./project";
import Review from "./review";
import Service from "./service";


function MainScreen(){

    return(
        <div>
            <Header/>
            <HomeSection/>
            <AboutSection/>
            <Service/>
            <Project/>
            <Review/>
            <PriceSection/>
            <Contact/>
            <BlogSection/>
            <ClientLogo/>
            <Footer/>
        </div>
    )
};

export default MainScreen;