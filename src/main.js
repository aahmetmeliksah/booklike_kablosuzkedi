import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
import AppHeader from "@/components/common/appHeader";
import appBookMarkList from "@/components/common/appBookMarkList/indexPage";
import { appAxios } from "./utils/appAxios";

const app = createApp(App);
app.component("AppHeader", AppHeader);
app.component("appBookMarkList", appBookMarkList);
app.use(router);
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");
