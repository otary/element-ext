<template>
    <section>
        <czw-link>ssdfsdfsd</czw-link>

        <div class="test">
            sss
        </div>

    </section>
</template>

<script>

    export default {
        name: "Home",
        components: {
            "czw-link": () => import("../../src/components/Link")
        }
    }
</script>

<style lang="scss">
    html{
        font-size: 100px;
    }
</style>

<style scoped lang="scss">
    @import "../../src/assets/scss/base/util";

    .test{
        border: 1px solid #ccc;
        width: px2rem(300);
    }
</style>