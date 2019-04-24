<template>
    <div>
        <b-modal id="add-event-modal"
                 size="sm"
                 title="Створення події"
                 ref="add-event-popup">
                <b-form>
                    <b-form-group label="Назва події">
                        <b-form-input trim></b-form-input>
                    </b-form-group>
                    <b-form-group label="Дата події">
                        <b-form-input type="date" v-model="date" trim></b-form-input>
                    </b-form-group>
                    <hr>
                    <b-form-group label="Нагадування">
                        <b-form-checkbox value="test">Нагадувати за 3 дні до початку</b-form-checkbox>
                    </b-form-group>
                    <b-form-group label="Варіанти нагадування в день події">
                        <b-form-select
                                v-model="remindersSelected"
                                :options="remindersOptions"></b-form-select>
                    </b-form-group>
                    <b-form-group label="Повторювати подію">
                        <b-form-select
                                v-model="repeatSelected"
                                :options="repeatOptions"></b-form-select>
                    </b-form-group>
                </b-form>
        </b-modal>
    </div>

</template>

<script>
    import BForm from 'bootstrap-vue/es/components/form/form'
    import BFormGroup from 'bootstrap-vue/es/components/form-group/form-group'
    import BFormInput from 'bootstrap-vue/es/components/form-input/form-input'
    import BFormCheckbox from 'bootstrap-vue/es/components/form-checkbox/form-checkbox'
    import BFormSelect from 'bootstrap-vue/es/components/form-select/form-select'
    import BModal from 'bootstrap-vue/es/components/modal/modal'
    import vBModal from 'bootstrap-vue/es/directives/modal/modal'


    export default {
        name: 'addEventPopup',
        props: ['isModalOpen'],
        data: function() {
            const dateNow = new Date();
            return {
                date: `${dateNow.getFullYear()}-${String(dateNow.getMonth()+1).padStart(2,"0")}-${dateNow.getDate()}`,
                remindersSelected: 'z',
                remindersOptions: [
                    { value: 'a', text: 'В момент початку' },
                    { value: 'b', text: 'За 5 хв до початку' },
                    { value: 'c', text: 'За 30 хв до початку' },
                    { value: 'd', text: 'За 1 годину до початку' },
                    { value: 'e', text: 'За 2 години до початку' },
                    { value: 'z', text: 'Виберіть зі списку', disabled: true }
                ],
                repeatSelected: 'a',
                repeatOptions: [
                    { value: 'a', text: 'Ніколи' },
                    { value: 'b', text: 'Щомісяця' },
                    { value: 'c', text: 'Щороку' }
                ]
            }

        },
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
            BModal,
            BForm,
            BFormGroup,
            BFormInput,
            BFormCheckbox,
            BFormSelect
        },
        directives: {
            'b-modal': vBModal
        }
    }
</script>

<style scoped>

</style>