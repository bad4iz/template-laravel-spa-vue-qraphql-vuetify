require('./bootstrap');

import Vue from 'vue'
import VueApollo from 'vue-apollo'

Vue.use(VueApollo)

import router from './router';
import App from './App.vue';


import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://larave-template-vue-qraphql/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})


const app = new Vue({
    router,
    el: '#app',
    apolloProvider,
    render: h => h(App)
});
