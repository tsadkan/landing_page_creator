<template>
  <div class="page-container columns is-multiline">
    <Container @drop="onColumn" orientation="horizontal" group-name='col' style="width:100%">
        <Draggable v-for="column in columns" :key="column.index">
            <ColumnCard  :element="column.element"
        :columnWidth="column.columnWidth"/>
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
  },
  components: {
    ColumnCard, Container, Draggable,
  },
  data() {
    return {};
  },
};
</script>
