import '../utils/index'
import '../hooks/index'
import uvButton from './button'
import uvInput from './input'
import uvIcon from './icon'
import uvCell from './cell'
import uvCellGroup from './cell-group'
import uvOverlay from './overlay'
import uvPopup from './popup'
import Toast from './toast'
import Message from './message'
import uvCheckbox from './checkbox'
import uvCheckboxGroup from './checkbox-group'
import uvRadio from './radio'
import uvRadioGroup from './radio-group'
import uvNumInput from './num-input'
import uvPicker from './picker'
import uvDatetimePicker from './datetime-picker'
import uvSwitch from './switch'
import uvSearch from './search'
import uvSlider from './slider'
import uvStepper from './stepper'
import uvActionSheet from './action-sheet'
import showDialog from './dialog'
import uvSwipeCell from './swipe-cell'
import uvRate from './rate'
import uvCollapse from './collapse'
import uvCollapseItem from './collapse-item'
import uvDivider from './divider'
import uvPopover from './popover'
import uvWaterWaves from './water-waves'
import uvTab from './tab'
import uvSwipe from './swipe'
import uvSwipeItem from './swipe-item'
import uvGrid from './grid'
import uvGridItem from './grid-item'
import uvNoticeBar from './notice-bar'
import uvNavBar from './nav-bar'
import uvTabBar from './tab-bar'
import uvTabBarItem from './tab-bar-item'
import uvCountTo from './count-to'
import uvSelect from './select'
import uvSideBar from './side-bar'
import uvPagination from './pagination'
import uvSteps from './steps'
import uvStepsItem from './steps-item'
import uvForm from './form'
import uvFormItem from './form-item'
import uvTable from './table'
import uvCalendar from './calendar'
import uvSignature from './signature'
import uvWaterMark from './water-mark'
import uvBackTop from './back-top'
import uvTextEllipsis from './text-ellipsis'
import uvTag from './tag'
import uvSkeleton from './skeleton'
import uvSkeletonAvatar from './skeleton-avatar'
import uvSkeletonImage from './skeleton-image'
import uvSkeletonParagraph from './skeleton-paragraph'
import uvSkeletonTitle from './skeleton-title'
import uvCountDown from './count-down'
import uvEmpty from './empty'
import uvProgress from './progress'
import uvCircleProgress from './circle-progress'
import uvUploader from './uploader'
import uvCascader from './cascader'

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
  uvDatetimePicker,
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
  uvFormItem,
  uvTable,
  uvCalendar,
  uvSignature,
  uvWaterMark,
  uvBackTop,
  uvTextEllipsis,
  uvTag,
  uvSkeleton,
  uvSkeletonTitle,
  uvSkeletonParagraph,
  uvSkeletonImage,
  uvSkeletonAvatar,
  uvCountDown,
  uvEmpty,
  uvProgress,
  uvCircleProgress,
  uvUploader,
  uvCascader
]

const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
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
  uvDatetimePicker,
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
  uvFormItem,
  uvTable,
  uvCalendar,
  uvSignature,
  uvWaterMark,
  uvBackTop,
  uvTextEllipsis,
  uvTag,
  uvSkeleton,
  uvSkeletonTitle,
  uvSkeletonParagraph,
  uvSkeletonImage,
  uvSkeletonAvatar,
  uvCountDown,
  uvEmpty,
  uvProgress,
  uvCircleProgress,
  uvUploader,
  uvCascader
}

export default install
