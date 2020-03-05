import { ORDER_MUSICS_DESC, ORDER_MUSICS_ASC, RATE_MUSIC } from './musics.types'
import { addRating } from './musics.helpers'

import musics from 'app-content/musics.json'

const initialState = {
  items: musics.map(addRating),
  order: 'DESC'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ORDER_MUSICS_DESC:
      return {
        ...state,
        order: 'DESC'
      }
    case ORDER_MUSICS_ASC:
      return {
        ...state,
        order: 'ASC'
      }
    case RATE_MUSIC:
      const updatedItems = state.items.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            totalVotes: item.totalVotes + 1,
            votes: item.votes + action.rate
          }
        }

        return item
      })

      return {
        ...state,
        items: updatedItems.map(addRating)
      }
    default:
      return state
  }
}
