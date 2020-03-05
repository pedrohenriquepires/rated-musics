import React from 'react'
import PropTypes from 'prop-types'

import './music-card.style.scss'
import { useMusics } from 'app-stores/musics/musics.hook'
import { Stars } from 'app-components'
import StarRatings from 'react-star-ratings'

export const MusicCard = ({ music }) => {
  const { id, name, artist, image, rating = 0, totalVotes = 0 } = music
  const { rateMusic } = useMusics()

  const handleRate = rate => {
    rateMusic(id, rate)
  }

  return (
    <div className="music-card">
      <div className="music-card__image">
        <img src={image} alt="" />
      </div>

      <div className="music-card__content">
        <div className="music-card__artist">{artist}</div>
        <div className="music-card__name">{name}</div>

        <div className="music-card__rating">
          <StarRatings
            starEmptyColor="#9C9C9C"
            starRatedColor="#FFD749"
            starHoverColor="#DFBE48"
            starDimension="24px"
            starSpacing="2px"
            rating={rating}
            changeRating={handleRate}
          />

          <span className="music-card__total-votes">
            {totalVotes} {totalVotes === 1 ? 'rating' : 'ratings'} ({rating}/5)
          </span>
        </div>
      </div>
      {/* {artist} - {name} ({rating} - {totalVotes} votes) */}
      <Stars onClick={handleRate} />
    </div>
  )
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    image: PropTypes.string,
    rating: PropTypes.number,
    totalVotes: PropTypes.number
  })
}
