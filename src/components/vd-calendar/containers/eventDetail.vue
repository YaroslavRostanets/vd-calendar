<template>
    <div class="card">
        <div class="card-header">
            <h5>{{selectedEvent ? selectedEvent.title : 'Виберіть подію'}}</h5>
        </div>

        <div v-if="selectedEvent">

            <div class="card-block">
                <table class="table">
                    <tr>
                        <td>Старт події:</td>
                        <td>{{dateStart}}</td>
                    </tr>
                    <tr v-if="dateEnd">
                        <td>Завершення події:</td>
                        <td>{{dateEnd}}</td>
                    </tr>
                    <tr v-if="description">
                        <td colspan="2">
                            {{description}}
                        </td>
                    </tr>
                </table>
            </div>
            <div class="group">
                <b-button variant="primary" @click="$emit('edit-event', selectedEvent.id)">
                    <edit-icon :size="20"></edit-icon>
                </b-button>
                <b-button variant="danger" @click="$emit('delete-event', selectedEvent.id)">
                    <delete-icon :size="20"></delete-icon>
                </b-button>
            </div>

        </div>
    </div>
</template>

<script>
    import BButton from 'bootstrap-vue/es/components/button/button'
    import EditIcon from "vue-material-design-icons/Pencil.vue"
    import DeleteIcon from "vue-material-design-icons/Delete.vue"

    export default {
        name: "eventDetail",
        props: ['selectedEvent'],
        computed: {
            dateStart: function() {
                return new Date(this.selectedEvent.start).toLocaleDateString();
            },
            dateEnd: function() {
                return this.selectedEvent.end ? new Date(this.selectedEvent.end).toLocaleDateString() : null;
            },
            description: function() {
                return this.selectedEvent.description ? this.selectedEvent.description : null;
            }
        },
        components: {
            BButton,
            EditIcon,
            DeleteIcon
        }
    }
</script>

<style scoped>
    .card {
        border-radius: 2px;
        border-top: 4px solid #0073AA;
        box-shadow: none;
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
    .card-block {
        font-size: 14px;
    }
    .group {
        display: flex;
        justify-content: flex-end;
    }
    .group .btn {
        margin-right: 10px;
    }
    .group .btn:last-child {
        margin-right: 0;
    }

</style>