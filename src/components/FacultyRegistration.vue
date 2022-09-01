<template>
  <div>
    <div class="container signupPage bg-info my-3">
      <h1 class="text-center text-white">SIGNUP</h1>
      <hr />
      <form  @submit.prevent="handleSignup">
        <div class="form-group m-3">
          <label for="name">Name </label>
          <input
            v-model="name"
            type="text"
            class="form-control inputField"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group m-3">
          <label for="email">Email address</label>
          <input
            v-model="email"
            type="email"
            class="form-control inputField"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group m-3">
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control inputField"
            id="password"
            placeholder="Password"
          />
        </div>

        <div class="form-group m-3">
          <label for="confirm_password">Confirm Password </label>
          <input
            type="password"
            class="form-control inputField"
            id="confirm_password"
            aria-describedby="emailHelp"
            placeholder="Confirm your password "
          />
        </div>
        <button
          type="submit"
        
          class="btn btn-primary m-3"
        >
          Submit
        </button>
      </form>
      <hr />
      <p class="float-end">
        Already have an Account ? <router-link to="/facultylogin"> Login </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
label {
  font-size: 25px;
}
.inputField {
  height: 45px;
}

.signupPage {
  width: 50%;
  height: 620px;
}

</style>