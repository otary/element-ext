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
                <div class="czw-mask-absoulte"></div>
            </div>
        </fieldset>


        <czw-link>ssdfsdfsd</czw-link>


        <div class="box-shadow">
            test
        </div>

        <div class="box-hover">

            aaaaa
        </div>

        <div class="box-hover2">

            bbb
        </div>

        <div class="test2"></div>

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

    .test2 {
        @include triangle(left, 8px);
    }


    .box-shadow {
        box-shadow: 0px 14px 26px 0px rgba(0, 0, 0, 0.1);
    }

    // 盒子 Hover
    .box-hover {
        // box-shadow: 0px 1px 2px 0px rgba(84, 107, 107, .4);
        transition: all .2s linear;

        &:hover {
            box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
            transform: translate3d(0, -2px, 0);
        }
    }

    .box-hover2 {
        transition: transform .5s ease;

        &:hover {
            transform: translateX(10px);
        }
    }

</style>