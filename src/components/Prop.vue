<script>

export default {
    
    props: {
        zipCode: String
    },
    
    data() {
        return {
            zipCodeTemp: 0
        }
    },
    
    async mounted() {

        //Async-Await Based Way
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?zip=16602,us&appid=431d09d780e3c761a8589f7bd5273fe0&units=imperial")
        const data = await response.json()
        this.zipCodeTemp = data.weather[0].main
    
    }

}

</script>

<template>
    <div class="column is-6">
        <header class="card-header">
            <p class="card-header-title"> {{zipCodeTemp}} </p>
            <a href="#" class="card-header-icon" aria-label="more options"></a>
            <span class="icon"> 
            <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
        </header>
    </div>
</template>