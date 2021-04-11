<template>
  <v-app-bar
    app
    :clipped-left="getPrimaryDrawer.clipped"
    absolute
    flat
    class="header"
    elevate-on-scroll
  >
    <v-app-bar-nav-icon
      v-if="getPrimaryDrawer.type !== 'permanent'"
      @click.stop="setPrimaryDrawerAction({ model: !getPrimaryDrawer.model })"
    />
    <v-spacer />
    <v-toolbar-title class="title" @click="()=>$router.push({ path: '/' })"
      ><h2>

        {{ $appConfig.appName }}

    </h2>
    </v-toolbar-title>

    <v-spacer />

    <v-list dense class="menu">
            <v-list-item to="/posts">
              <v-list-item-content>
                <v-list-item-title>Посты</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

      <v-list-item>
        <v-menu offset-y transition="slide-y-transition" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-list-item-content>
              <v-list-item-title v-bind="attrs" v-on="on">
                Философия
                <v-icon> mdi-text </v-icon>
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list dense>
            <v-list-item
              href="https://bad4iz.github.io/memento-mori-calendar/"
              target="_blank"
            >
              <v-list-item-title>Memento Mori</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>
    </v-list>
  </v-app-bar>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';

  const {
    mapGetters: mapGettersAppSettings,
    mapActions: mapActionsAppSettings,
  } = createNamespacedHelpers('appSettings');

  export default {
    name: 'AppBar',
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
  header.v-toolbar.v-app-bar.header {
    background-color: inherit;
  }

  .menu {
    display: flex;
  }

  .title {
    cursor: pointer;
  }
</style>
