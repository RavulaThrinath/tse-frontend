import React from "react";
import "./Faq.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { accordionContent } from "../../Data";

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
            <button className="ayq-button">Ask your Question</button>
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
      {accordionContent.map((list, index) => {
        return (
          <Accordion key={index} className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography className="accordion-question">
                {list.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="accordion-answer">
                {list.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
