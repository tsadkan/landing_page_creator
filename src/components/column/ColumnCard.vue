<template>
  <div class="page-container column" :class="`is-${columnWidth}`" style="width: 100%">
    <ElementCard :rowIndex="rowIndex" :columnIndex="index" :element='element'
    @onElementAdd="onElementAdd()"/>
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
    index: {
      type: Number,
    },
    rowIndex: {
      type: Number,
    },
    sectionIndex: {
      type: Number,
    },
  },
  components: {
    ElementCard,
  },
  data() {
    return {};
  },
  methods: {
    onElementAdd() {
      this.$store.commit('PageStore/setSectionIndex', this.sectionIndex);
      this.$store.commit('PageStore/setRowIndex', this.rowIndex);
      this.$store.commit('PageStore/setColumnIndex', this.index);

      console.log(this.sectionIndex, this.rowIndex, this.index);
      this.$store.commit('layout/toggleModal', 'ElementCreate');
    },
  },
};
</script>
