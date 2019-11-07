<template>
    <section>

        <h2>css</h2>

        <ul>
            <li>
                <a href="#/css/box">css/box</a>
            </li>
            <li>
                <a href="#/css/position">css/position</a>
            </li>
            <li>
                <a href="#/css/text">css/text</a>
            </li>

            <li>
                <a href="#/css/animation">css/animation</a>
            </li>

            <li>
                <a href="#/css/util">css/util</a>
            </li>
        </ul>

        <h2>组件</h2>

        <ul>
            <li>
                <a href="#/components/marquee-example">components/marquee-example</a>
            </li>
        </ul>


    </section>
</template>

<script>


    export default {
        name: "Home",
        data() {
            return {}
        },
        components: {
            "czw-link": () => import("@/components/Link")
        }
    }
</script>


<style scoped lang="scss">
    @import "~@scss/index";

</style>