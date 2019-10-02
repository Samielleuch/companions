<template>
  <v-app>
    <v-app-bar app color="rgba(250,250,250,0.96)" class="navbar">
      <v-app-bar-nav-icon>
        <v-img
          :src="require('@/assets/Logo.png')"
          class="my-3  mx-4"
          contain
          height="40"
          @click="$router.push('Home')"
        ></v-img>
      </v-app-bar-nav-icon>
      <v-toolbar-title
        class="headline text-uppercase "
        @click="$router.push('Home')"
      >
        <span class=" logo "> Companions </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Search color="rgba(250,250,250,0.5)" elevation="0" />
      <v-spacer></v-spacer>
      <v-btn text target="_blank" @click="$router.push('Home')" outlined>
        <span class="mr-2 adopt">Adopt a companion</span>
      </v-btn>

      <v-btn text target="_blank" @click="$router.push('Register')">
        <span class="mr-2">Register</span>
      </v-btn>
      <v-btn text target="_blank" @click="$router.push('Login')">
        <span class="mr-2">Login</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer color="deep-purple darken-3" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col
          class="deep-purple darken-4 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Elleuch Sami</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Search from "./components/Search";
export default {
  name: "App",
  components: { Search },
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
  })
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");
.logo {
  color: #033500;
  font-family: "Pacifico", cursive !important;
  font-size: 35px;
}
.adopt {
  color: #066b00;
  font-size: 12px;
}
.navbar {
}
</style>
