import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import RootStore from 'stores/RootStore'
import Routes from './Routes'

const stores = {
  RootStore
}

const app = (
  <Provider {...stores}>
    <Routes />
  </Provider>
)

render(app, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
