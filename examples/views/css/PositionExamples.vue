<template>
    <section>
        <fieldset>
            <legend>block - 水平居中</legend>
            <div style="height: 50px;">
                <div style="width: 200px;" class="czw-box-border czw-center-block">
                    block
                </div>
            </div>
        </fieldset>

        <fieldset>
            <legend>block/inline - 垂直居中</legend>

            <!-- block -->
            <div style="position: relative; height: 100px;">
                <div class="czw-box-border czw-middle">
                    block
                </div>
            </div>

            <!-- inline -->
            <div style="position: relative; height: 100px;">
                <span class="czw-box-border czw-middle">
                    inlne
                </span>
            </div>
        </fieldset>

        <fieldset>
            <legend>block/inline - 水平垂直居中</legend>

            <!-- block -->
            <div style="position: relative; height: 50px;">
                <div class="czw-box-border czw-center-middle">
                    block
                </div>
            </div>

            <!-- inline -->
            <div style="position: relative; height: 50px;">
                <span class="czw-box-border czw-center-middle">
                    inline
                </span>
            </div>
        </fieldset>

        <fieldset>
            <legend>block/inline - 水平居中</legend>

            <!-- block -->
            <div style="position: relative; height: 100px;">
                <div class="czw-box-border czw-center">
                    block
                </div>
            </div>

            <!-- inline -->
            <div style="position: relative; height: 100px;">
                <span class="czw-box-border czw-center">
                    inline
                </span>
            </div>
        </fieldset>

    </section>
</template>

<script>
    export default {
        name: "PositionExamples"
    }
</script>

<style scoped lang="scss">
    @import "~@scss/index";
</style>