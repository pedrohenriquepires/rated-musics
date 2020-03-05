import { orderMusics, rateMusic } from './musics.actions'
import { useDispatch } from 'react-redux'

export const useMusics = () => {
  const dispatch = useDispatch()

  return {
    orderMusics: (...params) => dispatch(orderMusics(...params)),
    rateMusic: (...params) => dispatch(rateMusic(...params))
  }
}
