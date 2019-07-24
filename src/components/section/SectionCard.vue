<template>
  <div class="page-container">
    Section Card
    <RowCard v-for="row in rows" :key="row.index" :columns="row.columns"/>
  </div>
</template>
<script>
import RowCard from '@/components/row/RowCard.vue';

export default {
  name: 'SectionCard',
  props: {
    rows: {
      type: [],
      default: [],
    },
  },
  components: {
    RowCard,
  },
  data() {
    return {};
  },
};
</script>
<style>
.page-container {
    border: 1px solid #000;
    padding: 20px;
}
</style>
