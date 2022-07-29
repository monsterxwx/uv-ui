import uvButton from './button/index.js'
import uvInput from './input/index.js'
import uvCell from './cell/index.js'
import uvCellGroup from './cell-group/index.js'
import uvOverlay from './overlay/index.js'
import uvPopup from './popup/index.js'
import Toast from './toast/index.js'
import uvCheckbox from './checkbox/index.js'

const install = app => {
  app.use(uvButton)
  app.use(uvInput)
  app.use(uvCell)
  app.use(uvCellGroup)
  app.use(uvOverlay)
  app.use(uvPopup)
  app.use(Toast)
  app.use(uvCheckbox)
}
const uvUI = {
  install
}
export {
  uvButton,
  uvInput,
  uvCell,
  uvCellGroup,
  uvOverlay,
  uvPopup,
  Toast,
  uvCheckbox
}

export default uvUI
