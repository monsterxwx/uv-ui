import uvNoticeBar from './src/notice-bar.vue'

uvNoticeBar.install = app => {
  app.component(uvNoticeBar.name, uvNoticeBar)
}

export default uvNoticeBar
