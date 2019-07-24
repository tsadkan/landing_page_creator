<template>
  <div>
    <Navbar />
    <div>
      <RouterView />
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'AppContent',
  components: {
    Navbar,
  },
};
</script>
