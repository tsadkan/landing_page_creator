<template>
  <div class="page-container column"  style="width: 100%"
  @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="[hover ? 'mouse-in-column' : '',`is-${columnWidth}`]">
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
    return {
      hover: false,
    };
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
<style>
.mouse-in-column {
    border: 1px solid rgba(78, 221, 160, 0.1);
    background: rgba(78, 221, 160, 0.1);
    cursor:pointer;
}
</style>
