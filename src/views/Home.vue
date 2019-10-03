<template>
  <div>
    <v-parallax
      dark
      :src="require('@/assets/paralax.jpg')"
      height="700"
      class="my-0 py-0"
    >
      <v-row align="center" justify="start" class="ml-12">
        <v-col cols="4">
          <h1 class="display-3 ,  font-weight-light">
            Find The Perfect Companion for you
          </h1>
          <!-- the Search Bar-->
          <v-row>
            <v-col cols="10" class="mt-4 mb-2">
              <Search color="rgba(250,250,250,0.5)" elevation="5" />
            </v-col>
          </v-row>
          <!-- chips links -->
          <v-row>
            <v-col cols="12">
              Popular :
              <v-chip
                text
                target="_blank"
                @click="$router.push('Home')"
                outlined
              >
                <span class="mr-2 adopt">Cats</span>
              </v-chip>
              <v-chip
                text
                target="_blank"
                @click="$router.push('Home')"
                outlined
              >
                <span class="mr-2 adopt">Dogs</span>
              </v-chip>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
    <!--The Sponsers Bar-->
    <v-row align="center">
      <v-col cols="12" align="center" class="pt-0">
        <v-card class="mt-0">
          <img
            :src="require('@/assets/sponsors/paypal.png')"
            alt=""
            class="mx-4"
          />
          <img
            :src="require('@/assets/sponsors/MIT.png')"
            alt=""
            class="mx-4"
          />
          <img
            :src="require('@/assets/sponsors/google.png')"
            alt=""
            class="mx-4"
          />
        </v-card>
      </v-col>
    </v-row>
    <!--Header Title -->
    <v-row align="center" justify="center">
      <v-col cols="11" class="pb-0">
        <h1 class="display-2 font-weight-light mt-12 mb-0">
          Professional care and services
        </h1>
      </v-col>
    </v-row>
    <!-- The Card Caroussel Content-->
    <v-row align="center" justify="center">
      <v-col cols="11" class="pt-0 mt-0">
        <Cardscaroussel :Service="Services" :Cardnb="4" />
      </v-col>
    </v-row>
    <!-- The Window Component for Reviews! -->
    <v-row align="center" justify="center">
      <v-col cols="11" class="pt-0 mt-0">
        <WindowCaroussel :length="length" :window="Window" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Search from "../components/Search";
import Cardscaroussel from "../components/Cardscaroussel";
import WindowCaroussel from "../components/WindowCaroussel";
export default {
  components: { Search, Cardscaroussel, WindowCaroussel },
  data: () => ({
    index: 0,

    Services: [
      {
        title: "PetCare and Health experts",
        src:
          "https://d9np3dj86nsu2.cloudfront.net/image/8baf6e43ca20e9331d0b9b5c30a612f4"
      },
      {
        title: "Welcoming Comunity",
        src:
          "https://d9np3dj86nsu2.cloudfront.net/image/8baf6e43ca20e9331d0b9b5c30a612f4"
      },
      {
        title: "Healthy Animals",
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        title: "Cruelty Free",
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      }
    ],
    Window: 0,
    length: 3
  })
};
</script>
<style></style>
