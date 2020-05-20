import React, { useState } from 'react';

const Subscribe = ({ status, message, onSubmitted }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitted({
      EMAIL: email
    });
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <section className="subscribe-area ptb-50">
      <div className="container">
        <div className="section-title">
          <h2>Subscribe to our newsletter</h2>
          <div className="bar" />
          <p>
            By subscribing to the newsletter, you will be able to get constant
            update regarding workshops, events from us
          </p>
        </div>

        <form className="newsletter-form" data-toggle="validator">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email Address"
            name="EMAIL"
            value={email}
            required={true}
            onChange={handleEmailChange}
            autoComplete="on"
          />
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            {!status
              ? 'Subscribe'
              : status === 'sending'
              ? 'Subscribing'
              : status === 'success'
              ? 'Subscribed'
              : 'Error'}
          </button>
          <div id="validator-newsletter" className="form-result" />
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
