import uvButton from './button/index.js'
import uvInput from './input/index.js'
import uvCell from './cell/index.js'
import uvOverlay from './overlay/index.js'
import uvPopup from './popup/index.js'
import Toast from './toast/index.js'

const install = app => {
  app.use(uvButton)
  app.use(uvInput)
  app.use(uvCell)
  app.use(uvOverlay)
  app.use(uvPopup)
  app.use(Toast)
}
const uvUI = {
  install
}
export {
  uvButton,
  uvInput,
  uvCell,
  uvOverlay,
  uvPopup,
  Toast
}

export default uvUI
