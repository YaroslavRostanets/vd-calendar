<template>
  <div class="vd-calendar">
    <div class="row">
      <div class="col-xl-2 col-md-12">
        <event-detail :selectedEvent="selectedEvent"></event-detail>
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
import eventDetail from './components/eventDetail'
import 'fullcalendar/dist/locale/uk'
import './assets/fullcalendar.css'
import './assets/thema.scss'

export default {
  name: 'app',
  props: ['calendarEvents', 'calendarConfig'],
  data: function() {
    const vm = this;
    return {
      isModalOpen: false,
      selectedEvent: null,
      events: this.calendarEvents,
      config: Object.assign(this.calendarConfig, {
        customButtons: {
          addEvent: {
            text: 'Додати подію',
            click: function() {
              vm.isModalOpen = true;
            }
          }
        }
      })
    }
  },
  methods: {
    dayClick: function(date, jsEvent, view) {
      console.log(date, jsEvent, view);
    },
    eventSelected: function(event, jsEvent, view) {
      console.log(event, jsEvent, view);
      this.selectedEvent = event;
    },
    closeModal: function() {
      this.isModalOpen = false;
    }
  },
  components: {
    FullCalendar, addEventPopup, eventDetail
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
