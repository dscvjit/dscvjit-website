import React from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailsContent = ({ project }) => {
  return (
    <section className="project-details-area ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="project-details-image">
              <img src={project.image} alt="work" />
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="project-details-desc">
              <h1>{project.name}</h1>

              <Grid
                className="mb-0"
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={1}
              >
                <Grid container item lg={3} md={3} sm={4} xs={6}>
                  <h5>
                    <b>Category:</b> {project.category}
                  </h5>
                </Grid>
                <Grid container lg={3} md={3} sm={4} xs={6} item>
                  <h5>
                    <b>Date:</b> {project.date}
                  </h5>
                </Grid>
              </Grid>

              <Grid
                container
                className={'mb-2'}
                spacing={2}
                direction="column"
                alignItems={'flex-start'}
                justifyContent="center"
              >
                <Grid
                  item
                  container
                  className={'mb-2'}
                  justify={'flex-start'}
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <Grid item>
                    {project.links.repo !== '' ? (
                      <div className="single-info-box">
                        <a
                          href={project.links.repo}
                          target={'_blank'}
                          className="btn btn-primary"
                        >
                          Repo Link
                        </a>
                      </div>
                    ) : (
                      <></>
                    )}
                  </Grid>
                  <Grid item>
                    {project.links.demo !== '' ? (
                      <div className="single-info-box">
                        <a
                          href={project.links.demo}
                          target="_blank"
                          className="btn btn-secondary"
                        >
                          Demo
                        </a>
                      </div>
                    ) : (
                      <></>
                    )}
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Grid item>
                    <h4>Developed By: </h4>
                  </Grid>
                  {project['developedBy'].map((member) => (
                    <Grid item>
                      <Chip variant={'outlined'} label={member} />
                    </Grid>
                  ))}
                </Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Grid item>
                    <h4>Supported By: </h4>
                  </Grid>

                  {project['supportedBy'].map((member) => (
                    <Grid item>
                      <Chip variant={'outlined'} label={member} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <h4 className={'sub-heading'}>Description: </h4>
              <p>{project.des}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsContent;
