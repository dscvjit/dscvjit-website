import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion';

class FAQ extends Component {
  render() {
    return (
      <section className="faq-area ptb-100 bg-gray">
        <div className="container">
          <div className="section-title">
            <h2>FAQ</h2>
            <div className="bar" />
            <p>
              The below are some of the frequently asked questions by the
              students
            </p>
          </div>
          <div className="faq-accordion">
            <Accordion allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    I am not from CSE branch, Can I join DSC VJIT ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="accordion-content">
                    Any branch student can join DSC VJIT, there is no
                    restriction to join the club
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    I am from first year branch, Am I allowed to join ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="accordion-content">
                    Students from any year can join DSC VJIT and contribute to
                    the club
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    I dont have much technical knowledge but I would like to
                    help DSC VJIT
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="accordion-content">
                    No worries, we constantly looking for people who will help
                    us as volunteers during the events, workshops and would love
                    to have you on the team
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
}

export default FAQ;
