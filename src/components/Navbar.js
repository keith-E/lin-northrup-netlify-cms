import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook-color.svg'
import amazon from '../img/social/amazon.svg'
import lfl_logo from '../img/lfl_logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Home" style={{ fontFamily: 'Marcellus SC', fontWeight: '600', fontSize: '22px', width: '326px', color: '#3e734c' }}>
              Leela and the Forest of Light
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About the Author
              </Link>
              <Link className="navbar-item" to="/books">
                Books
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={facebook} alt="Facebook" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.amazon.com/Leela-Forest-Light-Lin-Northrup-ebook/dp/B08L6VYX53/ref=sr_1_1?crid=V9HSIW8V979P&dchild=1&keywords=leela+and+the+forest+of+light&qid=1604274061&sprefix=leela+and+the+%2Caps%2C153&sr=8-1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: '1px' }}
              >
                <span className="icon">
                  <img src={amazon} alt="Amazon" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
