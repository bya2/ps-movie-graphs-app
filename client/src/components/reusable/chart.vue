<template>
  <div>
    <GChart
      :type="prop__type__str"
      :data="prop__data__arr"
      :options="prop__options__obj"
    />
  </div>
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
    prop__type__str: String,
    prop__data__arr: Array,
    prop__options__obj: Object,
  },
});
</script>
