import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
import myButon from './components/myButon.js';
import main from './main.js';

let app = createApp(main);
app.component(myButon.name, myButon);


app.mount("#app");