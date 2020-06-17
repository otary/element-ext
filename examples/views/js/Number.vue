<template>
    <div>
        <el-button @click="calIntToHex">intToHex</el-button>
    </div>
</template>

<script>
    import {number} from '@/util/index.js';
    export default {
        name: "Number",
        methods: {
            calIntToHex: function () {
                this.$notify({
                    title: 'intToHex',
                    message: number.intToHex(123,5)
                });
            }
        }
    }
</script>

<style scoped>

</style>