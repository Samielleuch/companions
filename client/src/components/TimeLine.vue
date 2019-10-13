<template>
  <v-timeline>
    <v-timeline-item
      v-for="(time, i) in times"
      :key="i"
      :color="time.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${time.color}--text`"
          v-text="time.time"
        ></span>
      </template>
      <v-card :color="time.color" dark>
        <v-card-title>
          <div class="py-4">
            <h2 :class="` display-2 font-weight-light`">
              {{ time.content.title }}
            </h2>
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="white text--primary">
          {{ time.content.content }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: "TimeLine",
  props: {
    times: Array
  }
};
</script>

<style scoped></style>
