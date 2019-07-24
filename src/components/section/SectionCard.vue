<template>
  <div class="page-container">
    <AddComponent :title="`Row`" @onAdd="onAddRow()" v-if="rows.length == 0"/>
    <Container @drop="onRowDrop" group-name="row">
      <Draggable v-for="(row, rowIndex) in rows" :key="row.index">
        <RowCard :columns="row.columns" :index='rowIndex' :sectionIndex="index"/>
      </Draggable>
    </Container>
  </div>
</template>
<script>
import { Container, Draggable } from 'vue-smooth-dnd';
import RowCard from '@/components/row/RowCard.vue';
import AddComponent from '@/components/AddComponent.vue';

export default {
  name: 'SectionCard',
  components: {
    RowCard, AddComponent, Container, Draggable,
  },
  props: {
    rows: {
      type: [],
      default: [],
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  methods: {
    onAddRow() {
      this.$store.commit('PageStore/setSectionIndex', this.index);
      console.log(this.index);
      this.$store.commit('layout/toggleModal', 'RowCreate');
    },
    onRowDrop(dropResult) {
      this.$emit('onRowDrop', { index: this.index, ...dropResult });
    },
  },
};
</script>
<style>
.page-container {
    border: 1px solid #000;
    padding: 20px;
}
</style>
