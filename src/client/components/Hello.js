import React from 'react'
import { FormattedMessage } from 'react-intl'
import { inject, observer } from 'mobx-react'
import css from './Hello.scss'

export default inject('RootStore')(observer(props => {
  const { showMessage } = props.RootStore

  const message = showMessage ? (
    <FormattedMessage
      id='Hello.message'
      defaultMessage='Hello!'
    />
  ) : ''

  return (
    <div className={css.hello}>
      {message}
    </div>
  )
}))
