<template>
  <div class="page-container column" :class="`is-${columnWidth}`" style="width: 100%">
    Column Card
    <ElementCard/>
  </div>
</template>
<script>
import ElementCard from '@/components/element/ElementCard.vue';

export default {
  name: 'ColumnCard',
  props: {
    columnWidth: {
      type: Number,
    },
    element: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    ElementCard,
  },
  data() {
    return {};
  },
};
</script>
