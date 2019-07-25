<template>
  <div class="container" style="padding:30px">
    <AddComponent :title="`Section`" @onAdd="onAddSection()"/>
    <Container @drop="onSectionDrop" v-if="sectionList.length > 0">
      <Draggable v-for='(section, index) in sectionList' :key="section.index">
        <SectionCard :rows="section.rows" :index="index" @onRowDrop="onRowDrop($event)"/>
      </Draggable>
    </Container>

    <RightModal @onNewAdd='onNewAdd($event)'/>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-cycle
// import { PageAPI } from '@/api';
import { mapGetters } from 'vuex';

import { Container, Draggable } from 'vue-smooth-dnd';
import RightModal from '@/components/RightModal.vue';
import SectionCard from '@/components/section/SectionCard.vue';
import AddComponent from '@/components/AddComponent.vue';

export default {
  name: 'UserCreate',
  components: {
    RightModal,
    SectionCard,
    AddComponent,
    Container,
    Draggable,
  },
  data() {
    return {
    };
  },
  created() {
    const { id } = this.$route.params;
    if (id) this.$store.dispatch('PageStore/fetchPage', id);
  },
  computed: {
    ...mapGetters('PageStore', ['sectionList']),
  },
  methods: {
    onAddSection() {
      this.$store.commit('layout/toggleModal', 'SectionCreate');
    },
    // eslint-disable-next-line consistent-return
    onSectionDrop(dropResult) {
      this.$store.commit('PageStore/onSectionDrop', dropResult);
    },
    onRowDrop(dropResult) {
      const {
        index, removedIndex, addedIndex, payload,
      } = dropResult;
      console.log({
        index, removedIndex, addedIndex, payload,
      });
    },
    addFullWidthSection() {
      this.$store.commit('PageStore/addFullWidthSection');
    },
    addRow(column) {
      this.$store.commit('PageStore/addRow', column);
    },
    addHeading(content) {
      this.$store.commit('PageStore/addHeading', content);
    },
    addParagraph(content) {
      this.$store.commit('PageStore/addParagraph', content);
    },
    addAnchor(content, link) {
      this.$store.commit('PageStore/addAnchor', { link, name: content });
    },
    addBulletList(list) {
      this.$store.commit('PageStore/addBulletList', list);
    },
    addImage(content) {
      this.$store.commit('PageStore/addImage', content);
    },
    addAudio(content) {
      console.log('SAdasa');
      this.$store.commit('PageStore/addAudio', content);
    },
    addVideo(content) {
      this.$store.commit('PageStore/addVideo', content);
    },
    onNewAdd(type) {
      const { name, content } = type;
      switch (name) {
        case 'full_width_section':
          this.addFullWidthSection();
          break;
        case 'one_column':
          this.addRow(1);
          break;
        case 'two_column':
          this.addRow(2);
          break;
        case 'three_column':
          this.addRow(3);
          break;
        case 'four_column':
          this.addRow(4);
          break;
        case 'five_column':
          this.addRow(5);
          break;
        case 'six_column':
          this.addRow(6);
          break;
        case 'heading':
          this.addHeading(content);
          break;
        case 'paragraph':
          this.addParagraph(content);
          break;
        case 'anchor':
          this.addAnchor(content, type.link);
          break;
        case 'bullet list':
          this.addBulletList(type.list);
          break;
        case 'image':
          this.addImage(content);
          break;
        case 'audio':
          this.addAudio(content);
          break;
        case 'video':
          this.addVideo(content);
          break;

        default:
          break;
      }
    },
  },
};
</script>
