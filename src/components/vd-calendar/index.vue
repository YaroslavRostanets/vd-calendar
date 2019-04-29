<template>
  <div class="vd-calendar">
    <div class="row">
      <div class="col-xl-2 col-md-12">
        <event-detail
                @delete-event="eventDelete"
                @edit-event="eventEdit"
                :selectedEvent="selectedEvent"></event-detail>
      </div>
      <div class="col-xl-10 col-md-12">
        <div class="full-calendar-wrap">
          <a href="#" class="add-event"></a>
          <full-calendar
                  @day-click="dayClick"
                  @event-selected="eventSelected"
                  :config="config"
                  :events="events"
                  ref="fullcalendar"
                  ></full-calendar>
        </div>
      </div>
    </div>
    <add-event-popup
            :editingEvent="editingEvent"
            @close-modal="closeModal"
            :isModalOpen="isModalOpen"></add-event-popup>
  </div>

</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import addEventPopup from './containers/addEventPopup'
import eventDetail from './containers/eventDetail'
import 'fullcalendar/dist/locale/uk'
import './assets/fullcalendar.css'
import './assets/thema.scss'

export default {
  name: 'app',
  props: ['calendarEvents', 'calendarConfig'],
  data () {
    const vm = this;
    return {
      isModalOpen: false,
      selectedEvent: null,
      editingEvent: null,
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
    dayClick (date, jsEvent, view) {
      console.log(date, jsEvent, view);
    },
    eventSelected (event, jsEvent, view) {
      console.log(event, jsEvent, view);
      this.selectedEvent = event;
    },
    closeModal () {
      this.isModalOpen = false;
      this.editingEvent = null;
    },
    eventEdit (id) {
      this.editingEvent = this.events.find((el) => el.id == id);
      this.isModalOpen = true;
      console.log('Событие редактирования', id);
    },
    eventDelete (id) {
      console.log('Событие удаления', id);
      this.events.splice( this.events.findIndex((el) => el.id === id), 1); //Выполнить в callback AJAX
      this.selectedEvent = null;
      this.editingEvent = null;
    }
  },
  components: {
    FullCalendar, addEventPopup, eventDetail
  },
    mounted: function() {
      if(this.$refs.fullcalendar){
          console.log( this.$refs.fullcalendar);
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
