<template>
  <section class="row align-center">
    <form method="post" action="." class="column small-12 large-8">
      <fieldset>
        <label for="id_username">Username</label>
        <input type="text" class="form-control" id="id_username" aria-describedby="emailHelp"
               placeholder="Enter username" name="username">
        <label for="id_email">Email address</label>
        <input type="email" class="form-control" id="id_email" aria-describedby="emailHelp" placeholder="Enter email"
               name="email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
          else.
        </small>
        <label for="id_password1">Password</label>
        <input type="password" class="form-control" id="id_password1" placeholder="Password" name="password1">
        <label for="id_password2">Password confirmation</label>
        <input type="password" class="form-control" id="id_password2" placeholder="Password" name="password2">
      </fieldset>
      <input type="submit" class="button" value="Submit">
    </form>
  </section>
</template>

<script>
  /* eslint-disable */
  export default {
    name: "register"
  }
</script>

<style scoped>

</style>
