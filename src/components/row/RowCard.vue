<template>
  <div class="page-container columns is-multiline">
    <Container @drop="onColumn" orientation="horizontal" group-name='col' style="width:100%">
        <Draggable v-for="(column, columnIndex) in columns" :key="column.index">
            <ColumnCard  :element="column.element"
        :columnWidth="column.columnWidth" :rowIndex='index'
        :index="columnIndex" :sectionIndex="sectionIndex"/>
        </Draggable>
    </Container>
  </div>
</template>
<script>
import { Container, Draggable } from 'vue-smooth-dnd';
import ColumnCard from '@/components/column/ColumnCard.vue';

export default {
  name: 'RowCard',
  props: {
    columns: {
      type: [],
      default: [],
    },
    index: {
      type: Number,
    },
    sectionIndex: {
      type: Number,
    },
  },
  components: {
    ColumnCard, Container, Draggable,
  },
  data() {
    return {};
  },
};
</script>
