import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import lfl_banner from '../img/leela-banner.png'
import lfl_front_cover from '../img/lfl_front_cover.jpg'
import lfl_back_cover from '../img/lfl_back_cover.jpg'

export const IndexPageTemplate = ({
  mainpitch,
  description,
  intro,
}) => (
    <div>
      <div>
        <img src={lfl_banner} width='100%' height='100%' style={{ marginTop: '60px' }} />
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
                      <div className="tile" style={{ marginBottom: '40px' }}>
                        <img src={lfl_front_cover} alt="Front Cover" />
                      </div>
                      <div className="tile" style={{ marginBottom: '40px' }}>
                        <p>
                          Leela never wanted to be adopted by the wealthy Rumsford family whose spoiled children make her life miserable. She feels utterly alone until a messenger from her future appears.
                          <br /> <br />
                          Raven, the bringer of magic, leads her into a mysterious forest to meet Fox, guardian of the world between worlds. He warns her that the animals, forests and oceans are in great danger because humans have forgotten their place in the circle of life.
                          <br /> <br />
                          But to fulfill the prophecy of the new earth, Leela must gather seven animal allies, shapeshift time and travel through a portal to receive the gift of far-seeing.
                          <br /> <br />
                          Can Leela face the dark forces that want to stop the new earth from rising? It's up to her to trust her heart and lead the way.
                        </p>
                      </div>
                      <div className="tile">
                        <a className="btn" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/Leela-Forest-Light-Lin-Northrup-ebook/dp/B08L6VYX53/ref=sr_1_1?crid=V9HSIW8V979P&dchild=1&keywords=leela+and+the+forest+of+light&qid=1604274061&sprefix=leela+and+the+%2Caps%2C153&sr=8-1">
                          Buy on Amazon
                        </a>
                      </div>
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
