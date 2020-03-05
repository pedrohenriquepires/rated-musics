import { orderMusics, rateMusic } from '../musics.actions'
import {
  RATE_MUSIC,
  ORDER_MUSICS_ASC,
  ORDER_MUSICS_DESC
} from '../musics.types'

describe('musics actions', () => {
  it('should create an action to rate a music', () => {
    const rate = 5
    const id = 1

    const expectedAction = {
      type: RATE_MUSIC,
      id,
      rate
    }

    expect(rateMusic(id, rate)).toEqual(expectedAction)
  })

  it('should create an action to order the list descending', () => {
    const order = 'DESC'

    const expectedAction = {
      type: ORDER_MUSICS_DESC
    }

    expect(orderMusics(order)).toEqual(expectedAction)
  })

  it('should create an action to order the list ascending', () => {
    const order = 'ASC'

    const expectedAction = {
      type: ORDER_MUSICS_ASC
    }

    expect(orderMusics(order)).toEqual(expectedAction)
  })
})
