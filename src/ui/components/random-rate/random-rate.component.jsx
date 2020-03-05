import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useMusics } from 'app-stores/musics/musics.hook'
import { randomFromInterval } from 'app-helpers'

import './random-rate.style.scss'

let interval

export const RandomRate = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const { rateMusic } = useMusics()
  const musics = useSelector(({ musics }) => musics.items)

  useEffect(() => {
    if (isPlaying) {
      interval = setInterval(randomRateMusic, randomFromInterval(1, 3) * 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isPlaying])

  const randomRateMusic = () => {
    const index = randomFromInterval(0, musics.length - 1)
    const rate = randomFromInterval(1, 5)

    const { id } = musics[index]

    rateMusic(id, rate)

    clearInterval(interval)
    interval = setInterval(randomRateMusic, randomFromInterval(1, 3) * 1000)
  }

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <button
      onClick={handleClick}
      className={`random-rate ${isPlaying ? 'random-rate--playing' : ''}`}
    >
      Random Rate ({isPlaying ? 'stop' : 'start'})
    </button>
  )
}
