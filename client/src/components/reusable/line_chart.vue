<template>
  <GChart
    class="comp-line-chart chart-box"
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
    prop__chart_data__arr: Array as () => Array<Array<Date | string | number>>,
  },
  data() {
    return {
      chart_lib__obj: Object as any,
    };
  },
  computed: {
    chart_options__obj(): object | null {
      if (!this.chart_lib__obj.charts) return null;
      else {
        return this.chart_lib__obj.charts.Line.convertOptions({
          vAxis: { format: "" },
          // width: "100%",
          height: "300",
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
  methods: {
    fn_handler__chart_ready__google(chart: any, google: any) {
      this.chart_lib__obj = google;
    },
  },
});
</script>

<style lang="scss">
.comp-line-chart {
  &.chart-box {
    width: 95%;
    height: 95%;
    @extend .f-box;
    @extend .f-r-CE;
    overflow: hidden;
  }
}
</style>
