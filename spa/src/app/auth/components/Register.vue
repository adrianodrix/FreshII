<template lang="html">
  <form class="form__submit"  @submit.prevent="submit(user)">
    <div class="form__submit--header">
      <h1>Sign Up</h1>
      <small>You're wellcome</small>
    </div>

    <b-form-fieldset
      label="Name"
      v-bind:class="{ 'has-error': errors.name }"
      :state="errors.name ? 'danger':null"
      :feedback="errors.name ? errors.name[0] : null" >
      <b-form-input v-model="user.name" type="text" placeholder="Your name" autofocus  />
    </b-form-fieldset>

    <b-form-fieldset
      label="Email"
      :state="errors.email ? 'danger':null"
      :feedback="errors.email ? errors.email[0] : null" >
      <b-form-input v-model="user.email" type="text" placeholder="Your email"  />
    </b-form-fieldset>

    <b-form-fieldset
      label="Password"
      :state="errors.password ? 'danger':null"
      :feedback="errors.password ? errors.password[0] : null" >
      <b-form-input v-model="user.password" type="password" placeholder="Enter your password to access" />
    </b-form-fieldset>

    <b-form-fieldset>
      <b-button size="lg" variant="success" type="submit">Sign Up</b-button>
    </b-form-fieldset>

  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AuthRegister',
  data () {
    return {
      user: {
        name: null,
        email: null,
        password: null
      },
      errors: []
    }
  },
  methods: {
    ...mapActions({
      register: 'auth/register'
    }),
    submit (user) {
      this.register({
        user,
        context: this
      }).then(() => {
        this.$router.replace({ name: 'home' })
      })
    }
  }
}
</script>

<style lang="scss">
.form__submit {
  max-width: 480px;
  margin: auto;

  &--header {
    padding-bottom: 20px;
  }
}
</style>
