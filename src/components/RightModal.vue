<template>
  <div class="right-modal">
    <b-modal :active.sync="isRightModalActive" :width="400" scroll="keep" :can-cancel='true'
  :on-cancel="onCancle">
            <div class="card">
                <component :is='childComponent' @value-updated="onUpdate($event)"
                @onElementAdd="onElementAdd" :type="elementType"
                :elementName="elementName" :placeholder="placeholder"></component>
            </div>
        </b-modal>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import SectionCreate from '@/components/section/SectionCreate.vue';
import RowCreate from '@/components/row/RowCreate.vue';
import ElementCreate from '@/components/element/ElementCreate.vue';
import ElementForm from '@/components/element/ElementForm.vue';

export default {
  name: 'RightModal',
  components: {
    SectionCreate,
    RowCreate,
    ElementCreate,
    ElementForm,
  },
  computed: {
    ...mapState('layout', ['isRightModalActive', 'childComponent']),
  },
  data() {
    return {
      elementType: 'element',
      elementName: 'Element',
      placeholder: 'Add Element',
    };
  },
  methods: {
    onCancle() {
      this.$store.commit('layout/toggleModal', null);
    },
    onUpdate(type) {
      // this.$store.commit('PageStore/setSectionIndex', 0);
      // this.$store.commit('PageStore/setRowIndex', 0);
      // this.$store.commit('PageStore/setColumnIndex', 0);
      if (type.group) {
        this.elementName = type.name;
        this.placeholder = `Add ${type.name}`;
        this.elementType = type.name;
        this.$store.commit('layout/setChildComponent', 'ElementForm');
      } else {
        this.$store.commit('layout/toggleModal', null);
        this.$emit('onNewAdd', type);
      }
    },
    onElementAdd(type) {
      this.$store.commit('layout/toggleModal', null);
      this.$emit('onNewAdd', type);
    },
  },
};
</script>
<style>
.right-modal .modal-close {
    right: 420px !important;
    background: #51db8f !important;
    border-radius: 0px !important;
}
.right-modal .modal .animation-content {
    position: fixed;
    right: 0px;
    height: 100%;
}
.right-modal .card {
    min-height: 100%;
}
</style>
