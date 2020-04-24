import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const Content = ({ projects }) => {
  return (
    <section className="project-area ptb-100">
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div
                className="single-project"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  Router.push(`/projects/${project.id}`);
                }}
              >
                <div className="project-image">
                  <img className="project" src={project.image} alt="work" />
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
        </div>
      </div>
    </section>
  );
};

export default Content;
