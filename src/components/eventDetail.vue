<template>
    <div v-if="selectedEvent">
        <div class="card">
            <div class="card-header">
                <h5>{{selectedEvent.title}}</h5>
            </div>
            <div class="card-block">
                <table class="table">
                    <tr>
                        <td>Старт події:</td>
                        <td>{{dateStart}}</td>
                    </tr>
                    <tr>
                        <td>Завершення події:</td>
                        <td>{{dateStart}}</td>
                    </tr>
                </table>
            </div>
            <div class="group">
                <button type="button" class="btn btn-secondary">Редагувати подію</button>
                <button type="button" class="btn btn-secondary">Видалити подію</button>
            </div>
        </div>
    </div>
    <div v-else>
        Виберіть подію
    </div>

</template>

<script>
    export default {
        name: "eventDetail",
        props: ['selectedEvent'],
        computed: {
            dateStart: function() {
                return new Date(this.selectedEvent.start).toLocaleDateString()
            },
            dateEnd: function() {
                return new Date(this.selectedEvent.end).toLocaleDateString()
            }
        }
    }
</script>

<style scoped>
    .card {
        border-radius: 2px;
        border-top: 4px solid #0073AA;
        box-shadow: 0 2px 1px rgba(0, 0, 0, 0.05);
        border-left: none;
        border-right: none;
        border-bottom: none;
        margin-bottom: 30px;
    }
    .card .card-header {
        background-color: transparent;
        padding: 15px 20px;
    }
    .card h5 {
        margin-bottom: 0;
        color: #757575;
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        display: inline-block;
        margin-right: 10px;
    }
</style>