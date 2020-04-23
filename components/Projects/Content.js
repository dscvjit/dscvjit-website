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

          <div className="col-lg-12 col-md-12">
            <div className="pagination-area">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="icofont-double-left" />
                    </a>
                  </li>

                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="icofont-double-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
