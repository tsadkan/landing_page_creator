<template>
  <div class="page-container">
    <AddComponent :title="`Element`" @onAdd="onAddElement()"
    v-if="Object.keys(element).length === 0"/>
    <div v-html="element.element"></div>
  </div>
</template>
<script>

import AddComponent from '@/components/AddComponent.vue';


export default {
  name: 'ElementCard',
  components: {
    AddComponent,
  },
  props: {
    element: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    onAddElement() {
      this.$emit('onElementAdd');
    },
  },
};
</script>
