<template>
    <div>
        <navbar></navbar>
        <div class="container" id="app">
            <tour></tour>
        </div>
    </div>
</template>

<script>
    import navbar from './components/navbar.vue'
    import tour from './components/tour.vue'

    export default {
        name: 'app',
        components: {
            navbar,
            tour
        },
        mounted () {
            this.tours = null
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
