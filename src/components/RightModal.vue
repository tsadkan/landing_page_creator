<template>
  <b-modal :active.sync="isRightModalActive" :width="400" scroll="keep" :can-cancel='true'
  :on-cancel="onCancle">
            <div class="card">
                <component :is='childComponent'></component>
            </div>
        </b-modal>
</template>
<script>
import { mapState } from 'vuex';
import SectionCreate from '@/components/section/SectionCreate.vue';
import RowCreate from '@/components/row/RowCreate.vue';
import ElementCreate from '@/components/element/ElementCreate.vue';

export default {
  name: 'RightModal',
  components: {
    SectionCreate,
    RowCreate,
    ElementCreate,
  },
  computed: {
    ...mapState('layout', ['isRightModalActive', 'childComponent']),
  },
  data() {
    return {};
  },
  methods: {
    onCancle() {
      this.$store.commit('layout/toggleModal', null);
    },
  },
};
</script>
<style>
.modal-close {
    right: 420px !important;
    background: #51db8f !important;
    border-radius: 0px !important;
}
.modal .animation-content {
    position: fixed;
    right: 0px;
    height: 100%;
}
.card {
    min-height: 100%;
}
</style>
