<template>
    <section>


        <!-- 滚动条示例 -->
        <fieldset>
            <legend>滚动条美化</legend>
            <div style="height: 100px; overflow: auto;" class="czw-border czw-scrollbar-beautify">
                <div style="height: 2000px;">
                    内容
                </div>
            </div>
        </fieldset>

        <fieldset>
            <legend>隐藏滚动条</legend>
            <div style="height: 100px; overflow: auto;" class="czw-border czw-scrollbar-hide">
                <div style="height: 2000px;">
                    内容
                </div>
            </div>
        </fieldset>


        <czw-link>ssdfsdfsd</czw-link>

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

<style scoped lang="scss">
    @import "~@scss/index";
</style>