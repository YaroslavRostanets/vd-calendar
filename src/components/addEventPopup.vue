<template>
    <div>
        <b-button v-b-modal.modal-1>Launch demo modal</b-button>

        <b-modal id="modal-1" title="Створення події" ref="add-event-popup">
            <p class="my-4">Hello from modal!</p>
        </b-modal>
    </div>

</template>

<script>
    import BModal from 'bootstrap-vue/es/components/modal/modal'
    import BButton from 'bootstrap-vue/es/components/button/button'
    import vBModal from 'bootstrap-vue/es/directives/modal/modal'

    export default {
        name: 'addEventPopup',
        props: ['isModalOpen'],
        watch: {
          isModalOpen: function(val){
              if(val) this.$refs['add-event-popup'].show()
          }
        },
        mounted(){
            var self = this;
            this.$root.$on('bv::modal::hide', function () {
                self.$emit('close-modal');
            })
        },
        components: {
            BModal, BButton
        },
        directives: {
            'b-modal': vBModal
        }
    }
</script>

<style scoped>

</style>