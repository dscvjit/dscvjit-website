const IdeaForm = () => {
  return (
    <section className="idea-form ptb-100 bg-gray">
      <div className="container">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="analysis-text">
              <h3>Have an Awesome Idea, Lets BrainStorm</h3>
              <div className={'bar'} />
              <div className={'code'}>
                <p className="mb-1">
                  <b>Input:</b>
                </p>
                <p className="mb-1">
                  const <b>idea</b>
                  {' = ["Revolutionary Idea"]'};
                </p>
                <p className="mb-1">
                  if(
                  <b>
                    {
                      '! idea.includes("technicalKnowledge" || "developers" || "domainKnowledge" || "designers" '
                    }
                  </b>
                  ){' { '}
                </p>
                <p className="ml-4">
                  <b>submitIdea();</b>
                </p>
                <p className="mb-1">{' } '}</p>
                <p className="mb-1">
                  <b>Output: </b>helpReceived()
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="analysis-form">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email*"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Branch*"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Year*"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Idea*"
                    className="form-control"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit Idea
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="idea-form-bottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z" fill="#ffffff" />
      </svg>
    </section>
  );
};

export default IdeaForm;
