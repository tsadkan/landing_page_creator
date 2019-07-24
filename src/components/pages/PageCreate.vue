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
    addHeading() {
      this.$store.commit('PageStore/addHeading', 'Heading');
    },
    addParagraph() {
      this.$store.commit('PageStore/addParagraph', 'Paragraph');
    },
    addAnchor() {
      this.$store.commit('PageStore/addAnchor', { link: 'http://google.com', name: 'google' });
    },
    addBulletList() {
      this.$store.commit('PageStore/addBulletList', ['first', 'second', 'third']);
    },
    addImage() {
      this.$store.commit('PageStore/addImage', 'https://www.gstatic.com/webp/gallery3/1.png');
    },
    addAudio() {
      console.log('SAdasa');
      this.$store.commit('PageStore/addAudio', 'http://www.largesound.com/ashborytour/sound/brobob.mp3');
    },
    addVideo() {
      this.$store.commit('PageStore/addVideo', 'http://techslides.com/demos/sample-videos/small.mp4');
    },
    onNewAdd(type) {
      switch (type) {
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
          this.addHeading();
          break;
        case 'paragraph':
          this.addParagraph();
          break;
        case 'anchor':
          this.addAnchor();
          break;
        case 'bullet_list':
          this.addBulletList();
          break;
        case 'image':
          this.addImage();
          break;
        case 'audio':
          this.addAudio();
          break;
        case 'video':
          this.addVideo();
          break;

        default:
          break;
      }
    },
  },
};
</script>
