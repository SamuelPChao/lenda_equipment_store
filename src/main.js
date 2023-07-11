import "./assets/main.scss";

import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import VeeValidate from "./includes/validation";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import VueCookies from "vue-cookies";

const app = createApp(App);

app.use(VueCookies);
app.use(createPinia());
app.use(router);
app.component("VueDatePicker", VueDatePicker);
app.use(vuetify);
app.use(VeeValidate);

app.mount("#app");
