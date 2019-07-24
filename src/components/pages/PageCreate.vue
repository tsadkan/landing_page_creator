<template>
  <div class="container" style="padding:30px">
    <!-- <SectionCard/> -->
    <!-- <SectionCard/> -->
    <SectionCard v-for='section in sectionList' :key='section.index' :rows="section.rows"/>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-cycle
// import { PageAPI } from '@/api';
import SectionCard from '@/components/section/SectionCard.vue';

export default {
  name: 'UserCreate',
  components: {
    SectionCard,
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
                  index: 0,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
                {
                  index: 0,
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
                  index: 0,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
                {
                  index: 0,
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
                  index: 0,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
                {
                  index: 0,
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
                  index: 0,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
                {
                  index: 0,
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
                  index: 0,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
                {
                  index: 0,
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
                  index: 0,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
                {
                  index: 0,
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
                  index: 0,
                  columnWidth: 4,
                  element: {
                    content: 'Title',
                    type: 'Heading',
                  },
                },
                {
                  index: 0,
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
  },
};
</script>
