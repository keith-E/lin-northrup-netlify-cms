import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
              <a className="btn" target="_blank" rel="noopener noreferrer" href={item.siteUrl}>
                Buy on Amazon
              </a>
            </div>
          </div>
          <p dangerouslySetInnerHTML={{ __html: item.text }} />
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      siteUrl: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
