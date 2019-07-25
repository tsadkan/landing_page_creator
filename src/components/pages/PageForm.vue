<template>
  <b-modal :active.sync="isPageFormActive" :width="400" scroll="keep" :can-cancel='true'
  :on-cancel="onCancle">
      <div class="card" style="padding:20px">
        <form @submit.prevent="save" novalidate>
            <b-field
                :type="{'is-danger': errors.has('title')}"
                :message="errors.first('title')"
            >
                <b-input
                type="text"
                v-model="title"
                placeholder="title"
                name="title"
                v-validate="'required|title'"
                data-vv-validate-on="none"
                ></b-input>
            </b-field>
            <b-field
                :type="{'is-danger': errors.has('description')}"
                :message="errors.first('description')"
            >
                <b-input
                type="textarea"
                v-model="description"
                placeholder="description"
                name="description"
                v-validate="'required|description'"
                data-vv-validate-on="none"
                ></b-input>
            </b-field>

            <button  :class="{'is-loading': isSaving }"
            class="button login-button
            is-block is-primary is-medium is-fullwidth">save</button>
        </form>
      </div>
  </b-modal>
</template>
<script>
import { mapGetters } from 'vuex';
import { PageAPI } from '@/api';

export default {
  name: 'PageForm',
  props: {
    isPageFormActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      title: '',
      description: '',
      isSaving: false,
    };
  },
  computed: {
    ...mapGetters('PageStore', ['sectionList']),
  },
  methods: {
    async save() {
      this.isSaving = true;
      try {
        await PageAPI.create({
          sectionList: this.sectionList,
          title: this.title,
          description: this.description,
        });
        this.isSaving = false;
        this.onCancle();
        this.$store.commit('PageStore/setSections', [{
          index: 0,
          rows: [],
        }]);
        this.$router.push({ name: 'page-list' });
      } catch (error) {
        this.isSaving = false;
      }
    },
    onCancle() {
      this.title = '';
      this.description = '';
      this.$emit('onCancle');
    },
  },
};
</script>
