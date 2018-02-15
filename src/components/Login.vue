<template>
  <div class="row align-center">
    <form method="post" action="." class="column small-12 large-8">
      <fieldset>
        <label for="id_username">Username</label>
        <input type="text" class="form-control" id="id_username" aria-describedby="emailHelp" placeholder="Enter email"
               name="username">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
          else.
        </small>
        <label for="id_password">Password</label>
        <input type="password" class="form-control" id="id_password" placeholder="Password" name="password">
      </fieldset>
      <input type="submit" class="button" value="Log in">
      <router-link to="/register" exact>Register</router-link>
      <input type="hidden" name="next" value="">
    </form>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: "login"
  }
</script>

<style scoped>

</style>
