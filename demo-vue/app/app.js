import Vue from 'nativescript-vue';
import BottomNavigationBar from 'nativescript-bottom-navigation/vue';

import Home from './components/Home';

Vue.use(BottomNavigationBar);

new Vue({
    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home,
    },
}).$start();
