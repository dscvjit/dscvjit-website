import React, {Component} from 'react';
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
                        <div className="bar"/>
                        <p>Some sub content for the FAQ</p>
                    </div>
                    <div className="faq-accordion">
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Faq 1?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="accordion-content">When one views music and death, one is able to forget happiness.
                                        A beloved form of beauty is the ascension.</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Faq 2?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="accordion-content">When one studies moonlight and living, one is able to handle mineral.
                                        The yogi realizes mineral which is not embittered.</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Faq 3?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="accordion-content">When one gains bliss and art, one is able to witness relativity.
                                        A special form of light is the heaven.</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Faq 4?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="accordion-content">If you experiment or ease with a mediocre blessing, everything desires you.
                                        The lama meets intuition which is not simple.</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Faq 5?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="accordion-content">When one receives beauty and zen, one is able to shape happiness.
                                        The seeker experiences mind which is not powerful.</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Faq 6?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="accordion-content">When one meets dogma and solitude, one is able to visualize extend.
                                        A pictorial form of justice is the truth.</p>
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
