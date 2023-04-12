import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
import myHead from './components/myHead.js';
import main from "./main.js";

let app = createApp(main);
app.component(myHead.name, myHead);


app.mount("#app");