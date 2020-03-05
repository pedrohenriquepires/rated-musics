import { ORDER_MUSICS_ASC, ORDER_MUSICS_DESC, RATE_MUSIC } from './musics.types'

export const orderMusics = order => {
  const type = order === 'DESC' ? ORDER_MUSICS_DESC : ORDER_MUSICS_ASC

  return { type }
}

export const rateMusic = (id, rate) => ({
  type: RATE_MUSIC,
  id,
  rate
})
