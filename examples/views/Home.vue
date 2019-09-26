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

        <fieldset>
            <legend>遮罩</legend>
            <div style="height: 100px;">
                <!--<div class="czw-mask-fixed"></div>-->
            </div>
        </fieldset>

        <div class="extend-click">sss</div>

        <czw-link>ssdfsdfsd</czw-link>




    </section>
</template>

<script>

    // import UrlExt from "@/util/UrlExt";


    export default {
        name: "Home",
        data() {
            return {
            }
        },
        components: {
            "czw-link": () => import("../../src/components/Link")
        }
    }
</script>

<style scoped lang="scss">
    @import "~@scss/index";

    .test{
        float:left;
        width: 100px;

        border: 1px solid #ccc;
    }
</style>