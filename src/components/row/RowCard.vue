<template>
  <div class="page-container columns is-multiline">
    Row Card
    // eslint-disable-next-line max-len
    <ColumnCard v-for="column in columns" :key="column.index" :element="column.element"
    :columnWidth="column.columnWidth"/>
  </div>
</template>
<script>
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
    ColumnCard,
  },
  data() {
    return {};
  },
};
</script>
