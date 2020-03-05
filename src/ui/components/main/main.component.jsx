import React from 'react'
import { Provider } from 'react-redux'

import store from 'app-stores/root-store'
import { List } from 'app-components'

import './main.style.scss'

export const Main = () => (
  <Provider store={store}>
    <div className="logo">
      <img
        src="https://i.ya-webdesign.com/images/billboard-logo-png-7.png"
        alt=""
      />
    </div>

    <List />
  </Provider>
)
