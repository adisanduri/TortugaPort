<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          :src="require('./assets/port2.svg')"
          width="40"
        />
        Port of Tortuga
      </div>
    </v-app-bar>

    <v-main>
      <TortugaPort/>
    </v-main>
  </v-app>
</template>

<script>
import TortugaPort from "./components/TortugaPort";

export default {
  name: 'App',
  components: {
    TortugaPort
  },
};
</script>
