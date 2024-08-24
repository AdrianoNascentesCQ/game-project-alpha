import { createApp } from "vue";
import { App, router }  from "./ui";

import { makeStore } from './infrastructure/store';

const app = createApp(App);

app.use(makeStore());
app.use(router);
app.mount("#app");