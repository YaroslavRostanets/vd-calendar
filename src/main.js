import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Modal from 'bootstrap-vue/es/components/modal'
import 'bootstrap/dist/css/bootstrap.css'

import FullCalendar from 'vue-full-calendar'

Vue.use(FullCalendar, BootstrapVue, Modal);


Vue.config.productionTip = false;

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
