import React from 'react';
import { getAllTeam } from '../../service/service';
import useSWR from 'swr';
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Members = (props) => {
  const membersProps = props.members;
  const fetcher = () => getAllTeam();
  const { data: members, error } = useSWR('/team', fetcher, { membersProps });
  const skeletonArray = Array.from(new Array(4));

  return (
    <section className="team-area ptb-100">
      <div className="container">
        <div className="row">
          {error ? (
            <>
              Unable to fetch the members due to an error:{' '}
              <strong>{error}</strong>
            </>
          ) : !members || members === '' ? (
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
          ) : (
            members.data.map((member) => (
              <div className="col-lg-3 col-md-6" key={member.id}>
                <div className="single-team-member">
                  <img src={member.image} alt="team" />

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
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
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
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Members;
