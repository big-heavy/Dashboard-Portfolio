<script>

export default {
       
    data() {
        return {
            apiData: {}
        }
    },
    
    async mounted() {

        //Async-Await Based Way
        const response = await fetch("https://run.mocky.io/v3/0c29e908-a50d-4152-a381-ae1a59f5959b")
        this.apiData = await response.json()

    }

}

</script>

<template>
    <h1>Some data from the api is {{ apiData.game }} in {{ apiData }}!</h1>
</template>