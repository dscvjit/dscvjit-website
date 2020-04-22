import React from 'react';

const Members = ({ members }) => {
  return (
    <section className="team-area ptb-100">
      <div className="container">
        <div className="row">
          {members.map((member) => (
            <div className="col-lg-3 col-md-6" key={member.id}>
              <div className="single-team-member">
                <img src={member.image} alt="team" />

                <div className="team-content">
                  <h3>{member.name}</h3>
                  <span>{member.designation}</span>

                  <ul>
                    {member.socialLinks.github !== '' ? (
                      <li>
                        <a href={member.socialLinks.github} target={'_blank'}>
                          <i className="icofont-github" />
                        </a>
                      </li>
                    ) : (
                      <></>
                    )}
                    {member.socialLinks.facebook !== '' ? (
                      <li>
                        <a href={member.socialLinks.facebook} target={'_blank'}>
                          <i className="icofont-facebook" />
                        </a>
                      </li>
                    ) : (
                      <></>
                    )}

                    {member.socialLinks.linkedin !== '' ? (
                      <li>
                        <a href={member.socialLinks.linkedin} target={'_blank'}>
                          <i className="icofont-linkedin" />
                        </a>
                      </li>
                    ) : (
                      <></>
                    )}
                    {member.socialLinks.twitter !== '' ? (
                      <li>
                        <a href={member.socialLinks.twitter} target={'_blank'}>
                          <i className="icofont-twitter" />
                        </a>
                      </li>
                    ) : (
                      <></>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
