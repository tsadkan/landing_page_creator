<template>
  <div class="page-container">
    <AddComponent :title="`Element`" @onAdd="onAddElement()"/>
  </div>
</template>
<script>

import AddComponent from '@/components/AddComponent.vue';


export default {
  name: 'ElementCard',
  components: {
    AddComponent,
  },
  data() {
    return {};
  },
  methods: {
    onAddElement() {
      this.$store.commit('layout/toggleModal', 'ElementCreate');
    },
  },
};
</script>
