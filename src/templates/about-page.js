import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import lin_photo from '../img/Linphoto.jpg'
import lfl_banner from '../img/purple-banner.jpg'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (

    <div>
        <img src={lfl_banner} width='100%' height='auto' style={{ marginTop: '60px', maxHeight: '600px', overflow: 'hidden' }} />
      
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <img src={lin_photo} alt="Lin Northrup, M.Ed., R.H." style={{ marginTop: '10px', marginBottom: '60px' }} />
              <div className="tile" style={{ marginBottom: '40px' }}>
                        <p>
                        Lin Northrup, M.Ed., grew up in Rochester, New York. As a child, she lived inside her books, explored the woods, saved stray cats, and cried herself to sleep whenever she heard of animals being mistreated.
                          <br /> <br />
                          She didn't plan to be a teacher, but needed a job and ended up at an inner city school with 36 children and a rabbit named Midnight who became the superhero in her students' stories and poems. The children struggled with reading until she told them the story of Shakespeare's A Midsummer Night's Dream. They rehearsed every afternoon in the original prose. Plays became her staple for teaching reading.
                          <br /> <br />
                          Her inner rebel was unleashed the day she opened the door of that dusty, dirty classroom with 36 desks lined neatly in straight rows. Her first thought? "It's too square, the desks are too straight and kid's minds aren't straight, square or neat." At that moment, she didn't know that she was already in trouble, that she and the the system weren't always going to get along.
                          <br /> <br />
                          She moved to Miami and landed in another classroom. After a year, her principal reassigned her to the new district gifted program for 4th-6th grade students and told her, "I'm taking a big chance on you so don't blow it."
                          <br /> <br />
                          Lin taught in public schools, counseled children, and conducted after school art and theater programs. In her forties, she became a student of metaphysics, Eastern philosophies, and began to practice meditation.
                          <br /> <br />
                          In her fifties, she was an adjunct professor of English at Naugatuck Valley Community College. In addition, she created Heartwise Kids, a program that focused on supporting the unique learning styles of today’s children. She believes the young people coming forward have the courage and global consciousness that can change our relationship to each other and the earth.
                          <br /> <br />
                          She started writing in her sixties. "I'm a late bloomer," she said, recommending the delightful picture book, Leo The Late Bloomer, to all who 'bloom' later in life.
                          <br /> <br />
                          Her lifelong love of nature, animals, and her deep concerns about our planet fueled the writing of Leela and the Forest of Light, a fantasy adventure story. The reader is taken on a journey by an eleven year old heroine who is taught by the animals so she can lead the way to the new earth. It's a story for children and for anyone who longs for a future of greater harmony and peace. It weaves together Native American wisdom teachings, our connection to the natural world, and the path of the heart. The story will speak to everyone who knows it's imperative that we rediscover our true place in the Circle of Life in order to create a new vision for our planet. 
                        </p>
                      </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
