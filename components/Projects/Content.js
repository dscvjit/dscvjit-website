import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import useSWR from 'swr';
import { getAllProjects } from '../../service/service';
import Skeleton from '@material-ui/lab/Skeleton';

const Content = (props) => {
  const projectsProps = props.projects;
  const fetcher = () => getAllProjects();
  const { data: projects, error } = useSWR('/projects', fetcher, {
    projectsProps
  });
  const skeletonArray = Array.from(new Array(6));
  return (
    <section className="project-area">
      <div className="container">
        <div className="row">
          {!projects ? (
            skeletonArray.map((value, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-project">
                  <div className="project-image">
                    <Skeleton
                      className={'project'}
                      animation="wave"
                      variant={'rect'}
                      width="100%"
                    />
                  </div>

                  <div className="project-content">
                    <Skeleton animation="wave" width="60%" />
                    <Skeleton animation="wave" variant={'text'} />
                  </div>
                </div>
              </div>
            ))
          ) : projects['success'] ? (
            projects.data.map((project) => (
              <div className="col-lg-4 col-md-6" key={project.id}>
                <div
                  className="single-project"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    Router.push(`/projects/${project.id}`);
                  }}
                >
                  <div className="project-image">
                    <img
                      className="project"
                      src={project.image}
                      alt={project.name}
                    />
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
            ))
          ) : (
            <h4 style={{ marginRight: 'auto', marginLeft: 'auto' }}>
              No projects are available right now
            </h4>
          )}
        </div>
      </div>
    </section>
  );
};

export default Content;
