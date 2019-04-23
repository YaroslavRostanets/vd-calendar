<template>
    <div class="fc-toolbar fc-header-toolbar">
        <div class="fc-left">
            <div class="fc-button-group">
                <button type="button" class="fc-prev-button fc-button fc-state-default fc-corner-left"><span
                        class="fc-icon fc-icon-left-single-arrow"></span></button>
                <button type="button" class="fc-next-button fc-button fc-state-default fc-corner-right"><span
                        class="fc-icon fc-icon-right-single-arrow"></span></button>
            </div>
            <button type="button"
                    class="fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right fc-state-disabled"
                    disabled="">today
            </button>
        </div>
        <div class="fc-right">
            <div class="fc-button-group">
                <button type="button" class="fc-month-button fc-button fc-state-default fc-corner-left fc-state-active">
                    month
                </button>
                <button type="button" class="fc-agendaWeek-button fc-button fc-state-default">week</button>
                <button type="button" class="fc-agendaDay-button fc-button fc-state-default">day</button>
                <button type="button" class="fc-listMonth-button fc-button fc-state-default fc-corner-right">list
                </button>
            </div>
        </div>
        <div class="fc-center"><h2>April 2019</h2></div>
        <div class="fc-clear"></div>
    </div>
</template>

<script>
    export default {
        name: "HeaderToolbar"
    }
</script>

<style scoped>
    .fc-toolbar.fc-header-toolbar {
        font-size: 0.875em;
    }
    .fc-toolbar .fc-left {
        float: right;
    }
    .fc-toolbar .fc-center {
        display: block;
    }
    .fc-state-default {
        background-color: #fff;
        color: #272727;
        background-image: none !important;
        border-color: none !important;
        text-shadow: none !important;
        box-shadow: none !important;
    }
    .fc button {
        height: auto;
        padding: 10px;
    }
    .fc .fc-button-group > * {
        float: left;
        margin: 0 0 0 -1px;
    }
    .fc .fc-toolbar > * > * {
        margin-left: 0;
    }
    .fc-state-active {
        background-color: #0073aa;
        color: #fff;
    }
    .fc-center h2 {
        font-weight: 300;
        font-size: 25px;
        margin-top: 10px;
    }
    .fc-button-group {
        margin-right: 10px;
    }
</style>