<template>
    <div>
        <b-modal id="add-event-modal"
                 size="md"
                 scrollable
                 @ok="saveEvent"
                 okTitle="Створити"
                 cancelTitle="Відмінити"
                 :title="editingEvent ? 'Редагування події' : 'Створення події'"
                 ref="add-event-popup">
                <b-form>
                    <b-row>
                        <b-col>
                            <b-form-group label="Назва події">
                                <b-form-input v-model="instanceEvent.title" trim></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group label="Дата події">
                                <b-form-input type="date" v-model="instanceEvent.start" trim></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <hr>

                    <b-form-textarea
                            placeholder="Опис події"
                            rows="1"
                            no-resize
                            v-model="instanceEvent.description"
                    ></b-form-textarea>

                    <hr>

                    <b-row>
                        <b-col>
                            <b-form-group label="Нагадування">
                                <b-form-checkbox value="test">Нагадувати за 3 дні до початку</b-form-checkbox>
                            </b-form-group>

                        </b-col>
                        <b-col>
                            <b-form-group label="Тривалість заходу">
                                <b-form-checkbox value="test" v-model="allDay">Весь день</b-form-checkbox>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col>
                            <b-form-group label="Варіанти нагадування в день події">
                                <b-form-select
                                        v-model="remindersSelected"
                                        :options="remindersOptions"></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group label="Час початку"
                                          class="m-h-55"
                                          :disabled="allDay ? true : false ">
                                <b-form-input type="time"
                                              v-model="instanceEvent.timeStart"
                                              trim></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col>
                            <b-form-group label="Повторювати подію">
                                <b-form-select
                                        v-model="repeatSelected"
                                        :options="repeatOptions"></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group label="Час закінчення">
                                <b-form-input type="time"
                                              :disabled="allDay ? true : false "
                                              v-model="instanceEvent.timeEnd" trim></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                </b-form>
        </b-modal>
    </div>

</template>

<script>
    import BRow from 'bootstrap-vue/es/components/layout/row'
    import BCol from 'bootstrap-vue/es/components/layout/col'
    import BForm from 'bootstrap-vue/es/components/form/form'
    import BFormGroup from 'bootstrap-vue/es/components/form-group/form-group'
    import BFormInput from 'bootstrap-vue/es/components/form-input/form-input'
    import BFormCheckbox from 'bootstrap-vue/es/components/form-checkbox/form-checkbox'
    import BFormSelect from 'bootstrap-vue/es/components/form-select/form-select'
    import BFormTextarea from 'bootstrap-vue/es/components/form-textarea/form-textarea'
    import BModal from 'bootstrap-vue/es/components/modal/modal'
    import vBModal from 'bootstrap-vue/es/directives/modal/modal'


    export default {
        name: 'addEventPopup',
        props: ['isModalOpen', 'editingEvent'],
        data: function() {
            const dateNow = new Date();

            return {
                date: `${dateNow.getFullYear()}-${String(dateNow.getMonth()+1).padStart(2,"0")}-${dateNow.getDate()}`,
                instanceEvent: {
                    title: '',
                    start: this.date,
                    description: '',
                    timeStart: '09:00',
                    timeEnd: '18:00'
                },
                allDay: false,
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
        methods: {
            saveEvent: function() {
                console.log('Зберегти подію');
            }
        },
        watch: {
            isModalOpen: function(val){
                if(val) this.$refs['add-event-popup'].show()
            },
            editingEvent: function(val) {
                this.instanceEvent= {
                    title: val ? val.title : '',
                    start: val ? val.start : this.date,
                    description: val ? val.description : '',
                }
            }
        },
        mounted(){
            var self = this;
            this.$root.$on('bv::modal::hide', function () {
                self.$emit('close-modal');
            });
        },
        components: {
            BModal,
            BForm,
            BFormGroup,
            BFormInput,
            BFormCheckbox,
            BFormSelect,
            BFormTextarea,
            BRow,
            BCol
        },
        directives: {
            'b-modal': vBModal
        }
    }
</script>

<style>
    #add-event-modal .m-h-55 .col-form-label {
        min-height: 55px;
    }
</style>