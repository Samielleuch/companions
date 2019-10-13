<template>
  <div class="limitHeight">
    <v-carousel
      continuous="true"
      hide-delimiter-background="true"
      class="mt-0 pt-0 mb-3 pb-0 limitHeight "
    >
      <v-carousel-item
        v-for="(item, i) in Service.length / 2"
        :key="i"
        class="mt-0 pt-0 mb-3 pb-0 limitHeight"
      >
        <v-row
          class=" mt-5 pt-0 mb-3 pb-0 limitHeight"
          align="center"
          justify="center"
        >
          <v-flex
            :key="j"
            v-for="j in Cardnb"
            class="mt-0 pt-0 mb-3 pb-0 limitHeight"
          >
            <div class="mt-0 pt-0 mb-3 pb-0 limitHeight">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card class="mx-auto" max-width="370" color="white">
                    <v-img
                      class="white--text"
                      height="300px"
                      :src="Service[(i + j) % Cardnb].src"
                      contain
                    >
                      <v-card-title class="align-end fill-height">{{
                        Service[(i + j) % Cardnb].title
                      }}</v-card-title>
                    </v-img>
                    <v-row align="center" justify="center">
                      <v-rating
                        v-model="Service[(i + j) % Cardnb].rating"
                        color="green darken-3"
                        background-color="grey darken-1"
                        half-increments
                        hover
                      ></v-rating>
                    </v-row>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="#036358">
                        <v-btn :href="Service[(i + j) % Cardnb].src">
                          Download Now
                        </v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </template>
              </v-hover>
            </div>
          </v-flex>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: { Service: Array, Cardnb: Number }
};
</script>

<style scoped>
.limitHeight {
  height: 400px !important;
}
</style>
