import { observable } from 'mobx'

class RootStore {
  @observable message = '(: Heloooooooooo :)'
}

export default new RootStore()
