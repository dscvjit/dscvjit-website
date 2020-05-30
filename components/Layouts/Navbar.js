import React from 'react';
import { withRouter } from 'next/router';
import Link from '../../utils/ActiveLink';
import SearchForm from './SearchForm';
import dsclogo from '../../images/dsclogo.webp';
import { initGA, logPageView } from '../../utils/Analytics'

class Navbar extends React.Component {
  _isMounted = false;

  state = {
    drawer: false,
    searchForm: false,
    collapsed: true
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleDrawer = () => {
    this.setState((prevState) => {
      return {
        drawer: !prevState.drawer
      };
    });
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm
      };
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let layOutCls = 'marketing-navbar';

    const { collapsed } = this.state;
    const classOne = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show';
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';

    return (
      <>
        <header id="header">
          <div id="navbar" className={`crake-nav ${layOutCls}`}>
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img src={dsclogo} alt="logo" />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav nav ml-auto">
                    <li className="nav-item">
                      <Link activeClassName="active" href="/">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClassName="active" href="/events">
                        <a className="nav-link">Events</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClassName="active" href="/projects">
                        <a className="nav-link">Projects</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link activeClassName="active" href="/team">
                        <a className="nav-link">Team</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link activeClassName="active" href="/contact">
                        <a className="nav-link">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {this.state.searchForm ? (
          <SearchForm onClick={this.handleSearchForm} />
        ) : (
          ''
        )}
      </>
    );
  }
}

export default withRouter(Navbar);
