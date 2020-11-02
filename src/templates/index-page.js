import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import lfl_front_cover from '../img/lfl_front_cover.jpg'
import lfl_back_cover from '../img/lfl_back_cover.jpg'

export const IndexPageTemplate = ({
  image,
  lionQuote,
  heading,
  lionCite,
  bookDescription1,
  bookDescription2,
  bookDescription3,
  bookDescription4,
  mainpitch,
  description,
  intro,
}) => (
    <div>
      <div
        className="full-width-image margin-top-0 paral"
        style={{
          backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
          backgroundPosition: `center`,
          zIndex: `-1`,
          top: `0`,
          height: `3000px`,
          width: `100%`,
          backgroundSize: `150%`,
          backgroundRepeat: `no-repeat`
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              backgroundColor: 'rgba(52, 52, 52, 0.5)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              marginBottom: '0.25em',
              fontFamily: 'Amatic SC',
            }}
          >
            {lionQuote}
          </h1>
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              backgroundColor: 'rgba(52, 52, 52, 0.5)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              fontStyle: 'italic',
              marginBottom: '20.00em',
            }}
          >
            {lionCite}
          </h3>
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              backgroundColor: 'rgba(52, 52, 52, 0.5)',
              color: 'white',
              lineHeight: '1',
              padding: '0.5em',
              marginBottom: '10.00em',
              fontFamily: 'Gentium Basic',
            }}
          >
            {bookDescription1}
          </h1>
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              backgroundColor: 'rgba(52, 52, 52, 0.5)',
              color: 'white',
              lineHeight: '1',
              padding: '0.5em',
              marginBottom: '10.00em',
              fontFamily: 'Gentium Basic',
            }}
          >
            {bookDescription2}
          </h1>
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              backgroundColor: 'rgba(52, 52, 52, 0.5)',
              color: 'white',
              lineHeight: '1',
              padding: '0.5em',
              marginBottom: '10.00em',
              fontFamily: 'Gentium Basic',
            }}
          >
            {bookDescription3}
          </h1>
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              backgroundColor: 'rgba(52, 52, 52, 0.5)',
              color: 'white',
              lineHeight: '1',
              padding: '0.5em',
              fontFamily: 'Gentium Basic',
            }}
          >
            {bookDescription4}
          </h1>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <div style={{
                        display: 'block',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        marginBottom: '10px'
                      }}>
                        <img src={lfl_front_cover} alt="Front Cover" style={{ marginRight: '10px' }} />
                        <img src={lfl_back_cover} alt="Back Cover" />
                      </div>
                      <div className="tile" style={{ marginBottom: '12px' }}>
                        <a className="btn" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/Leela-Forest-Light-Lin-Northrup-ebook/dp/B08L6VYX53/ref=sr_1_1?crid=V9HSIW8V979P&dchild=1&keywords=leela+and+the+forest+of+light&qid=1604274061&sprefix=leela+and+the+%2Caps%2C153&sr=8-1">
                          Buy on Amazon
                        </a>
                      </div>
                      <div className="tile">
                        <p className="subtitle" style={{ fontFamily: 'Gentium Basic' }}><b>Lin Northrup, M.Ed., R.H. </b>{mainpitch.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2" style={{ fontFamily: 'Amatic SC' }}>
                      Latest stories
                  </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  lionQuote: PropTypes.string,
  heading: PropTypes.string,
  lionCite: PropTypes.string,
  bookDescription1: PropTypes.string,
  bookDescription2: PropTypes.string,
  bookDescription3: PropTypes.string,
  bookDescription4: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        lionQuote={frontmatter.lionQuote}
        heading={frontmatter.heading}
        lionCite={frontmatter.lionCite}
        bookDescription1={frontmatter.bookDescription1}
        bookDescription2={frontmatter.bookDescription2}
        bookDescription3={frontmatter.bookDescription3}
        bookDescription4={frontmatter.bookDescription4}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        lionQuote
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        lionCite
        bookDescription1
        bookDescription2
        bookDescription3
        bookDescription4
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
