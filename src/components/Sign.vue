<template>
    <div>
        <navbar :title="'Nouvelle visite'"/>
        <div class="spacer"></div>
        <div class="container" id="app">
            <div class="row">
                <div class="col s12">
                    <div class="card z-depth-2">
                        <div class="container">
                            <div class="row">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navbar from './Navbar.vue'

    export default {
        name: 'Sign',
        components: {
            navbar
        },
        methods: {},
        created() {

        }
    }
</script>

<style>
</style>
