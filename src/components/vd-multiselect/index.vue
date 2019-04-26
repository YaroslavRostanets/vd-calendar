<template>
    <multiselect
            :placeholder="placeholderInit"
            :value="value"
            :options="optionsInit"
            :multiple="true"
            :searchable="true"
            :allow-empty="true"
            :hide-selected="true"
            :max-height="150"
            :disabled="isDisabled"
            :block-keys="['Tab', 'Enter']"
            @input="onChange" @close="onTouch" @select="onSelect">
        <template slot="afterList">
            <li class="multiselect-btn-element">
                <b-button block variant="primary">Добавить новую запись</b-button>
            </li>
        </template>
    </multiselect>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import BButton from 'bootstrap-vue/es/components/button/button'
    import './thema.css'

    export default {
        name: "vdMultiselect",
        props: ['options', 'placeholder'],
        data: function() {
          return {
              isDisabled: false,
              isTouched: false,
              placeholderInit: this.placeholder,
              value: [],
              optionsInit: this.options
          }
        },
        components: {
            Multiselect,
            BButton
        },
        methods: {
            onChange (value) {
                this.value = value
                //if (value.indexOf('Reset me!') !== -1) this.value = []
            },
            onSelect (option) {
                //if (option === 'Disable me!') this.isDisabled = true
            },
            onTouch () {
                this.isTouched = true
            }
        }
    }
</script>

<style>

</style>