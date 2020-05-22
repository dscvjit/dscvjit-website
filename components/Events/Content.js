import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Grid, Chip } from '@material-ui/core';
import { getAllEvents } from '../../service/service';
import useSWR from 'swr';
import Skeleton from '@material-ui/lab/Skeleton';

const Content = (props) => {
  const eventsProps = props.events;
  const fetcher = () => getAllEvents();
  const { data: events, error } = useSWR('/events', fetcher, { eventsProps });
  const skeletonArray = Array.from(new Array(4));
  return (
    <section className="project-area ">
      <div className="container">
        <div className="row">
          {!events ? (
            skeletonArray.map((value, index) => (
              <div className="col-lg-6 col-md-6" key={index}>
                <div className="single-project">
                  <div className="project-image">
                    <Skeleton
                      className={'event'}
                      animation="wave"
                      variant={'rect'}
                      width="100%"
                    />
                  </div>

                  <div className="project-content">
                    <span className="category">
                      <Skeleton animation="wave" width="60%" />
                    </span>
                    <Skeleton animation="wave" variant={'text'} />
                  </div>
                </div>
              </div>
            ))
          ) : events['success'] ? (
            events.data.map((event) => (
              <div className="col-lg-6 col-md-6" key={event.id}>
                <div
                  className="single-project"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    Router.push(`/events/${event.id}`);
                  }}
                >
                  <div className="project-image">
                    <img className="event" src={event.image} alt={event.name} />
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
            ))
          ) : (
            <h4 style={{ marginRight: 'auto', marginLeft: 'auto' }}>
              No events are available right now
            </h4>
          )}
        </div>
      </div>
    </section>
  );
};

export default Content;
