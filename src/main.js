import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Modal from 'bootstrap-vue/es/components/modal'
import 'bootstrap/dist/css/bootstrap.css'

import FullCalendar from 'vue-full-calendar'

Vue.use(FullCalendar, BootstrapVue, Modal);


Vue.config.productionTip = false;

const events = [
  {
    title: 'Тестова подія 1',
    start: '2019-04-24',
    additionalFields: [
      {'field1': 'test'},
      {'field2': 'test'},
      {'field13': 'test'}
    ]
  },
  {
    title: 'Тестова подія 2',
    start: '2019-04-27',
    end: '2019-04-15',
  },
  {
    title: 'Тестова подія 3',
    start: '2019-04-12T12:30:00',
    allDay: false,
  }
];

const config = {
  weekends: true,
  navLinks: true, // can click day/week names to navigate views
  editable: true,
  header: {
    left: 'prev,next today addEvent',
    center: 'title',
    right: 'month,agendaWeek,agendaDay,listMonth'
  },
};

new Vue({
  data: () => {
    return {}
  },
  render: h => h(App, {
    props: {
      calendarEvents: events,
      calendarConfig: config
    }
  })
}).$mount('#vd-calendar')
