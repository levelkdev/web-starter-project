import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import Routes from './Routes'

render(
  <Routes />,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
