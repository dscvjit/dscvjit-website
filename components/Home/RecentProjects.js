import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import { getAllProjects } from '../../service/service';
import useSWR from 'swr';
import Skeleton from '@material-ui/lab/Skeleton';

const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  autoplay: true,
  nav: true,
  loop: false,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  dots: false,
  navText: [
    "<i class='icofont-bubble-left'/>",
    "<i class='icofont-bubble-right'/>"
  ],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 4
    }
  }
};

const RecentProjects = () => {
  const [display, setDisplay] = useState(false);
  const fetcher = () => getAllProjects();
  const { data, error } = useSWR('/projects', fetcher);
  const numberArray = Array.from(new Array(4));

  useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <section className="project-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Recent Projects</h2>
            <div className="bar"></div>
            <p>
              Catchy sub content for the recent projects - These are the
              different projects for developed
            </p>
          </div>
        </div>
        {error ? (
          <></>
        ) : !data ? (
          <div className="row m-0">
            {display ? (
              <OwlCarousel
                className="project-slides owl-carousel owl-theme"
                {...options}
              >
                {numberArray.map((item, index) => (
                  <div className="col-lg-12" key={index}>
                    <div
                      className="single-project"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        Router.push(`/projects/id`);
                      }}
                    >
                      <div className="project-image">
                        <Skeleton variant="rect" width={'100%'} height={250} />
                      </div>
                      <div className="project-content">
                        <Skeleton />
                        <Skeleton width="60%" />
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        ) : (
          <div className="row m-0">
            {display ? (
              <OwlCarousel
                className="project-slides owl-carousel owl-theme"
                {...options}
              >
                {data.data.map((project) => (
                  <div className="col-lg-12" key={project.id}>
                    <div
                      className="single-project"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        Router.push(`/projects/${project.id}`);
                      }}
                    >
                      <div className="project-image">
                        <img src={project.image} alt="work" />
                      </div>

                      <div className="project-content">
                        <span className="category">{project.category}</span>
                        <h3>
                          <Link href={`/projects/${project.id}`}>
                            <a>{project.name}</a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        )}
        <canvas id="canvas"></canvas>
      </section>
    </>
  );
};

export default RecentProjects;
