<template>
  <div>
    <v-overlay
      :value="this.$store.state.isLoginPressed"
      light
      dark="false"
      opacity="0.8"
    >
      <v-card
        elevation="10"
        app
        color="rgba(250,250,250,0.89)"
        outlined
        dark="false"
      >
        <v-row>
          <v-spacer></v-spacer>
          <v-btn icon @click="setIsLoginPressed(false)" class="mr-2">
            <v-icon>far fa-times-circle</v-icon>
          </v-btn>
        </v-row>
        <v-card-title>
          <v-row align="center" justify="center">
            <span class="display-4 text-center mb-7"> Login </span>
          </v-row>
        </v-card-title>

        <v-card-text>
          <v-form v-model="valid" ref="form">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  outlined
                  rounded
                  prepend-icon="fas fa-at"
                  filled
                  clearable
                  label="E-mail*"
                  hint="example of helper text only on focus"
                  required
                  color="green"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                  :type="show1 ? 'text' : 'password'"
                  label="Password*"
                  hint="use an Upper case Letter and symboles for a stronger password"
                  outlined
                  prepend-icon="fas fa-lock"
                  clearable
                  filled
                  @click:append="show1 = !show1"
                  rounded
                  required
                  color="green"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <small class="font-italic font-weight-bold "> Forgot Password ? </small>
        <v-card-actions>
          <div class="flex-grow-1"></div>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            outlined
          >
            Validate
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  methods: {
    ...mapActions(["setIsLoginPressed"])
  }
};
</script>

<style scoped></style>
