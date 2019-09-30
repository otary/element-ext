<template>

    <section>

        <fieldset>
            <legend>默认</legend>
            <czw-marquee width="200px" height="150px" class="box-border">
                <div>11111</div>
                <div>2222</div>
                <div>3333</div>
                <div>4444</div>
                <div>5555</div>
                <div>6666</div>
                <div>7777</div>
                <div>8888</div>
                <div>999</div>
                <div>0000</div>
            </czw-marquee>
        </fieldset>

        <fieldset>
            <legend>向下滚动</legend>
            <czw-marquee width="200px" height="150px" direction="down" class="box-border">
                <div>11111</div>
                <div>2222</div>
                <div>3333</div>
                <div>4444</div>
                <div>5555</div>
                <div>6666</div>
                <div>7777</div>
                <div>8888</div>
                <div>9999</div>
                <div>0000</div>
            </czw-marquee>
        </fieldset>


        <fieldset>
            <legend>从左往右</legend>
            <czw-marquee width="150px" height="60px" direction="left" class="box-border">
                <div class="item">11111</div>
                <div class="item">222</div>
                <div class="item">33333</div>
                <div class="item">4444</div>
                <div class="item">55555</div>
                <div class="item">66666</div>
                <div class="item">7777</div>
                <div class="item">8888</div>
            </czw-marquee>
        </fieldset>

        <fieldset>
            <legend>从右往左</legend>
            <czw-marquee width="150px" height="60px" direction="right" class="box-border">
                <div class="item">11111</div>
                <div class="item">222</div>
                <div class="item">33333</div>
                <div class="item">4444</div>
                <div class="item">55555</div>
                <div class="item">66666</div>
                <div class="item">7777</div>
                <div class="item">8888</div>
            </czw-marquee>
        </fieldset>

        <fieldset>
            <legend>平滑</legend>
            <czw-marquee width="200px" height="150px" :scroll-amount="150" :scroll-delay="5000" :animate-speed="5000" class="box-border">
                <div>11111</div>
                <div>2222</div>
                <div>3333</div>
                <div>4444</div>
                <div>5555</div>
                <div>6666</div>
                <div>7777</div>
                <div>8888</div>
                <div>999</div>
                <div>0000</div>
            </czw-marquee>
        </fieldset>
    </section>
</template>

<script>
    export default {
        name: "MarqueeExamples",
        components: {
            "czw-marquee": () => import("../../src/components/Marquee")
        }
    }
</script>

<style scoped lang="scss">
    .box-border {
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .item {
        float: left;
        width: 50px;
        padding: 5px;
        margin: 5px;
        border: 1px solid red;
    }
</style>