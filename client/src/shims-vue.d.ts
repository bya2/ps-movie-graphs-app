declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue-google-charts" {
  import VueGoogleCharts, { GChart } from "vue-google-charts";
  export default VueGoogleCharts;
  export { GChart };
}
