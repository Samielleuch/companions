<template>
  <div>
    <v-parallax dark :src="require('@/assets/Paralax.jpg')" height="700">
      <v-row align="center" justify="center">
        <v-col cols="6">
          <h1>
            GET A COMPANION
          </h1>
          <Search />
        </v-col>
      </v-row>
    </v-parallax>
    <v-row align="center" justify="center">
      <h1 class="display-4 my-5">Browse Our Services</h1>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="9">
        <v-carousel>
          <v-carousel-item v-for="(item, i) in Services.length / 2" :key="i">
            <v-row class="fill-height" align="center" justify="center">
              <v-flex :key="j" v-for="j in 3">
                <div>
                  <v-card class="mx-auto" max-width="400" color="white">
                    <v-img
                      class="white--text"
                      height="270px"
                      :src="Services[(i + j) % 4].src"
                    >
                      <v-card-title class="align-end fill-height">{{
                        Services[(i + j) % 4].title
                      }}</v-card-title>
                    </v-img>
                    <v-card-text>
                      <span>Number 10</span><br />
                      <span class="text--primary">
                        <span>Whitehaven Beach</span><br />
                        <span>Whitsunday Island, Whitsunday Islands</span>
                      </span>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn text color="orange">
                        Explore
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>
              </v-flex>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Search from "../components/Search";
export default {
  components: { Search },
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
    ]
  })
};
</script>
<style>
.rounded {
  border-radius: 50px;
}
</style>
