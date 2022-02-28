<script>
import { defineComponent } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: 'Home',
  components: { DoughnutChart },
  setup() {
    const testData = {
      labels: ['Spent', 'Won', 'Placed', 'Hit'],
      datasets: [
        {
          data: [34, 28, 34, 28],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    };
    return { testData };
  },
});
</script>
<template>
    <DoughnutChart :chartData="testData" />
</template>