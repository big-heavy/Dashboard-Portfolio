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
</script>

<template>
  <main>
    <div class="column is-9">
                <Navbar />
                <WelcomeBanner />
                <InfoTiles />
                <EventScroller />
                <!-- <HappySad /> -->
               
                <GameAPI />
                <!--<APICloud />-->
                <APIReplit />

     </div>
  </main>
  
</template>
