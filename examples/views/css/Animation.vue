<template>
    <section>
        <fieldset>
            <legend>点扩散</legend>
            <div class="pulsate">

            </div>

            <br>

            <div class="my-pulse">
                hover扩散
            </div>
        </fieldset>
        <fieldset>
            <legend>hover动画面板</legend>
            <el-alert type="success">class="czw-upward-card"</el-alert>
            <div class="czw-upward-card" style="width: 100px; height: 100px; border: 1px solid #ccc;">
            </div>
        </fieldset>

        <fieldset>
            <legend>hover效果</legend>
            <div>
                <el-alert type="success">class="czw-grayscale czw-grayscale__hover"</el-alert>
                <a class="czw-grayscale czw-grayscale__hover"
                    style="display: inline-block; width: 400px; height: 300px; background: url(https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF); background-size: cover;">
                </a>
            </div>

            <br>

            <div>
                <el-alert type="success">hover背景变淡（opacity）</el-alert>
                <div class="hover-button">
                    测试按钮
                </div>
            </div>
        </fieldset>

        <fieldset>
            <legend>动态下划线</legend>

            <a class="czw-animation-underline">
                 从左到右的动态下划线
            </a>

            <a class="czw-animation-underline__scale">
                中间到两端的动态下划线
            </a>
        </fieldset>
    </section>
</template>

<script>
    export default {
        name: "Animation"
    }
</script>

<style lang="scss">
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 #409eff;
        }

        80% {
            box-shadow:0 0 0 20px #fff;
        }
    }
</style>

<style scoped lang="scss">
    @import "~@scss/index";

    .pulsate {
        width: 10px;
        height: 10px;
        background-color: #ccc;
        border-radius: 50%;

        animation: czw-pulsate-2 1s ease-out infinite;
    }

    .my-pulse:hover {
        -webkit-transition-duration: .4s;
        transition-duration: .4s;
        -webkit-animation: pulse 1s;
        animation: pulse 1s;
    }


    .hover-button {
        padding: 10px;
        border: 1px solid #ddd;
        background-color: orange;

        &:hover {
            opacity: .7;
            transition: .3s;
        }
    }
</style>
