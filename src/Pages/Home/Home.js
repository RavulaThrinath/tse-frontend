import React from "react";
import "./Home.css";
import Landing from "../../Components/Landing/Landing";
import ServicesContainer from "../../Components/ServicesContainer/ServicesContainer";
import Numbers from "../../Components/Numbers/Numbers";
import Mentors from "../../Components/Mentors/Mentors";
import Steps from "../../Components/Steps/Steps";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Faq from "../../Components/FAQs/Faq";
import Plans from "../../Components/Plans/Plans";

export default function Home() {
  return (
    <>
      <div className="home">
        <Landing />
      </div>
      <ServicesContainer />
      <Numbers />
      <Mentors />
      <Steps />
      <Plans />
      
      <Testimonials />
      <Faq />
    </>
  );
}
