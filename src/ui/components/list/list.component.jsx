import React from 'react'
import { useSelector } from 'react-redux'

import { useMusics } from 'app-stores/musics/musics.hook'
import { RandomRate, MusicCard } from 'app-components'

import './list.style.scss'

const sortItems = (array, order) =>
  array.sort((a, b) =>
    order === 'DESC' ? b.rating - a.rating : a.rating - b.rating
  )

export const List = () => {
  const { orderMusics } = useMusics()

  const { musics, order } = useSelector(({ musics }) => ({
    musics: sortItems(musics.items, musics.order),
    order: musics.order
  }))

  const changeOrder = ({ target }) => orderMusics(target.value)

  const renderItems = musics.map((music, key) => (
    <li key={key}>
      <MusicCard music={music} />
    </li>
  ))

  return (
    <div className="content">
      <div className="filter">
        <label htmlFor="order" className="filter__label">
          RATING ORDER
        </label>

        <select
          id="order"
          className="filter__select"
          value={order}
          onChange={changeOrder}
        >
          <option value="DESC">Descending</option>
          <option value="ASC">Ascending</option>
        </select>
      </div>

      <ul className="list">{renderItems}</ul>

      <div className="actions">
        <RandomRate />
      </div>
    </div>
  )
}
