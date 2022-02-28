<script>
export default {
    data() {
        return {
            apiData: {}
        }
    },
    async mounted() {
        //Async-Await Based Way
        const response = await fetch("https://backendapisample.bigheavy.repl.co/api")
        .then(async (response) =>{
            this.apiData = await response.json()
        })
        .catch((error)=> {
                console.log('api broke down')
        })
    }
}
</script>
<template>
    <h1>Some data from the api is {{ apiData }} </h1>
</template>