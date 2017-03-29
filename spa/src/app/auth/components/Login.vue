<template lang="html">
  <form class="form__submit"  @submit.prevent="submit(user)">

    <b-alert :show="errors.root ? dismissCountDown = 5:dismissCountDown = 0" dismissible variant="danger" @dismiss-count-down="countDownChanged">
      {{ errors.root }}
    </b-alert>

    <div class="form__submit--header">
      <h1>Sign In</h1>
      <small>You can enter.</small>
    </div>

    <b-form-fieldset
      label="Email"
      :state="errors.email ? 'danger':null"
      :feedback="errors.email ? errors.email[0] : null" >
      <b-form-input v-model="user.email" type="text" placeholder="Your email"  autofocus />
    </b-form-fieldset>

    <b-form-fieldset
      label="Password"
      :state="errors.password ? 'danger':null"
      :feedback="errors.password ? errors.password[0] : null" >
      <b-form-input v-model="user.password" type="password" placeholder="Enter your password to access" />
    </b-form-fieldset>

    <b-form-fieldset>
      <b-button size="lg" variant="success" type="submit">Sign In</b-button>
    </b-form-fieldset>

  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AuthLogin',
  data () {
    return {
      user: {
        name: null,
        email: null,
        password: null
      },
      errors: [],
      dismissCountDown: null
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    submit (user) {
      this.errors = []
      this.dismissCountDown = null

      this.login({
        user,
        context: this
      }).then(() => {
        if (this.$route.query.redirect) {
          this.$router.replace(this.$route.query.redirect)
          return
        }
        this.$router.replace({ name: 'home' })
      })
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
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
