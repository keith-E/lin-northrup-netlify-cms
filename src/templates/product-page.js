import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import lfl_front_cover from '../img/lfl_front_cover.jpg'
import lfl_wolf from '../img/lfl_wolf.jpg'

export const ProductPageTemplate = ({
  intro,
  main,
  testimonials,
}) => (
    <div>
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
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '50%',
                        height: 'auto',
                        marginBottom: '40px'
                      }}>
                        <img src={lfl_front_cover} alt="Front Cover" style={{ maxWidth: '100%', maxHeight: '100%', marginRight: '10px' }} />
                        <img src={lfl_wolf} alt="Wolf" style={{ maxWidth: '100%', maxHeight: '100%' }} />
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

ProductPageTemplate.propTypes = {
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            siteUrl
            text
          }
          heading
          description
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
