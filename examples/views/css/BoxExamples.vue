<template>
    <section>
        <!-- 滚动条示例 -->
        <fieldset>
            <legend>滚动条美化</legend>
            <div style="width: 500px; height: 100px; overflow: auto;" class="czw-box-border czw-scrollbar-beautify">
                <div style="width: 2000px;height: 2000px;">
                    内容
                </div>
            </div>
        </fieldset>

        <fieldset>
            <legend>隐藏滚动条</legend>
            <div style="height: 100px; overflow: auto;" class="czw-box-border czw-scrollbar-hide">
                <div style="height: 2000px;">
                    内容
                </div>
            </div>
        </fieldset>

        <!-- 遮罩 -->
        <fieldset>
            <legend>区域遮罩</legend>
            <div style="position: relative; height: 100px;">
                <div class="czw-mask-absolute"></div>
            </div>
        </fieldset>

        <fieldset>
            <legend>全局遮罩</legend>
            <div>
                {{maskFixedHtml}}
            </div>
        </fieldset>

        <!-- 边框 -->
        <fieldset>
            <legend>七彩颜色条</legend>
            <div style="height: 5px;" class="czw-bg-colorful"></div>
        </fieldset>

        <fieldset>
            <legend>七彩边框</legend>
            <div style="border: 2px solid transparent;" class="czw-border-colorful">
                内容
            </div>
        </fieldset>

        <fieldset>
            <legend>圆框</legend>
            <div style="border: 2px solid transparent;" class="czw-border-colorful">
                内容
            </div>
        </fieldset>

        <fieldset>
            <legend>书封面效果</legend>
            <div style="width: 100px; height: 100px;" class="czw-book-cover">

            </div>
        </fieldset>
    </section>
</template>

<script>
    export default {
        name: "BoxExamples",
        data() {
            return {
                maskFixedHtml: `<div class="czw-mask-fixed"></div>`
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~@scss/index";
</style>