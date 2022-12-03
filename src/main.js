import { createApp } from 'vue';
import App from './App.vue';
//引入rem
import 'amfe-flexible';
//引入vant
import { Button } from 'vant'

const app = createApp(App);


app.use(Button);

app.mount('#app');



