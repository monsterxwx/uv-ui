import uvPopover from './index.vue'

uvPopover.install = app => {
  app.component(uvPopover.name, uvPopover)
}

export default uvPopover
