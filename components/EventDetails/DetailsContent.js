import React from 'react';
import { Grid, Chip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailsContent = ({ event }) => {
  return (
    <section className="project-details-area ptb-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="project-details-image">
              <img src={event.image} alt="work" />
            </div>
          </div>
        </div>
      </div>
      <div className={'container'}>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="project-details-desc">
              <h2>{event.name}</h2>
            </div>

            <Grid
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
                <Grid item>{event.venue.name}</Grid>
              </Grid>
              <Grid container lg={2} md={3} sm={4} xs={12} item spacing={1}>
                <Grid item>
                  <FontAwesomeIcon icon={['fas', 'table']} />
                </Grid>
                <Grid item>{event.date}</Grid>
              </Grid>
            </Grid>

            <div>
              <div className="project-details-desc">
                <p>{event.des}</p>

                <div className="project-details-information">
                  <div className="single-info-box">
                    <h4>Conducted By</h4>
                    <p>DSC Web Team</p>
                  </div>

                  <div className="single-info-box">
                    <h4>Category</h4>
                    <p>Workshop</p>
                  </div>

                  <div className="single-info-box">
                    <h4>Conducted On</h4>
                    <p>19-04-2020</p>
                  </div>

                  <div className="single-info-box">
                    <h4>Attendees</h4>
                    <p>70</p>
                  </div>

                  {event.links.registration !== '' ? (
                    <div className="single-info-box">
                      <a
                        href={event.links.registration}
                        target={'_blank'}
                        className="btn btn-primary"
                      >
                        Register Now
                      </a>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsContent;
