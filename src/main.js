// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Vue base
import Vue from 'vue';
import VueRouter from 'vue-router';

import axios from 'axios';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

// Components
import App from './App';
import page from './components/Page';
import arexample from './components/ARexample';
import run from './components/Run';
import blocklyTest from './components/BlocklyTest';

// Utils
import base64 from 'base-64'

// Configuration
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.prototype.$axios = axios.create();
Vue.prototype.$base64 = base64

Vue.config.productionTip = false;

// Routing
const routes = [
  { path: '/', component: page },
  { path: '/run', component: run },
  { path: '/ar', component: arexample },
  { path: '/blockly', component: blocklyTest}
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App),
});
