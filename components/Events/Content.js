import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Grid, Chip } from '@material-ui/core';

const Content = ({ events }) => {
  return (
    <section className="project-area ptb-100">
      <div className="container">
        <div className="row">
          {events.map((event) => (
            <div className="col-lg-6 col-md-6" key={event.id}>
              <div
                className="single-project"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  Router.push(`/events/${event.id}`);
                }}
              >
                <div className="project-image">
                  <img className="event" src={event.image} alt="work" />
                </div>

                <div className="project-content">
                  <span className="category">Conducted At {event.date}</span>
                  <Grid
                    container
                    alignItems={'center'}
                    justify={'space-between'}
                  >
                    <Grid item>
                      <h3>
                        <Link href={`/events/${event.id}`}>
                          <a>{event.name}</a>
                        </Link>
                      </h3>
                    </Grid>
                    <Grid item>
                      {event.active ? (
                        <Chip
                          className={'status-chip active'}
                          label={'Active'}
                        />
                      ) : (
                        <Chip
                          className={'status-chip completed'}
                          label={'Completed'}
                        />
                      )}
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
