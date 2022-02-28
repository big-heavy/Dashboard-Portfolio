<script>
export default {
    data() {
        return {
            imgUrl: "APIcode.jpg"
        }
    },
    methods: {
        updateCode() {
            (this.imgUrl === "APIcode.jpg") ? this.imgUrl = "graphChart.jpg" : this.imgUrl = "APIcode.jpg"
        }
    }
}
</script>
<template>
    <img @click="updateCode" :src="imgUrl" />
</template>