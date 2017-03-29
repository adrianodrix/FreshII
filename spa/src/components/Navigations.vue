<template lang="html">
  <b-navbar toggleable fixed="top" type="inverse" variant="success">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <router-link class="navbar-brand" :to="{ name: 'home' }">
      <span>Fresh II</span>
    </router-link>

    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar v-if="user.authenticated">
        <b-nav-item><router-link class="nav-link" :to="{ name: 'timeline' }">Timeline</router-link></b-nav-item>
      </b-nav>

      <b-nav is-nav-bar class="ml-auto">
        <b-nav v-if="!user.authenticated">
          <b-nav-item><router-link class="nav-link" :to="{ name: 'auth.login' }">Login</router-link></b-nav-item>
          <b-nav-item><router-link class="nav-link" :to="{ name: 'auth.register' }">Register</router-link></b-nav-item>
        </b-nav>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown right-alignment class="nav-link--a"  v-if="user.authenticated">
          <!-- Using text slot -->
          <template slot="text">
            <span style="font-weight: bold;">{{ user.data.name }}</span>
          </template>

          <b-dropdown-item>Profile</b-dropdown-item>
          <b-dropdown-item @click.prevent="signout">Logout</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'navigation',
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    }),
    signout () {
      this.logout().then(() => {
        this.$router.replace({ name: 'auth.login' })
      })
    }
  }
}
</script>

<style lang="scss">
.nav-link--a {
  margin-top: 8px;
}
</style>
