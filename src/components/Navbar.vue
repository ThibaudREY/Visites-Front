<template>
    <nav class="nav-extended">
        <div class="nav-content">
            <span class="nav-title ml2">Visites</span>
            <a class="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                <i class="material-icons">add</i>
            </a>
            <a class="half-fab-2nd btn-floating btn-large halfway-fab waves-effect waves-light teal">
                <i class="material-icons">search</i>
            </a>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        components: {
        },
        beforeUpdate () {
            // eslint-disable-next-line
            $(".button-collapse").sideNav('hide');
        }
    }
</script>

<style>
</style>