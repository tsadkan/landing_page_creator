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
            <b-icon class="menu-icon" icon="vector-intersection"></b-icon>
            Section
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item" @click="openRightModal('SectionCreate')">
              Add Section
            </a>
            <a class="navbar-item">
              Manage
            </a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <b-icon class="menu-icon" icon="border-horizontal"></b-icon>
            Row
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item" @click="openRightModal('RowCreate')">
              Add Row
            </a>
            <a class="navbar-item">
              Manage
            </a>
          </div>
        </div>
        <div class="navbar-item is-hoverable">
          <a class="link">
            <b-icon class="menu-icon" icon="border-vertical"></b-icon>
            Column
          </a>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <b-icon class="menu-icon" icon="code-tags"></b-icon>
            Element
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item" @click="openRightModal('ElementCreate')">
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
                type="is-primary"
                icon-left="content-save">
                save
            </b-button>
          </div>
        </div>
         <div class="navbar-item">
          <div class="buttons">
            <b-button size="is-medium"
                @click="logout()"
                type="is-danger" outlined
                icon-left="power">
                Log out
            </b-button>
          </div>
        </div>
      </div>
    </div>

    <RightModal/>
  </nav>
</template>
<script>
import { AuthService } from '@/services/services.index';
import RightModal from '@/components/RightModal.vue';

export default {
  name: 'Navbar',
  components: {
    RightModal,
  },
  data() {
    return {
    };
  },
  methods: {
    logout() {
      AuthService.logout();
    },
    openRightModal(component) {
      this.$store.commit('layout/toggleModal', component);
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
  margin-right: 5px !important;
}
</style>
