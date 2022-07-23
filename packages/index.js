import uvButton from './button/index.js'
import uvInput from './input/index.js'

const install = app => {
  app.use(uvButton)
  app.use(uvInput)
}
const uvUI = {
  install
}
export {
  uvButton,
  uvInput
}

export default uvUI
