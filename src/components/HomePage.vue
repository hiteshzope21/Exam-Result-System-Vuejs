<template>
  <div>
    <div class="head  bg-success ">
    <h1 class="text-center p-2">Exam Result System</h1>
    

    </div>
    <div class="container text-center">

      <div class="view-result">
        <div>
          <input type="text" class="form-control enroll-value" placeholder="enter enrollment number" />
        </div>
        <div>
          <button class="ml-5 btn btn-primary mb-3">View Result</button>
        </div>
      </div>
      <div class="register">
        <router-link to="/facultysignup" class="link-plain text-decoration-none m-2 text-white">
          faculty-signup
        </router-link>
        <router-link to="/facultylogin" class="link-plain text-decoration-none m-2 text-white">
          faculty-login
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.head {
  height: 80px;
  
}
.enroll-value {
  margin: 30px auto;
}
.container {
  height: 300px;
  margin-top: 100px;
  width: 30%;
  background:rgb(99, 177, 187);
  padding : 20px;
}
hr {
  width: 80%;
  height: 5px;
  margin-left: auto;
  margin-right: auto;
  background-color: hsl(200, 59%, 58%);
  border: 0 none;
}
</style>