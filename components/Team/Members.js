import React, { useEffect, useState } from 'react';
import { getAllFaculty, getAllTeam } from '../../service/service';
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import useSWR from 'swr';

const Members = () => {
  const skeletonArray = Array.from(new Array(4));

  // const fetcher = () => getAllTeam();
  // const { data: members, error } = useSWR('/members', fetcher);

  const [teamStatus, setTeamStatus] = useState('loading');
  const [facultyStatus, setFacultyStatus] = useState('loading');

  const [teamData, setTeamData] = useState([]);
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    Promise.all([getAllTeam(), getAllFaculty()]).then((response) => {
      setTeamData(response[0].data);
      setTeamStatus(response[0].status);
      setFacultyData(response[1].data);
      setFacultyStatus(response[1].status);
    });
  }, []);

  const getRandom = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  return (
    <section className="team-area ">
      <div className="container">
        <div className="row">
          {teamStatus === 'error' ? (
            <>
              Unable to fetch the members due to an error:{' '}
              <strong>{teamData}</strong>
            </>
          ) : teamStatus === 'loading' ? (
            skeletonArray.map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="single-team-member">
                  <Skeleton variant="rect" width={'100%'} height={200} />

                  <div className="team-content">
                    <Skeleton animation="wave" variant={'text'} />
                    <Skeleton animation="wave" width="60%" />

                    <Grid
                      container
                      justify="space-between"
                      style={{ paddingTop: '10px' }}
                    >
                      {skeletonArray.map((item, index) => (
                        <Grid item key={index}>
                          <Skeleton
                            animation="wave"
                            variant="circle"
                            width={40}
                            height={40}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </div>
            ))
          ) : teamStatus === 'empty' ? (
            <></>
          ) : teamStatus === 'success' ? (
            <>
              <div className="col-lg-12 col-md-12">
                <div className="section-title">
                  <h2>Core Team</h2>
                  <div className="bar" />
                </div>
              </div>
              <Grid
                container
                justify={'space-evenly'}
                alignItems={'center'}
                direction={'row'}
              >
                {getRandom(teamData).map((member) => (
                  <Grid
                    item
                    lg={3}
                    xl={3}
                    md={4}
                    xs={12}
                    className="single-team-member"
                    key={member.id}
                  >
                    <Grid item container justify={'center'}>
                      <div>
                        <LazyLoadImage
                          className="member-lazy-image"
                          src={member.image}
                          alt={`${member.name} image`}
                          effect="blur"
                          wrapperClassName={'member-lazy-image-wrapper'}
                        />
                      </div>
                    </Grid>

                    <div className="team-content">
                      <h3>{member.name}</h3>
                      <span>{member['designation']}</span>

                      <ul className={'socialTeamsIconsList'}>
                        {Object.keys(member['socialLinks']).map((website) =>
                          member['socialLinks'][website] !== '' ? (
                            <li className={'socialTeamIcon'} key={website}>
                              <a
                                href={member['socialLinks'][website]}
                                target={'_blank'}
                              >
                                {website === 'facebook' ? (
                                  <FontAwesomeIcon
                                    icon={['fab', 'facebook-f']}
                                  />
                                ) : website === 'medium' ? (
                                  <FontAwesomeIcon icon={['fab', 'medium-m']} />
                                ) : website === 'web' ? (
                                  <FontAwesomeIcon
                                    icon={['fas', 'window-maximize']}
                                  />
                                ) : (
                                  <FontAwesomeIcon icon={['fab', website]} />
                                )}
                              </a>
                            </li>
                          ) : (
                            <></>
                          )
                        )}
                      </ul>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </>
          ) : (
            <>
              {console.log(`Team Data: ${teamData} , Status: ${teamStatus}`)}
              Hey Buddy, you broke the system, use the application in a correct
              way
            </>
          )}
        </div>

        <div className="row">
          {facultyStatus === 'error' ? (
            <>
              Unable to fetch the members due to an error:{' '}
              <strong>{teamData}</strong>
            </>
          ) : facultyStatus === 'loading' ? (
            skeletonArray.map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="single-team-member">
                  <Skeleton variant="rect" width={'100%'} height={200} />

                  <div className="team-content">
                    <Skeleton animation="wave" variant={'text'} />
                    <Skeleton animation="wave" width="60%" />

                    <Grid
                      container
                      justify="space-between"
                      style={{ paddingTop: '10px' }}
                    >
                      {skeletonArray.map((item, index) => (
                        <Grid item key={index}>
                          <Skeleton
                            animation="wave"
                            variant="circle"
                            width={40}
                            height={40}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </div>
            ))
          ) : facultyStatus === 'empty' ? (
            <></>
          ) : facultyStatus === 'success' ? (
            <>
              <div className="col-lg-12 col-md-12">
                <div className="section-title">
                  <h2>Faculty Coordinator</h2>
                  <div className="bar" />
                </div>
              </div>
              <Grid
                container
                justify={'space-evenly'}
                alignItems={'center'}
                direction={'row'}
              >
                {getRandom(facultyData).map((member) => (
                  <Grid
                    item
                    lg={3}
                    xl={3}
                    md={4}
                    xs={12}
                    className="single-team-member"
                    key={member.id}
                  >
                    <Grid item container justify={'center'}>
                      <div>
                        <LazyLoadImage
                          className="member-lazy-image"
                          src={member.image}
                          alt={`${member.name} image`}
                          effect="blur"
                          wrapperClassName={'member-lazy-image-wrapper'}
                        />
                      </div>
                    </Grid>

                    <div className="team-content">
                      <h3>{member.name}</h3>
                      <span>{member['designation']}</span>

                      <ul className={'socialTeamsIconsList'}>
                        {Object.keys(member['socialLinks']).map((website) =>
                          member['socialLinks'][website] !== '' ? (
                            <li className={'socialTeamIcon'} key={website}>
                              <a
                                href={member['socialLinks'][website]}
                                target={'_blank'}
                              >
                                {website === 'facebook' ? (
                                  <FontAwesomeIcon
                                    icon={['fab', 'facebook-f']}
                                  />
                                ) : website === 'medium' ? (
                                  <FontAwesomeIcon icon={['fab', 'medium-m']} />
                                ) : website === 'web' ? (
                                  <FontAwesomeIcon
                                    icon={['fas', 'window-maximize']}
                                  />
                                ) : (
                                  <FontAwesomeIcon icon={['fab', website]} />
                                )}
                              </a>
                            </li>
                          ) : (
                            <></>
                          )
                        )}
                      </ul>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </>
          ) : (
            <>
              {console.log(`Faculty Data: ${teamData} , Status: ${teamStatus}`)}
              Hey Buddy, you broke the system, use the application in a correct
              way
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Members;
