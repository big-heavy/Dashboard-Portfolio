<script setup>
import WelcomeBannerSports from "../components/WelcomeBannerSports.vue";
import Navbar from "../components/Navbar.vue";
import WelcomeItem from "../components/WelcomeItem.vue";
import InfoTiles from "../components/InfoTiles.vue";
import SportsTiles from "../components/SportsTiles.vue";
import HappySad from "../components/HappySad.vue";
import DonutChart from "../components/DonutChart.vue";
</script>

<template>
   <main>
    <div class="column is-9">
                <Navbar />
                <WelcomeBannerSports />
                <SportsTiles />
                <DonutChart />
     </div>
  </main>
  
</template>
