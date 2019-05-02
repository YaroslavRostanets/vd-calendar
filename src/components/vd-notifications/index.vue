<template>
    <div>
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
    import Snotify from 'vue-snotify';

    export default {
        name: "index",
        components: {
            'vue-snotify': Snotify
        },
        mounted () {

        }
    }
</script>

<style scoped>

</style>