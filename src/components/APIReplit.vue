<script>
export default { 
    data() {
        return {
            apiData: {},
            flag: false
        }
    },
    async mounted() {
        //Async-Await Based Way
        const response = await fetch("https://backendapisample.bigheavy.repl.co/api")
        .then(async (response) =>{
            this.apiData = await response.json()
            this.flag = true
        })
        .catch((error)=> {
                console.log('api broke down')
        })
    }
}
</script>
<template>
    <h1 v-if="flag">Some data from the api is {{ apiData }} </h1>
    <h1 v-else> Oh no our API is down </h1>
</template>