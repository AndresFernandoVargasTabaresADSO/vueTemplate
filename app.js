import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
import myButon from './components/myButon.js';
import myStyle from './components/myStyle.js';
import myText from './components/myText.js';
import myImagenes from './components/myImagenes.js'
import main from "./main.js";

let app = createApp(main);
app.component(myButon.name, myButon);
app.component(myImagenes.name, myImagenes)


app.mount("#app");