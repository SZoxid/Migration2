import "./assets/main.css";

import { createApp } from "vue";
// import { createPinia } from "pinia";

import App from "./App.vue";
// import router from "./router";

const app = createApp(App);

// app.use(createPinia());
// app.use(router);

app.mount("#app");

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHome);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");