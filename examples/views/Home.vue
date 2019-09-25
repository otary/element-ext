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


        <czw-marquee width="200px" height="150px">
            <div>aaaaaaaa</div>
            <div>bbbbbb</div>
            <div>ccccc</div>
            <div>ccccc</div>
            <div>ccccc</div>
            <div>ccccc</div>
            <div>ccccc</div>
            <div>dddddd</div>
            <div>eeee</div>
            <div>ccccc</div>
            <div>fffff</div>
            <div>ccccc</div>
            <div>ggggggg</div>
            <div>ccccc</div>
        </czw-marquee>

        <czw-marquee width="200px" height="150px" direction="down" style="border: 1px solid rebeccapurple;">
            <div>aaaaaaaa</div>
            <div>bbbbbb</div>
            <div>ccccc</div>
            <div>ccccc</div>
            <div>ccccc</div>
            <div>ccccc</div>
            <div>ccccc</div>
            <div>dddddd</div>
            <div>eeee</div>
            <div>ccccc</div>
            <div>fffff</div>
            <div>ccccc</div>
            <div>ggggggg</div>
            <div>ccccc</div>
        </czw-marquee>


        <czw-marquee width="150px" height="150px" direction="left" style="border: 1px solid red;">
            <div style="width:600px;height: 150px;">

                <div class="test">aaaaaaaa</div>
                <div class="test">bbbbbb</div>
                <div class="test">ccccc</div>
                <div class="test">ccccc</div>
                <div class="test">ccccc</div>
                <div class="test">ccccc</div>
                <div class="test">ccccc</div>
                <div class="test">dddddd</div>
                <div class="test">eeee</div>
                <div class="test">ccccc</div>
                <div class="test">fffff</div>
                <div class="test">ccccc</div>
                <div class="test">ggggggg</div>
                <div class="test">ccccc</div>
            </div>
        </czw-marquee>

    </section>
</template>

<script>

    // import UrlExt from "@/util/UrlExt";


    export default {
        name: "Home",
        data() {
            return {
                lists: [
                    "连雨不知春去", "一晴方觉夏"
                ]
            }
        },
        components: {
            "czw-link": () => import("../../src/components/Link"),
            "czw-marquee": () => import("../../src/components/Marquee")
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