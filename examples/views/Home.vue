<template>
    <section>
        <czw-link>ssdfsdfsd</czw-link>
        <draggable>

            sdjfksdfjsaldfslf
        </draggable>
    </section>
</template>

<script>

    import draggable from 'vuedraggable'
    import Sortable from 'sortablejs'


    export default {
        name: "Home",
        components: {
            "czw-link": () => import("../../src/components/Link"),
            draggable,
            Sortable
        }
    }
</script>

<style scoped>

</style>