import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style.css";
import appHeader from "@/components/includes/appHeader";
import appBookmarkList from "@/components/includes/appBookmarkList/BookmarkList";
import { appAxios } from "@/utils/appAxios";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);
app.component("appHeader", appHeader);
app.component("appBookmarkList", appBookmarkList);
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");
