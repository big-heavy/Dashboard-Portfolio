<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import Navbar from "../components/Navbar.vue";
import WelcomeBanner from "../components/WelcomeBanner.vue";
import InfoTiles from "../components/InfoTiles.vue";
import EventScroller from "../components/EventScroller.vue";
import HappySad from "../components/HappySad.vue";
import DonutChart from "../components/DonutChart.vue";
import GameAPI from "../components/GameAPI.vue";
import APICloud from "../components/APICloud.vue";
import APIReplit from "../components/APIReplit.vue";
import Prop from "../components/Prop.vue";
</script>

<template>
  <main>
    <div class="column is-6">
                <Navbar />
                <WelcomeBanner />
                <InfoTiles />
                <EventScroller />
                <Prop />
                
                
                <!-- <HappySad /> -->
                <h1> Vercel Test Change 2/28/2022 10:30 am</h1>
                <GameAPI />
                <!--<APICloud />-->
                <APIReplit />
                

     </div>
  </main>
  
</template>
