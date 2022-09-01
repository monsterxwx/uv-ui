import uvWaterWaves from './index.vue'

uvWaterWaves.install = app => {
  app.component(uvWaterWaves.name, uvWaterWaves)
}

export default uvWaterWaves
