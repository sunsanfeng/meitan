import { createApp } from 'vue';
import App from './App.vue';


//引入rem
import 'amfe-flexible';
//引入vant
import { Button, Icon, Search,  Card, Tab, Tabs, Stepper, NavBar, Toast} from 'vant';

import router from './router/indexRouter.js';
import './common/css/base.less';


const app = createApp(App);

app.use(router);

app.use(Button).use(Icon).use(Search).use(Card).use(Tab).use(Tabs).use(Stepper).use(NavBar);
app.use(Toast);

app.mount('#app');



