<script>

export default {
    data() {
        return {
            imgUrl: "happy.png"
        }
    },

    methods: {
        updateFace() {
            (this.imgUrl === "happy.png") ? this.imgUrl = "sad.png" : this.imgUrl = "happy.png"
        }
    }
}

</script>

<template>
    <img @click="updateFace" :src="imgUrl" />
</template>
