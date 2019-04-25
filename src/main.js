import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Modal from 'bootstrap-vue/es/components/modal'
import 'bootstrap/dist/css/bootstrap.css'

import FullCalendar from 'vue-full-calendar'

Vue.use(FullCalendar, BootstrapVue, Modal);


Vue.config.productionTip = false;

//Пример событий
const events = [
  {
    id: "1",
    title: 'Тестова подія 1',
    start: '2019-04-24',
    description: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло. '
  },
  {
    id: "2",
    title: 'Тестова подія 2',
    start: '2019-04-27',
    end: '2019-04-28',
  },
  {
    id: "3",
    title: 'Тестова подія 3',
    start: '2019-04-12T12:30:00',
    allDay: false,
  }
];

//Пример настроек
const config = {
  weekends: true,
  navLinks: true, // can click day/week names to navigate views
  editable: true,
  header: {
    left: 'prev,next today addEvent',
    center: 'title',
    right: 'month,agendaWeek,agendaDay,listMonth'
  },
  defaultView: 'month'
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
