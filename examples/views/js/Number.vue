<template>
    <div>
        <button @click="calIntToHex">intToHex</button>
    </div>
</template>

<script>
    import {number} from '../../../src/util/index.js';
    export default {
        name: "Number",
        methods: {
            calIntToHex: function () {
                alert(number.intToHex(123,5));
            }
        }
    }
</script>

<style scoped>

</style>