<template>
    <div>
        <button @click="getFingerPrint2">getFingerPrint</button>
    </div>
</template>

<script>
    import {browser} from '../../../src/util/index.js';
    export default {
        name: "Browser",
        methods: {
            getFingerPrint2: function(){
                alert(browser.getFingerPrint());
            }
        }
    }
</script>

<style scoped>

</style>