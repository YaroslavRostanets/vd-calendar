<template>
  <div class="vd-calendar">
    <div class="row">
      <div class="col-xl-2 col-md-12">
        Блок с описанием
      </div>
      <div class="col-xl-10 col-md-12">
        <div class="fc fc-unthemed fc-ltr">
          <header-toolbar
                  v-bind:tabs="tabs"
                  v-bind:active-index="activeTabIndex"
                  v-on:toggle-tab-event="toggleTab"></header-toolbar>
          <view-container
                  v-bind:active-index="activeTabIndex"></view-container>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import HeaderToolbar from './components/HeaderToolbar'
import ViewContainer from './components/ViewContainer/index'

export default {
  name: 'app',
  data: function() {
    return {
      tabs: ['month', 'week', 'day', 'list'],
      activeTabIndex: 0
    }
  },
  methods: {
    toggleTab: function(tabIndex) {
      this.activeTabIndex = tabIndex;
    }
  },
  components: {
    HeaderToolbar,
    ViewContainer
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
