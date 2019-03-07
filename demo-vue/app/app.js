import Vue from "nativescript-vue";
import BottomNavigation from "nativescript-bottom-navigation/vue";

import Home from "./components/Home";

Vue.use(BottomNavigation);

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
