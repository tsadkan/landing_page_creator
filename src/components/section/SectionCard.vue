<template>
<div @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{'mouse-in-section': hover }">

  <div class="page-container" >
    <AddComponent :title="`Row`" @onAdd="onAddRow()" v-if="rows.length == 0"/>

    <Container @drop="onRowDrop" group-name="row">
      <Draggable v-for="(row, rowIndex) in rows" :key="row.index">
        <RowCard :columns="row.columns" :index='rowIndex' :sectionIndex="index"/>
      </Draggable>
    </Container>
  <b-button is-circle v-if="hover" @click="addSection" class="section-add"><b-icon
     class="menu-icon" icon="plus"></b-icon></b-button>
     <b-button is-circle v-if="hover" @click="editSection" class="section-edit"><b-icon
     class="menu-icon" icon="eye"></b-icon></b-button>
    <b-button v-if="hover" @click="deleteSection" class="section-close"><b-icon
     class="menu-icon" icon="delete"></b-icon></b-button>
  </div>
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
    return {
      hover: true,
    };
  },
  methods: {
    deleteSection() {
      this.$store.commit('PageStore/deleteSection', this.index);
    },
    addSection() {
      this.$store.commit('layout/toggleModal', 'SectionCreate');
      this.$store.commit('PageStore/setSectionIndex', this.index);
    },
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
    padding: 20px;
}
.mouse-in-section {
    border: 1px solid #a3ccb8;
    background: rgba(24,139,246,0.1);
    cursor:pointer;
}
.section-add {
  background: #51db8f !important;
}
.section-edit {
  background: #ece734 !important;
}
.section-close {
  background: #f94a5e !important;
}
</style>
