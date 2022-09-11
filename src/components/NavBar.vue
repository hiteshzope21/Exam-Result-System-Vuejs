<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link to="/faculty" class="navbar-brand">
        <i class="fa fa-2x fa-home"> </i> <span class="h4">FacultyHome</span>
      </router-link>

      <button @click='logout' class="text-decoration-none btn">Logout</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NAvBar',

  methods: {
    logout() {
        console.log("button click")
      console.log(localStorage.clear());
      this.$router.replace("/");
    },
  },
};
</script>

<style>
</style>