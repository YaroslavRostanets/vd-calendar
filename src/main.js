import Vue from 'vue'
import App from './components/vd-calendar/index.vue'
import vdMultiselect from './components/vd-multiselect/index'
import vdNotifications from './components/vd-notifications'
import BootstrapVue from 'bootstrap-vue'
import Modal from 'bootstrap-vue/es/components/modal'
import Snotify from 'vue-snotify';

import 'bootstrap/dist/css/bootstrap.css'

import FullCalendar from 'vue-full-calendar'

Vue.use(FullCalendar, BootstrapVue, Modal, Snotify);

Vue.config.productionTip = false;
Vue.component('vd-multiselect', vdMultiselect)

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
    allDay: true
  },
  {
    id: "3",
    title: 'Тестова подія 3',
    start: '2019-04-12T12:30:00',
    allDay: true,
  }
];

//Пример настроек
const config = {
  weekends: true,
  navLinks: true,
  editable: true,
  header: {
    left: 'prev,next today addEvent',
    center: 'title',
    right: 'month,agendaWeek,agendaDay,listMonth'
  },
  defaultView: 'month'
};

/*---------инициализация CALENDAR-------------*/

new Vue({
  render: h => h(App, {
    props: {
      calendarEvents: events,
      calendarConfig: config
    }
  })
}).$mount('#vd-calendar');

/*----------------------------*/

/*---------инициализация SELECT-------------*/

/*new Vue({
    render: h => h(vdMultiselect, {
        props: {
            properties: {
                placeholder: 'Виберіть опцію',
                value: [],
                options: ['Параметр 1', 'Параметр 2', 'Параметр 3',
                    'Параметр 4', 'Параметр 5', 'Параметр 6',
                    'Параметр 7', 'Параметр 8', 'Параметр 9'],
                searchable: true,
                multiple: true
            },
        }
    })
}).$mount('.vd-multiselect');*/

/*----------------------------*/

var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    }
})