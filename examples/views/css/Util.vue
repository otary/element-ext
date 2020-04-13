<template>
    <section>
        <fieldset>
            <legend>三角形</legend>
            <div class="czw-triangle-left"></div>
            <div class="czw-triangle-top"></div>
            <div class="czw-triangle-bottom"></div>
            <div class="czw-triangle-right"></div>

            <br>

            <div class="czw-triangle-right-4"></div>
            <div class="czw-triangle-right-6"></div>
            <div class="czw-triangle-right-8"></div>
            <div class="czw-triangle-right-10"></div>
        </fieldset>

        <fieldset>
            <legend>顶部标签</legend>

            <div style="width: 200px; height: 200px; border: 1px solid #ccc; position: relative;">
                <div class="czw-top-tag">热</div>
            </div>

        </fieldset>

        <fieldset>
            <legend>小点</legend>

            <div>
                <a style="display: inline-block; height: 32px; line-height: 32px;">
                    <i class="czw-dot">&nbsp;&nbsp;主题:</i> 测试下内容
                </a>
                <a style="display: inline-block; height: 32px; line-height: 32px;">
                    <i class="czw-dot">&nbsp;&nbsp;主题2</i>
                </a>
                <a>
                    <i class="czw-dot">&nbsp;&nbsp;主题3</i>
                </a>
            </div>
        </fieldset>
    </section>
</template>

<script>
    export default {
        name: "Util"
    }
</script>

<style scoped lang="scss">
    @import "~@scss/index";

</style>