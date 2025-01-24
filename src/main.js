import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CompotitionComponent from './components/CompotitionComponent.vue'
import OptionComponent from './components/OptionComponent.vue'

const app = createApp(App)

/**
 * registered component globally
 */
app
  .component('CompotitionComponent', CompotitionComponent)
  .component('option-component', OptionComponent)

app.mount('#app')
