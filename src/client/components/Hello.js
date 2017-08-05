import React from 'react'
import { inject, observer } from 'mobx-react'
import css from './Hello.scss'

export default inject('RootStore')(observer(props => {
  const { message } = props.RootStore
  return (
    <div className={css.hello}>
      <span>{message}</span>
    </div>
  )
}))
