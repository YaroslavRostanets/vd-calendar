import Vue from 'vue'
import App from './App.vue'
import './assets/fullcalendar.css'

Vue.config.productionTip = false

new Vue({
  data: () => {
    return {
      test: 'test'
    }
  },
  render: h => h(App),
}).$mount('#vd-calendar')

/*new Vue({
  el: '#vd-calendar',
  data: {
    message: 'Привет, Vue!'
  }
});*/
