<template>
    <div>
        <div>
            {{activeIndex}}
        </div>
        <div v-if="activeIndex === 0">
            <month></month>
        </div>
        <div v-else-if="activeIndex === 1">
            <week></week>
        </div>
        <div v-else-if="activeIndex === 2">
            <day></day>
        </div>
        <div v-else>
            <list></list>
        </div>
    </div>
</template>

<script>
    import month from './month'
    import week from './week'
    import day from './day'
    import list from './list'

    export default {
        name: "ViewContainer",
        props: ['activeIndex'],
        components: {
            month,
            day,
            week,
            list
        }
    }
</script>

<style scoped>

</style>