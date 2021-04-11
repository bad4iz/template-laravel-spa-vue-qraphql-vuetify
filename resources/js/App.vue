<template>
        <v-app>
            <NavigationDrawer />

            <AppBar />

            <v-main>
        <p>
            <router-link :to="{ name: 'home' }">Home</router-link> |
            <router-link :to="{ name: 'hello' }">Hello World</router-link> |
            <router-link :to="{ name: 'hello-apollo' }">Hello Apollo</router-link>
        </p>

                <v-container fluid>
                    <router-view />
                </v-container>
            </v-main>
            <v-footer :inset="getFooter.inset" app>
                <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
            </v-footer>
        </v-app>

</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import AppBar from './components/system/AppBar';
import NavigationDrawer from './components/system/NavigationDrawer';

const {
    mapGetters: mapGettersAppSettings,
    mapActions: mapActionsAppSettings,
} = createNamespacedHelpers('appSettings');

export default {
    name: 'App',
    components: {
        NavigationDrawer,
        AppBar,
    },
    data: () => ({}),
    methods: {
        ...mapActionsAppSettings([
            'toggleDarkAction',
            'setPrimaryDrawerAction',
            'setFooterAction',
        ]),
    },
    computed: {
        ...mapGettersAppSettings([
            'getDark',
            'getDrawers',
            'getPrimaryDrawer',
            'getFooter',
        ]),
    },
};
</script>

<style scoped>

</style>
