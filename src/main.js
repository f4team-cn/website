import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import {inject} from '@vercel/analytics';

inject({
    debug: process.env.NODE_ENV === 'development',
});
createApp(App).mount('#app');
