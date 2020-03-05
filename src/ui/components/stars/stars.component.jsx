import React from 'react'
import PropTypes from 'prop-types'

import './stars.style.scss'

const renderStars = onClick =>
  [1, 2, 3, 4, 5].map((star, key) => (
    <button key={key} onClick={() => onClick(star)}>
      1
    </button>
  ))

export const Stars = ({ onClick }) => {
  return <div className="stars">{renderStars(onClick)}</div>
}

Stars.defaultProps = {
  onClick: () => {}
}

Stars.propTypes = {
  onClick: PropTypes.func
}
