// eslint-disable-next-line import/no-cycle
import { PageAPI } from '@/api';

/* eslint no-param-reassign:0 */
const PageStore = {
  namespaced: true,
  state: {
    isLoadingOnSave: false,
    isLoading: false,
    sectionList: [{
      index: 0,
      rows: [],
    }],
    sectionIndex: 0,
    rowIndex: 0,
    columnIndex: 0,
  },
  actions: {
    async fetchPage({ commit }, id) {
      const sectionList = await PageAPI.get(id);

      commit('setSections', sectionList);
    },
  },
  mutations: {
    setSections(state, sectionList) {
      state.sectionList = sectionList;
    },
    setIsLoadingOnSave(state, status) {
      state.isLoadingOnSave = status;
    },
    setIsLoading(state, status) {
      state.isLoading = status;
    },
    setSectionIndex(state, index) {
      state.sectionIndex = index;
    },
    setRowIndex(state, index) {
      state.rowIndex = index;
    },
    setColumnIndex(state, index) {
      state.columnIndex = index;
    },
    // eslint-disable-next-line consistent-return
    onSectionDrop(state, dropResult) {
      const { removedIndex, addedIndex, payload } = dropResult;
      if (removedIndex === null && addedIndex === null) return state.sectionList;

      const result = [...state.sectionList];
      let itemToAdd = payload;

      if (removedIndex !== null) {
        // eslint-disable-next-line prefer-destructuring
        itemToAdd = result.splice(removedIndex, 1)[0];
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }

      state.sectionList = result;
    },
    addFullWidthSection(state) {
      const emptySection = {
        index: 0,
        rows: [
        ],
      };
      const result = [...state.sectionList];
      const sectionIndex = state.sectionIndex === 0 ? state.sectionIndex : state.sectionIndex + 1;
      result.splice(sectionIndex, 0, emptySection);
      state.sectionList = result;
    },
    deleteSection(state) {
      const result = [...state.sectionList];
      console.log(state.sectionIndex);
      result.splice(state.sectionIndex, 1);
      state.sectionList = result;
    },
    addRow(state, column) {
      const section = state.sectionList[state.sectionIndex];
      const columns = [];
      const fullRowColumns = 12;


      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < column; i++) {
        columns.push({
          index: 0,
          columnWidth: fullRowColumns / column,
          element: {},
        });
      }

      const emptyRow = {
        index: 0,
        columns,
      };

      console.log(state.rowIndex);
      section.rows.splice(state.rowIndex, 0, emptyRow);
    },
    addHeading(state, content) {
      const section = state.sectionList[state.sectionIndex];
      const el = {
        type: 'heading',
        element: `
        <h1 style="font-weight: 600;
        font-size: 40px;
        text-transform: capitalize;
    }">${content}</h1>
      `,
      };

      console.log(section.rows[state.rowIndex].columns[state.columnIndex]);

      section.rows[state.rowIndex].columns[state.columnIndex].element = el;
    },
    addParagraph(state, content) {
      const section = state.sectionList[state.sectionIndex];
      const el = {
        type: 'paragraph',
        element: `
        <p style="
        font-size: 20px;
        text-transform: capitalize;
    }">${content}</p>
      `,
      };

      section.rows[state.rowIndex].columns[state.columnIndex].element = el;
    },
    addAnchor(state, content) {
      const section = state.sectionList[state.sectionIndex];
      const el = {
        type: 'paragraph',
        element: `
        <a href="${content.link}">${content.name}</a>
      `,
      };

      section.rows[state.rowIndex].columns[state.columnIndex].element = el;
    },
    addBulletList(state, content) {
      const section = state.sectionList[state.sectionIndex];
      const list = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < content.length; i++) {
        list.push(`<li>${content[i]}</li>`);
      }
      const ul = `<ul style="list-style:square">${list.join(' ')}</ul>`;
      const el = {
        type: 'bullet list',
        element: ul,
      };

      section.rows[state.rowIndex].columns[state.columnIndex].element = el;
    },
    addImage(state, src) {
      const section = state.sectionList[state.sectionIndex];
      const el = {
        type: 'image',
        element: `
        <img src='${src}'/>
      `,
      };

      section.rows[state.rowIndex].columns[state.columnIndex].element = el;
    },
    addAudio(state, src) {
      const section = state.sectionList[state.sectionIndex];
      const el = {
        type: 'audio',
        element: `
        <Audio controls>
          <source src="${src}">
        </Audio>
      `,
      };

      section.rows[state.rowIndex].columns[state.columnIndex].element = el;
    },
    addVideo(state, src) {
      const section = state.sectionList[state.sectionIndex];
      const el = {
        type: 'video',
        element: `
        <video controls>
          <source src="${src}">
        </video>
      `,
      };

      section.rows[state.rowIndex].columns[state.columnIndex].element = el;
    },
  },
  getters: {
    sectionList: state => state.sectionList,
  },
};

export default PageStore;
