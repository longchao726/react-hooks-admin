
import { makeAutoObservable, observable, action } from "mobx"

class StepFormStore {
  current = 0
  info = {}

  constructor() {
    makeAutoObservable(this, {
      current: observable,
      info: observable,
      setCurrent: action,
      setInfo: action
    })
  }

  setCurrent(current) {
    this.current = current
  }

  setInfo(info) {
    this.info = info
  }
}

export default new StepFormStore()