<template>
  <div>
    <v-row align="center" class="ml-5">
      <v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
        <v-item
          v-for="n in length"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <div>
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </div>
        </v-item>
      </v-item-group>

      <v-col cols="11">
        <v-window v-model="window" class="elevation-1" continuous vertical>
          <v-window-item v-for="n in Windowcontent.length" :key="n">
            <v-card flat>
              <v-card-text>
                <v-row class="mb-4" align="center">
                  <strong class=" display-2">
                    {{ Windowcontent[n - 1].Title }}
                  </strong>
                  <div class="flex-grow-1"></div>
                  <v-btn icon>
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </v-row>
                <v-row>
                  <v-col cols="6" justify="center">
                    <p class="body-1">
                      {{ Windowcontent[n - 1].content }}
                    </p>
                    <v-btn text color="orange">
                      Read More
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      :src="Windowcontent[n - 1].src"
                      max-height="700"
                      max-width="700"
                    >
                    </v-img>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "WindowCaroussel",
  data: () => ({}),
  props: { length: String, window: String, Windowcontent: Array },
  created() {
    setInterval(() => {
      if (++this.window >= this.length) this.window = 0;
    }, 15000);
  }
};
</script>

<style scoped></style>
