<template>
  <div class="vd-calendar">
    <div class="row">
      <div class="col-xl-2 col-md-12">
        Блок с описанием
      </div>
      <div class="col-xl-10 col-md-12">
        <div class="full-calendar-wrap">
          <a href="#" class="add-event"></a>
          <full-calendar
                  @day-click="dayClick"
                  @event-selected="eventSelected"
                  :config="config"
                  :events="events"></full-calendar>
        </div>
      </div>
    </div>
    <add-event-popup
            @close-modal="closeModal"
            :isModalOpen="isModalOpen"></add-event-popup>
  </div>

</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import addEventPopup from './components/addEventPopup'
import 'fullcalendar/dist/locale/uk'
import './assets/fullcalendar.css'
import './assets/thema.scss'

export default {
  name: 'app',
  data: function() {
    const vm = this;
    return {
      isModalOpen: false,
      events: [
        {
          title: 'Подія 1',
          start: '2019-04-24',
          testField: 'Довільне поле'
        },
        {
          title: 'Подія 2',
          start: '2019-04-27',
          end: '2019-04-15',
        },
        {
          title: 'Подія 3',
          start: '2019-04-12T12:30:00',
          allDay: false,
        }
      ],
      config: {
          customButtons: {
              addEvent: {
                  text: 'Додати подію',
                  click: function() {
                    vm.isModalOpen = true;
                  }
              }
          },
          header: {
              left: 'prev,next today addEvent',
              center: 'title',
              right: 'month,agendaWeek,agendaDay,listMonth'
          },
          weekends: true,
          navLinks: true, // can click day/week names to navigate views
          editable: true,
        }
    }
  },
  methods: {
    dayClick: function(date, jsEvent, view) {
      console.log(date, jsEvent, view);
    },
    eventSelected: function(event, jsEvent, view) {
      console.log(event, jsEvent, view);
    },
    closeModal: function() {
      this.isModalOpen = false;
    }
  },
  components: {
    FullCalendar, addEventPopup
  },
    mounted: function() {
      if(this.$refs.fullcalendar){
          console.log(this.$refs.fullcalendar.header);
      }
    }
}
</script>

<style>
.vd-calendar {
  padding: 1.25rem;
  background: #FFFFFF;
}
.fc {
  max-width: 1020px;
}
</style>
