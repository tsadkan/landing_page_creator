<template>
<div @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{'mouse-in-row': hover }"><b-button is-circle v-if="hover"
    @click="addRow" class="section-add"><b-icon
     class="menu-icon" icon="plus"></b-icon></b-button>
     <b-button is-circle v-if="hover" @click="editSection" class="section-edit"><b-icon
     class="menu-icon" icon="eye"></b-icon></b-button>
    <b-button v-if="hover" @click="deleteRow" class="section-close"><b-icon
     class="menu-icon" icon="delete"></b-icon></b-button>

  <div class="page-container columns is-multiline"
  style="overflow-x:scroll" >
    <Container @drop="onColumn" orientation="horizontal" group-name='col' style="width:100%">
        <Draggable v-for="(column, columnIndex) in columns" :key="column.index">
            <ColumnCard  :element="column.element"
        :columnWidth="column.columnWidth" :rowIndex='index'
        :index="columnIndex" :sectionIndex="sectionIndex"/>
        </Draggable>
    </Container>
  </div>
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
    return {
      hover: false,
    };
  },
  methods: {
    deleteRow() {
      this.$store.commit('PageStore/deleteRow', this.index);
    },
    addRow() {
      this.$store.commit('layout/toggleModal', 'RowCreate');
      this.$store.commit('PageStore/addRow', this.index);
      this.$store.commit('PageStore/sectionIndex', this.sectionIndex);
    },
  },
};
</script>
<style>
.mouse-in-row {
    border: 1px solid #a1a24d;
    background: rgba(246, 219, 24, 0.1);
    cursor:pointer;
}
</style>
