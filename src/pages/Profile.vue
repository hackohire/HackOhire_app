<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col cols="4">
        <div class="b-form-1">
          <h2>User Profile</h2>
          <p>Fill your details.</p>
          <b-form @submit.prevent="passwordChange">
            <b-form-group label="Company Name:" label-for="currentPasswordInput">
              <b-form-input  id="currentPasswordInput" type="password"  v-model="currentPassword" required
                placeholder="Enter Company Name"/>
            </b-form-group>
            <b-form-group
              label="Position:"
              label-for="newPasswordInput">
              <b-form-input 
                id="newPasswordInput"
                type="password"
                v-model="newPassword"
                required
                placeholder="Enter Your Position"/>
            </b-form-group>
            <b-button 
              type="submit" 
              variant="primary">Submit</b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col cols="4">
        <v-alert/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from "vue"

import { mapGetters } from "vuex"
import router from "@/router"
import store from "@/store"

import Alert from "@/components/auth/Alert.vue"

Vue.component("v-alert", Alert)

export default {
  data() {
    return {
      currentPassword: "",
      newPassword: ""
    }
  },
  computed: {
    ...mapGetters("auth", ["hasAuthenticationStatus"])
  },
  methods: {
    async passwordChange() {
      await store.dispatch("auth/passwordChange", {
        currentPassword: this.currentPassword,
        newPassword: this.newPassword,
      })
      if (!this.hasAuthenticationStatus) {
        router.push("dashboard")
      }
    }
  }
}
</script>