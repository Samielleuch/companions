<template>
  <div class="text-center">
    <v-overlay
      :value="this.$store.state.isRegisterPressed"
      light
      :dark="false"
      opacity="0.8"
    >
      <v-card
        elevation="10"
        app
        color="rgba(250,250,250,0.89)"
        outlined
        :dark="false"
      >
        <v-row>
          <v-spacer></v-spacer>
          <v-btn icon @click="setIsRegisterPressed(false)" class="mr-2">
            <v-icon>far fa-times-circle</v-icon>
          </v-btn>
        </v-row>
        <v-card-title>
          <v-row align="center" justify="center">
            <span class="display-4 text-center mb-7"> Join Us </span>
          </v-row>
        </v-card-title>

        <v-card-text>
          <v-form v-model="valid" ref="form">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="firstName"
                  :rules="nameRules"
                  outlined
                  clearable
                  rounded
                  prepend-icon="far fa-user"
                  filled
                  :counter="10"
                  label="First name*"
                  hint="example of helper text only on focus"
                  required
                  color="green"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="lastName"
                  :rules="nameRules"
                  outlined
                  clearable
                  rounded
                  prepend-icon="fas fa-user"
                  filled
                  :counter="10"
                  label="Last name*"
                  hint="example of helper text only on focus"
                  required
                  color="green"
                ></v-text-field>
              </v-col>
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
                  loading
                  required
                  color="green"
                >
                  <template v-slot:progress>
                    <v-progress-linear
                      v-if="true"
                      :value="progress"
                      :color="color"
                      absolute
                      height="9"
                    ></v-progress-linear>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  label="Do you agree to our terms of service ?"
                  hint="example of helper text only on focus"
                  required
                  color="green"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <small class="font-italic font-weight-bold "
          >* indicates required field</small
        >
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

          <v-btn color="error" class="mr-4" outlined @click="reset">
            Reset Form
          </v-btn>
        </v-card-actions>
        <a href="/home" class="overline "> Already a member? Login here </a>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import authenticationService from "../services/authenticationService";
export default {
  name: "Register",
  data: () => ({
    valid: true,
    show1: false,
    password: "",
    firstName: "",
    lastName: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    checkbox: false
  }),
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        const response = await authenticationService.register({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          pass: this.password
        });
        console.log(response.data);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    ...mapActions(["setIsRegisterPressed"])
  },
  computed: {
    progress() {
      return Math.min(100, this.password.length * 10);
    },
    color() {
      return ["error", "warning", "success"][Math.floor(this.progress / 40)];
    }
  }
};
</script>

<style scoped></style>
