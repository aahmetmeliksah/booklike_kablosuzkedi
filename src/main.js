import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
import AppHeader from "@/components/common/appHeader";
import appBookMarkList from "@/components/common/appBookMarkList/indexPage";

const app = createApp(App);
app.component("AppHeader", AppHeader);
app.component("appBookMarkList", appBookMarkList);
app.use(router);
app.mount("#app");
