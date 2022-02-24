<template>
  <GChart
    class="comp-line-chart line-chart"
    :settings="{ packages: ['line'] }"
    type="LineChart"
    :data="prop__chart_data__arr"
    :options="chart_options__obj"
    :events="chart_events__obj"
    :createChart="(el, google) => new google.charts.Line(el)"
    :resizeDebounce="500"
    @ready="(chart, google) => fn_handler__chart_ready__google(chart, google)"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { GChart } from "vue-google-charts";

export default Vue.extend({
  name: "comp-line-chart",
  components: {
    GChart,
  },
  props: {
    prop__chart_data__arr: Array as () => Array<Array<string | number>>,
  },
  data() {
    return {
      chart_lib__obj: Object as any,
    };
  },
  methods: {
    fn_handler__chart_ready__google(chart: any, google: any) {
      this.chart_lib__obj = google;
    },
  },
  computed: {
    chart_options__obj(): object | null {
      if (!this.chart_lib__obj.charts) return null;
      else {
        return this.chart_lib__obj.charts.Line.convertOptions({
          vAxis: { format: "" },
          height: 280,
          colors: ["#d95f02"],
          legend: { position: "none" },
          trendlines: {
            0: {
              type: "linear",
              color: "green",
            },
          },
        });
      }
    },
    chart_events__obj(): object | null {
      return null;
    },
  },
});
</script>

<style lang="scss"></style>
