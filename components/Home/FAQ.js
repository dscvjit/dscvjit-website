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
                    When one views music and death, one is able to forget
                    happiness. A beloved form of beauty is the ascension.
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
                    When one studies moonlight and living, one is able to handle
                    mineral. The yogi realizes mineral which is not embittered.
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
                    When one gains bliss and art, one is able to witness
                    relativity. A special form of light is the heaven.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How can I join the DSC VJIT Organizing Team
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="accordion-content">
                    If you experiment or ease with a mediocre blessing,
                    everything desires you. The lama meets intuition which is
                    not simple.
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
