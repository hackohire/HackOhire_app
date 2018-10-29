<template>
  <div class="ProfileDatas">
    <h1>User-profile</h1>
    <div v-if="ProfileDatas.length" class="table-wrap">
     <div>
       <router-link v-bind:to="{ name: 'dashboard' }" class="">gotodashboard</router-link>
     </div>
      <table>
        <tr v-for="ProfileData in ProfileDatas" :key="ProfileData.id">
          <td>{{ ProfileData.companies }}</td>
          <td>{{ ProfileData.projects }}</td>
          <td>{{ ProfileData.positions }}</td>
          <td>{{ ProfileData.two_years_goal }}</td>
          <td>{{ ProfileData.five_years_goal}}</td>
        </tr>
      </table>
    </div>
    <div v-else>
  <h1>please go to dashboard</h1> <br /><br />
     
    </div>
  </div>
</template>

<script>
import PostsService1 from '@/services/PostsService1'
export default {
  name: 'ProfileDatas',
  data () {
    return {
      ProfileDatas: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService1.fetchPosts()
      this.ProfileDatas = response.data.ProfileDatas
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>