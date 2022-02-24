<template>
  <div>
    <GChart type="LineChart" />
  </div>
  <!-- <GChart
    :settings="prop__settings__obj"
    :type="prop__type__str"
    :data="prop__data__arr"
    :options="prop__options__obj"
    :events="prop__events__obj"
    :createChart="(el, google) => new google.charts.Line(el)"
    @ready="onChartReady"
  /> -->
</template>

<script lang="ts">
import Vue from "vue";
import { GChart } from "vue-google-charts";

export default Vue.extend({
  name: "comp-chart",
  components: {
    GChart,
  },
  props: {
    prop__settings__obj: {
      type: Object,
      default: undefined,
    },
    prop__type__str: {
      type: String,
      required: true,
    },
    prop__data__arr: {
      type: Array,
      required: true,
    },
    prop__options__obj: {
      type: Object,
      required: true,
    },
    prop__events__obj: {
      type: Object,
      default: undefined,
    },
  },
  data() {
    return {
      google_charts_lib: {
        type: Object,
        default: null,
      },
    };
  },
  computed: {
    chartOptions() {
      return null;
      // if (!this.google_charts_lib) return null;
      // return this.google_charts_lib.charts.Line.convertOptions({
      //   vAxis: { format: "" },
      //   height: 500,
      //   colors: ["#d95f02"],
      //   legend: { position: "none" },
      //   trendlines: {
      //     1: {
      //       type: "linear",
      //       color: "green",
      //     },
      //   },
      // });
    },
  },
  methods: {
    onChartReady(chart: any, google: any) {
      this.google_charts_lib = google;
    },
  },
});
</script>
