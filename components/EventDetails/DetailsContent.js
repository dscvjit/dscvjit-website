import React from 'react';
import { Grid, Chip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSWR from 'swr';
import Skeleton from '@material-ui/lab/Skeleton';
import {
  getAllSpeakersFromEvent,
  getAllPartnersFromEvent
} from '../../service/service';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const DetailsContent = ({ event }) => {
  const fetchSpeakers = () => getAllSpeakersFromEvent(event['speakers']);
  const fetchPartners = () => getAllPartnersFromEvent(event['partners']);

  const { data: speakers, error: speakersError } = useSWR(
    '/event/speakers',
    fetchSpeakers
  );
  const { data: partners, error: partnersError } = useSWR(
    '/events/partners',
    fetchPartners
  );
  const skeletonArray = Array.from(new Array(4));

  return (
    <section className="project-details-area ptb-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="project-details-image">
              <LazyLoadImage
                src={event.image}
                alt={event.name}
                effect={'blur'}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={'container'}>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="project-details-desc">
              <h1>{event.name}</h1>
              <Grid
                className={'mb-1'}
                container
                alignItems={'center'}
                justify={'flex-start'}
                spacing={1}
              >
                {event['hashtags'].map((hashtag) => (
                  <Grid item>
                    <Chip
                      variant={'outlined'}
                      className={'hashtag'}
                      label={hashtag}
                    />
                  </Grid>
                ))}
              </Grid>

              <Grid
                className="mb-0"
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Grid container item lg={2} md={3} sm={4} xs={12} spacing={1}>
                  <Grid item>
                    <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                  </Grid>
                  <Grid item>{event['venue'].name}</Grid>
                </Grid>
                <Grid container lg={2} md={3} sm={4} xs={12} item spacing={1}>
                  <Grid item>
                    <FontAwesomeIcon icon={['fas', 'table']} />
                  </Grid>
                  <Grid item>{event.date}</Grid>
                </Grid>
              </Grid>

              <Grid
                className={'my-0'}
                container
                alignItems={'center'}
                justify={'flex-start'}
                spacing={2}
              >
                <Grid item>
                  {event.links.registration !== '' ? (
                    <a
                      href={event.links.registration}
                      target={'_blank'}
                      className="btn btn-primary mb-2"
                    >
                      Register Now
                    </a>
                  ) : (
                    <></>
                  )}
                </Grid>
                <Grid item>
                  {event.links.registration !== '' ? (
                    <a
                      href={event.links.event}
                      target={'_blank'}
                      className="btn btn-secondary mb-2"
                    >
                      Event Link
                    </a>
                  ) : (
                    <></>
                  )}
                </Grid>
              </Grid>

              <p>{event.des}</p>

              {speakersError ? (
                <>Error {speakersError.message}</>
              ) : (
                <>
                  <h3 className={'sub-heading'}>Meet the Speakers / Guests</h3>
                  <Grid
                    className={'my-1'}
                    container
                    alignItems="center"
                    justify={'space-evenly'}
                    spacing={2}
                  >
                    {!speakers
                      ? skeletonArray.map((item, index) => (
                          <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                            <div className="single-project">
                              <div className="project-image">
                                <Skeleton
                                  variant="rect"
                                  animation={'wave'}
                                  width={'100%'}
                                  height={300}
                                />
                              </div>
                              <div className="project-content">
                                <Skeleton animation="wave" variant={'text'} />
                                <Skeleton
                                  className={'center-skeleton'}
                                  animation="wave"
                                  width="60%"
                                />
                                <Skeleton
                                  className={'center-skeleton'}
                                  animation="wave"
                                  width="70%"
                                />
                              </div>
                            </div>
                          </Grid>
                        ))
                      : speakers.data.map((speaker) => (
                          <Grid
                            item
                            lg={4}
                            md={6}
                            sm={6}
                            xs={12}
                            key={speaker.id}
                          >
                            <div className="single-project">
                              <div className="project-image">
                                <LazyLoadImage
                                  src={speaker.image}
                                  alt={speaker.name}
                                  effect={'blur'}
                                />
                              </div>
                              <div className="speakers-content">
                                <h3>{speaker.name}</h3>
                                <span>{speaker['designation']}</span>
                                <h4>{speaker['company'].name}</h4>
                                <ul className={'socialTeamsIconsList'}>
                                  {Object.keys(speaker['socialLinks']).map(
                                    (url) =>
                                      speaker['socialLinks'][url] !== '' ? (
                                        <li
                                          className={'socialTeamIcon'}
                                          key={url}
                                        >
                                          <a
                                            href={speaker['socialLinks'][url]}
                                            target={'_blank'}
                                          >
                                            {url === 'facebook' ? (
                                              <FontAwesomeIcon
                                                icon={['fab', 'facebook-f']}
                                              />
                                            ) : url === 'medium' ? (
                                              <FontAwesomeIcon
                                                icon={['fab', 'medium-m']}
                                              />
                                            ) : url === 'web' ? (
                                              <FontAwesomeIcon
                                                icon={[
                                                  'fas',
                                                  'window-maximize'
                                                ]}
                                              />
                                            ) : (
                                              <FontAwesomeIcon
                                                icon={['fab', url]}
                                              />
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
                          </Grid>
                        ))}
                  </Grid>
                </>
              )}

              {partnersError ? (
                <>Unable to fetch sponsors Error: {partnersError.message}</>
              ) : (
                <>
                  <h3 className={'sub-heading'}>Event Partners / Sponsors</h3>
                  <Grid
                    className={'my-1'}
                    container
                    direction={'row'}
                    alignItems={'center'}
                    justify={'space-evenly'}
                    spacing={2}
                  >
                    {!partners
                      ? skeletonArray.map((item, index) => (
                          <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                            <Skeleton
                              className={'skeleton-box'}
                              animation={'wave'}
                              variant={'rect'}
                              height={'60px'}
                            />
                          </Grid>
                        ))
                      : partners.data.map((partner) => (
                          <Grid
                            item
                            lg={3}
                            md={4}
                            sm={6}
                            xs={12}
                            container
                            alignItems={'center'}
                            justify={'center'}
                            key={partner.id}
                          >
                            <a
                              href={partner.socialLinks.web}
                              className={'sponsor-box'}
                            >
                              <Grid
                                container
                                alignItems={'center'}
                                justify={'space-evenly'}
                                spacing={1}
                              >
                                <Grid item>
                                  <LazyLoadImage
                                    src={partner.image}
                                    alt={partner.name}
                                    effect={'blur'}
                                  />
                                </Grid>
                                <Grid item>
                                  <h3>{partner.name}</h3>
                                </Grid>
                              </Grid>
                            </a>
                          </Grid>
                        ))}
                  </Grid>
                </>
              )}

              <h3 className={'sub-heading mt-4 mb-2'}>Event Agenda</h3>
              <TableContainer component={Paper}>
                <Table
                  className="agenda-table"
                  style={{ minWidth: 650 }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell>Designation</TableCell>
                      <TableCell>Start Time</TableCell>
                      <TableCell>End Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {event['agenda'].map((row, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {row['title']}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row['des']}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row['starttime']}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row['endtime']}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsContent;
