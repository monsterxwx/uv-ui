import uvButton from './components/button/index.js'
import uvInput from './components/input/index.js'
import uvIcon from './components/icon/index.js'
import uvCell from './components/cell/index.js'
import uvCellGroup from './components/cell-group/index.js'
import uvOverlay from './components/overlay/index.js'
import uvPopup from './components/popup/index.js'
import Toast from './components/toast/index.js'
import Message from './components/message/index.js'
import uvCheckbox from './components/checkbox/index.js'
import uvCheckboxGroup from './components/checkbox-group/index.js'
import uvRadio from './components/radio/index.js'
import uvRadioGroup from './components/radio-group/index.js'
import uvNumInput from './components/num-input/index.js'
import uvPicker from './components/picker/index.js'
import uvSwitch from './components/switch/index.js'
import uvSearch from './components/search/index.js'
import uvSlider from './components/slider/index.js'
import uvStepper from './components/stepper/index.js'
import uvActionSheet from './components/action-sheet/index.js'
import showDialog from './components/dialog/index.js'
import uvSwipeCell from './components/swipe-cell/index.js'
import uvRate from './components/rate/index.js'
import uvCollapse from './components/collapse/index.js'
import uvCollapseItem from './components/collapse-item/index.js'
import uvDivider from './components/divider/index.js'
import uvPopover from './components/popover/index.js'
import uvWaterWaves from './components/water-waves/index.js'
import uvTab from './components/tab/index.js'
import uvSwipe from './components/swipe/index.js'
import uvSwipeItem from './components/swipe-item/index.js'
import uvGrid from './components/grid/index.js'
import uvGridItem from './components/grid-item/index.js'
import uvNoticeBar from './components/notice-bar/index.js'
import uvNavBar from './components/nav-bar/index.js'
import uvTabBar from './components/tab-bar/index.js'
import uvTabBarItem from './components/tab-bar-item/index.js'
import uvCountTo from './components/count-to/index.js'
import uvSelect from './components/select/index.js'
import uvSideBar from './components/side-bar/index.js'
import uvPagination from './components/pagination/index.js'
import uvSteps from './components/steps/index.js'
import uvStepsItem from './components/steps-item/index.js'
import uvForm from './components/form/index.js'
import uvFormItem from './components/form-item/index.js'

const components = [
  uvButton,
  uvInput,
  uvIcon,
  uvCell,
  uvCellGroup,
  uvOverlay,
  uvPopup,
  Toast,
  Message,
  uvCheckbox,
  uvCheckboxGroup,
  uvRadio,
  uvRadioGroup,
  uvNumInput,
  uvPicker,
  uvSwitch,
  uvSearch,
  uvSlider,
  uvStepper,
  uvActionSheet,
  showDialog,
  uvSwipeCell,
  uvRate,
  uvCollapse,
  uvCollapseItem,
  uvDivider,
  uvPopover,
  uvWaterWaves,
  uvTab,
  uvSwipe,
  uvSwipeItem,
  uvGrid,
  uvGridItem,
  uvNoticeBar,
  uvNavBar,
  uvTabBar,
  uvTabBarItem,
  uvCountTo,
  uvSelect,
  uvSideBar,
  uvPagination,
  uvSteps,
  uvStepsItem,
  uvForm,
  uvFormItem
]
const install = function (app) {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

const uvUI = {
  install
}
export {
  uvButton,
  uvInput,
  uvIcon,
  uvCell,
  uvCellGroup,
  uvOverlay,
  uvPopup,
  Toast,
  Message,
  uvCheckbox,
  uvCheckboxGroup,
  uvRadio,
  uvRadioGroup,
  uvNumInput,
  uvPicker,
  uvSwitch,
  uvSearch,
  uvSlider,
  uvStepper,
  uvActionSheet,
  showDialog,
  uvSwipeCell,
  uvRate,
  uvCollapse,
  uvCollapseItem,
  uvDivider,
  uvPopover,
  uvWaterWaves,
  uvTab,
  uvSwipe,
  uvSwipeItem,
  uvGrid,
  uvGridItem,
  uvNoticeBar,
  uvNavBar,
  uvTabBar,
  uvTabBarItem,
  uvCountTo,
  uvSelect,
  uvSideBar,
  uvPagination,
  uvSteps,
  uvStepsItem,
  uvForm,
  uvFormItem
}

export default uvUI
