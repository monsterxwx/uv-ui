import uvButton from './button/index.js'
import uvInput from './input/index.js'
import uvCell from './cell/index.js'
import uvCellGroup from './cell-group/index.js'
import uvOverlay from './overlay/index.js'
import uvPopup from './popup/index.js'
import Toast from './toast/index.js'
import Message from './message/index.js'
import uvCheckbox from './checkbox/index.js'
import uvCheckboxGroup from './checkbox-group/index.js'
import uvNumInput from './num-input/index.js'
import uvPicker from './picker/index.js'

const install = app => {
  app.use(uvButton)
  app.use(uvInput)
  app.use(uvCell)
  app.use(uvCellGroup)
  app.use(uvOverlay)
  app.use(uvPopup)
  app.use(Toast)
  app.use(Message)
  app.use(uvCheckbox)
  app.use(uvCheckboxGroup)
  app.use(uvNumInput)
  app.use(uvPicker)
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
  Message,
  uvCheckbox,
  uvCheckboxGroup,
  uvNumInput,
  uvPicker
}

export default uvUI
