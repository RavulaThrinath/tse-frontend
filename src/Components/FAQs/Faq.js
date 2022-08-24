import React from "react";
import "./Faq.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
// import { accordionContent } from "../../Data";
import { Link } from "react-router-dom";

export default function Faq() {
  return (
    <>
      <div className="faq">
        <div className="header-main">
          <h1 className="title-main">Frequently Ask Questions </h1>
          <p className="desc-main">Frequently Ask Question </p>
        </div>
        <div className="faq-content">
          <div className="faq-left">
            <h1>{`Got a question? We're here to answer! If you don't see your question here, drop us a line.`}</h1>
            <Link to="/contact" className="ayq-button">
              Ask your Question
            </Link>
          </div>
          <AccordionComponent />
        </div>
      </div>
    </>
  );
}

const AccordionComponent = () => {
  return (
    <div className="accordion-list">
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography className="accordion-question">Who are we?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion-answer">
            Trade Sense Expert is a Consultancy Firm that majors in Financial
            Trading, we help Client Optimize trading opportunities. We are not a
            brokerage firm but we help clients annex profitable opportunities
            off the financial market. We are traders delight as we proffer
            trading solutions which help traders have an apt trading experience.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography className="accordion-question">What do we do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion-answer">
            <p>Our service cuts across not limited to:</p>
            <ul className="answer-list">
              <li>Trainings</li>
              <li>Sales of Trading Materials</li>
              <li>eBooks</li>
              <li> Installation of Expert Advisors</li>
              <li>Virtual Web Servers</li>
              <li>Other Consultancy Services</li>
              <li>Risk Mitigation and Account Management</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography className="accordion-question">
            How can I come on board?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion-answer">
            Our Onboarding process is seamless, you could want to speak to a
            consultant as to coming on board.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography className="accordion-question">
            {" "}
            What are the main advantages to being on board?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion-answer">
            <ul className="answer-list">
              <li>
                Our Risk Mitigation and Account Management offers clients.
              </li>
              <li>
                Our expert advisors can give a guaranteed 75% ROI in 3 Months
              </li>
              <li>Our Virtual Web Servers can host servers as large as 5MB</li>
              <li>Trainings are advised solely based on client’s needs</li>
              <li>There’s a training/eBook for every trader</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography className="accordion-question">
            How certain is it to make money off the financial market?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion-answer">
            <ul className="answer-list">
              <li>
                There’s a solution for everyone just to ensure everyone smiles
                off the market.
              </li>
              <li>Our Expert Advisors are tested and trusted.</li>
              <li>
                Our awareness of market liquidity gives us that edge to either
                take and wait for opportunities as they present themselves.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
