<template>
  <div>
    Navbar
  </div>
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
<style>
.on-top {
  z-index: 99;
}
</style>
