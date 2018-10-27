<template>
  <b-container>
    <div class="b-main-content">
    <ul class="list-inline">
          <li class="list-inline-item">
            <a href="/profile">Profile</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Jobs</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Mentors</a>
          </li>
        </ul>  
  <b-container class="bv-example-row" fluid> 
    <b-row>
     <b-col > <h2><i class="fal fa-user-tie"></i> Welcome to hackohire</h2>
      <p>{{ user.username }}, Thank you for requesting the trial access.</p>
    </b-col > 
     <b-col > 
     <b-row class="my-1">
    <b-col sm="3"><label for="input-none">current title:</label></b-col>
    <b-col sm="9">
      <b-form-input id="input-none" :state="null" type="text" placeholder="current title"></b-form-input>
    </b-col>
  </b-row>
  <b-row class="my-1">
    <b-col sm="3"><label for="input-none">current company:</label></b-col>
    <b-col sm="9">
      <b-form-input id="input-none" :state="null" type="text" placeholder="current company"></b-form-input>
    </b-col>
  </b-row>
   </b-col > 
   </b-row>
        </b-container>
    </div> 
         <b-form @submit="onSubmit">
            <b-form-group
              label="companies you would like to work for :"
              label-for="input-small">
              <b-form-input 
                id="usernameInput"
                type="text"
                v-model="username"
                required
                placeholder="Enter your dream company"/>
            </b-form-group>
            <b-form-group
              label="Projects you would like to work for :"
              label-for="nameInput">
              <b-form-input 
                id="nameInput"
                type="text"
                v-model="name"
                required
                placeholder="Enter project type"/>
            </b-form-group>
            <b-form-group
              label="Title/positions you are working towards:"
              label-for="nameInput">
              <b-form-input 
                id="nameInput"
                type="text"
                v-model="name"
                required
                placeholder="Enter Title/positions"/>
            </b-form-group>
            <b-form-group
              label="2 years salary goal:"
              label-for="nameInput">
              <b-form-input 
                id="nameInput"
                type="text"
                v-model="name"
                required
                placeholder="Enter salary goals of 2 years"/>
            </b-form-group>
            <b-form-group
              label="5 years salary goal:"
              label-for="nameInput">
              <b-form-input 
                id="nameInput"
                type="text"
                v-model="name"
                required
                placeholder="Enter salary goals of 5 years"/>
            </b-form-group>
            <b-button 
              type="submit" 
              variant="primary">Submit</b-button>
          </b-form>
  </b-container> 
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            user: state => state.auth.user,
        })
    }
}
</script>
<style>
.far{
  font-size: 100px;
}
</style>


