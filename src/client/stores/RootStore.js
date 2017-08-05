import { observable } from 'mobx'

class RootStore {
  @observable message = '(: Helloooooooooo :)'
}

export default new RootStore()
