import reducer from '../musics.reducer'
import {
  RATE_MUSIC,
  ORDER_MUSICS_ASC,
  ORDER_MUSICS_DESC
} from '../musics.types'

const initialState = {
  items: [
    {
      id: 1,
      artist: 'Test',
      name: 'Testing',
      votes: 0,
      totalVotes: 0
    }
  ],
  order: 'DESC'
}

describe('musics reducer', () => {
  it('should rate a music', () => {
    const expectedState = {
      items: [
        {
          id: 1,
          artist: 'Test',
          name: 'Testing',
          rating: 5,
          votes: 5,
          totalVotes: 1
        }
      ],
      order: 'DESC'
    }

    expect(
      reducer(initialState, {
        type: RATE_MUSIC,
        id: 1,
        rate: 5
      })
    ).toEqual(expectedState)
  })

  it('should change order to ascending and then to descending', () => {
    expect(
      reducer(initialState, {
        type: ORDER_MUSICS_ASC
      }).order
    ).toEqual('ASC')

    expect(
      reducer(initialState, {
        type: ORDER_MUSICS_DESC
      }).order
    ).toEqual('DESC')
  })
})
