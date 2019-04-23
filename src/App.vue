<template>
  <div class="vd-calendar">
    <div class="row">
      <div class="col-xl-2 col-md-12">
        Блок с описанием
      </div>
      <div class="col-xl-10 col-md-12">
        <div class="fc fc-unthemed fc-ltr">
          <header-toolbar></header-toolbar>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import HeaderToolbar from './components/HeaderToolbar'

export default {
  name: 'app',
  components: {
    HeaderToolbar
  }
}
</script>

<style>
.vd-calendar {
  padding: 1.25rem;
}

</style>
