<template>
    <section>
        <fieldset>
            <legend>点扩散</legend>
            <div class="pulsate">

            </div>
        </fieldset>

    </section>
</template>

<script>
    export default {
        name: "Animation"
    }
</script>

<style scoped lang="scss">
    @import "~@scss/index";

    .pulsate {
        width: 10px;
        height: 10px;
        background-color: #ccc;
        border-radius: 50%;

        animation: czw-pulsate-2 1s ease-out infinite;
    }
</style>