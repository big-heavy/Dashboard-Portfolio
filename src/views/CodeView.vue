<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import Navbar from "../components/Navbar.vue";
import WelcomeBannerCode from "../components/WelcomeBannerCode.vue";

import InfoTiles from "../components/InfoTiles.vue";
import EventScroller from "../components/EventScroller.vue";
import CodeClick from "../components/CodeClick.vue";
</script>

<template>
  <main>
    <div class="column is-9">
                <Navbar />
                <WelcomeBannerCode />
                <!-- <InfoTiles /> -->
                <br>
                <h1> The Below Code is from this actual dashboard ! </h1>
                <br>
                <CodeClick />
     </div>
  </main>
  
</template>
