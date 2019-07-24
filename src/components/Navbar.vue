<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" @click="$router.push({ name: 'home' });">
        <img src="@/assets/logo.png" width="112" height="28">
        <h1 class="header">Creator</h1>
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu"
      aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
      </div>

      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <b-icon class="menu-icon" style="margin-right:5px" icon="vector-intersection"></b-icon>
            Section
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              Add Section
            </a>
            <a class="navbar-item">
              Manage
            </a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <b-icon class="menu-icon" style="margin-right:5px" icon="border-horizontal"></b-icon>
            Row
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              Add Row
            </a>
            <a class="navbar-item">
              Manage
            </a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <b-icon class="menu-icon" style="margin-right:5px" icon="vector-intersection"></b-icon>
            Column
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              Add Column
            </a>
            <a class="navbar-item">
              Manage
            </a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <b-icon class="menu-icon" style="margin-right:5px" icon="code-tags"></b-icon>
            Element
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              Add Element
            </a>
            <a class="navbar-item">
              Manage
            </a>
          </div>
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <b-button size="is-medium"
                @click="logout()"
                type="is-primary" outlined
                icon-left="power">
                Log out
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { AuthService } from '@/services/services.index';

export default {
  name: 'Navbar',
  data() {
    return {
    };
  },
  methods: {
    logout() {
      AuthService.logout();
    },
  },
};
</script>
<style scoped>
.header {
  font-weight: 600;
  color: #51db8f;
  text-transform: uppercase;
}
.menu-icon {
  margin-right: 5px;
}
</style>
