<template>
    <multiselect
            :placeholder="placeholder"
            :value="value"
            :options="options"
            :multiple="multiple"
            :searchable="searchable"
            :allow-empty="true"
            :hide-selected="true"
            :max-height="150"
            :block-keys="['Tab', 'Enter']"
            @input="onChange" @close="onTouch" @select="onSelect" v-on:search-change="onSearchChange">
        <template slot="noResult">
            <div class="multiselect-btn-element">
                <div class="multiselect--no-result">Нічого не знайдено</div>
                <b-button block variant="primary">Добавить новую запись</b-button>
            </div>
        </template>
    </multiselect>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import BButton from 'bootstrap-vue/es/components/button/button'
    import './thema.css'

    export default {
        name: "vdMultiselect",
        props: ['placeholder', 'value', 'options', 'searchable', 'multiple'],
        data() {
            return {

            }
        },
        components: {
            Multiselect,
            BButton
        },
        methods: {
            onChange (value) {
                console.log('onChange: ', value);
                this.value = value
            },
            onSelect (option) {
                console.log('onSelect: ', option);
            },
            onTouch () {
                console.log('onTouch');
                this.isTouched = true
            },
            onSearchChange (query, id) {
                console.log(query, id);
                console.log('search');
            }
        }
    }
</script>

<style>

</style>