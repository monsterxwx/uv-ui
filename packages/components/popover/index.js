import uvPopover from './src/popover.vue'

uvPopover.install = app => {
  app.component(uvPopover.name, uvPopover)
}

export default uvPopover
