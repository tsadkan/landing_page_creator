<template>
  <div class="container" style="padding:30px">
    <AddComponent :title="`Section`" @onAdd="onAddSection()"/>
    <Container @drop="onSectionDrop" v-if="sectionList.length > 0">
      <Draggable v-for='(section, index) in sectionList' :key="section.index">
        <SectionCard :rows="section.rows" :index="index" @onRowDrop="onRowDrop($event)"/>
      </Draggable>
    </Container>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-cycle
// import { PageAPI } from '@/api';
import { Container, Draggable } from 'vue-smooth-dnd';
import SectionCard from '@/components/section/SectionCard.vue';
import AddComponent from '@/components/AddComponent.vue';

export default {
  name: 'UserCreate',
  components: {
    SectionCard,
    AddComponent,
    Container,
    Draggable,
  },
  data() {
    return {
      sectionList: [
        {
          index: 0,
          rows: [
            {
              index: 0,
              columns: [
                {
                  index: 0,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
                {
                  index: 1,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
                {
                  index: 2,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
              ],
            },
            {
              index: 0,
              columns: [
                {
                  index: 0,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
                {
                  index: 1,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
                {
                  index: 2,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
              ],
            },
          ],
        },
        {
          index: 1,
          rows: [
            {
              index: 0,
              columns: [
                {
                  index: 0,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
                {
                  index: 1,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
                {
                  index: 2,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
              ],
            },
            {
              index: 0,
              columns: [
                {
                  index: 0,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
                {
                  index: 1,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
                {
                  index: 2,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
              ],
            },
          ],
        },
      ],
    };
  },
  created() {
  },
  methods: {
    onAddSection() {
      this.$store.commit('layout/toggleModal', 'SectionCreate');
    },
    // eslint-disable-next-line consistent-return
    onSectionDrop(dropResult) {
      const { removedIndex, addedIndex, payload } = dropResult;
      if (removedIndex === null && addedIndex === null) return this.sectionList;

      const result = [...this.sectionList];
      let itemToAdd = payload;

      if (removedIndex !== null) {
        // eslint-disable-next-line prefer-destructuring
        itemToAdd = result.splice(removedIndex, 1)[0];
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }

      this.sectionList = result;
    },
    onRowDrop(dropResult) {
      const {
        index, removedIndex, addedIndex, payload,
      } = dropResult;
      console.log({
        index, removedIndex, addedIndex, payload,
      });
    },
  },
};
</script>
