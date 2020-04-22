import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    gridContainer: {
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "15px",
        paddingRight: "15px"
    }
})

const DetailsContent = ({project}) => {
    const classes = useStyles();
    return (
        <section className="project-details-area ptb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="project-details-image">
                            <img src={project.image} alt="work"/>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="project-details-desc">
                            <h2>{project.name}</h2>
                            <p>{project.des}</p>
                        </div>
                    </div>


                    <div className="col-lg-12 col-md-12">
                        <div className="project-details-desc">
                            <div className="project-details-information">
                                <div className="single-info-box">
                                    <h4>Developed By</h4>
                                    <p>{project.developedBy}</p>
                                </div>

                                <div className="single-info-box">
                                    <h4>Supported By</h4>
                                    <p>{project.supportedBy}</p>
                                </div>

                                <div className="single-info-box">
                                    <h4>Category</h4>
                                    <p>{project.category}</p>
                                </div>

                                <div className="single-info-box">
                                    <h4>Date</h4>
                                    <p>{project.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Grid className={classes.gridContainer}
                          container justify={"flex-start"}
                          alignItems="center">
                        <Grid item lg={2} md={3} sm={3} xs={6}>
                            {
                                project.links.repo !== "" ? <div className="single-info-box">
                                    <a href={project.links.repo} target={"_blank"} className="btn btn-primary">Repo
                                        Link</a>
                                </div> : <></>
                            }
                        </Grid>
                        <Grid item lg={2} md={3} sm={3} xs={6}>
                            {
                                project.links.demo !== "" ? <div className="single-info-box">
                                    <a href={project.links.demo} target="_blank"
                                       className="btn btn-primary">Demo</a>
                                </div> : <></>
                            }
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    );
}

export default DetailsContent;
