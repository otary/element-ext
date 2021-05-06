<template>
    <section>
        <p v-for="(c, index) in chars" :key="index" :class="'text-animated-word text__' + c.effect + '__' + c.effectSpeed">
            {{c.char}}
        </p>
    </section>
</template>

<script>
    export default {
        name: 'TextAnimated',
        props: {
            content: {
                type: String
            },
            effect: {
                type: String,
                default() {
                    return 'fade-in-down-big'
                }
            },
            effectSpeed: {
                type: String,
                default() {
                    return 'fast'
                }
            },
            speed: {
                type: Number,
                default() {
                    return 60
                }
            }
        },
        data() {
            return {
                timer: null,
                chars: [],
                randomEffects: ['fade-in-down-big', 'fade-in-right-big', 'fade-in-left-big', 'fade-in-up-big']
            }
        },
        methods: {
            getSlotText: function () {
                if (this.$slots.default) {
                    return this.$slots.default[0].text
                }
                return ''
            },
            renderContent: function () {
                if (this.content) {
                    let cindex = 0
                    const _chars = Array.from(this.content)

                    // 清空内容、定时器
                    this.chars = [];
                    if (this.timer) {
                        clearInterval(this.timer)
                    }

                    this.timer = setInterval(() => {
                        let _effect = this.effect;
                        if (this.effect == 'random') {
                            let rn = Math.floor(Math.random() * this.randomEffects.length);
                            _effect = this.randomEffects[rn];
                        }

                        this.chars.push({
                            char: _chars[cindex],
                            effect: _effect,
                            effectSpeed: this.effectSpeed
                        })

                        if (_chars.length <= ++cindex) {
                            clearInterval(this.timer)
                        }
                    }, this.speed)
                }
            }
        },
        watch: {
            content: {
                immediate: true,
                handler() {
                    this.renderContent();
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    @function formatSpeed($speed) {
        @if ($speed =='slow') {
            @return 2s;
        } @else if ($speed == 'fast') {
            @return 800ms;
        } @else if ($speed == 'slower') {
            @return 3s;
        } @else if ($speed == 'faster') {
            @return 500ms;
        }
        @return 1s;
    }


    /deep/ .text-animated-word {
        display: inline-block;
    }

    @each $speed in slow, slower, fast, faster {
        /deep/ .text__fade-in-right__#{$speed} {
            animation-name: fadeInRight;
            animation-duration: formatSpeed(#{$speed});
        }

        /deep/ .text__fade-in-down__#{$speed} {
            animation-name: fadeInDown;
            animation-duration: formatSpeed(#{$speed});
        }

        /deep/ .text__fade-in-left-big__#{$speed} {
            animation-name: fadeInLeftBig;
            animation-duration: formatSpeed(#{$speed});
        }

        /deep/ .text__fade-in-down-big__#{$speed} {
            animation-name: fadeInDownBig;
            animation-duration: formatSpeed(#{$speed});
        }

        /deep/ .text__fade-in-right-big__#{$speed} {
            animation-name: fadeInRightBig;
            animation-duration: formatSpeed(#{$speed});
        }

        /deep/ .text__fade-in-up-big__#{$speed} {
            animation-name: fadeInUpBig;
            animation-duration: formatSpeed(#{$speed});
        }
    }
</style>
