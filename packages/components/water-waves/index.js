import uvWaterWaves from './src/water-waves.vue'

uvWaterWaves.install = app => {
  app.component(uvWaterWaves.name, uvWaterWaves)
}

export default uvWaterWaves
