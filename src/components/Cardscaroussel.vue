<template>
  <div>
    <v-carousel continuous="true" hide-delimiter-background="true">
      <v-carousel-item v-for="(item, i) in Service.length / 2" :key="i">
        <v-row class="fill-height" align="center" justify="center">
          <v-flex :key="j" v-for="j in Cardnb">
            <div>
              <v-card class="mx-auto" max-width="300" color="white">
                <v-img
                  class="white--text"
                  height="270px"
                  :src="Service[(i + j) % 4].src"
                >
                  <v-card-title class="align-end fill-height">{{
                    Service[(i + j) % 4].title
                  }}</v-card-title>
                </v-img>
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
  </div>
</template>

<script>
export default {
  name: "Card",
  props: { Service: Array, Cardnb: Number }
};
</script>

<style scoped></style>
