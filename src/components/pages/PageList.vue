<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <b-field>
            <b-input placeholder="Search..."
                type="search"
                icon="magnify" expanded></b-input>
            <p class="control">
                <button class="button is-primary">Search</button>
            </p>
            <b-button type="is-info" outlined
                class="new-btn"
                icon-left="plus" @click="$router.push({ name: 'new-page' });">
                New

            </b-button>
        </b-field>

      </div>
    </div>
    <div class="columns is-multiline">
      <div v-for="page in pageList" :key="page.id"
      class="column is-one-third">
        <PageCard :page='page'/>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-cycle
import { PageAPI } from '@/api';
import PageCard from '@/components/pages/PageCard.vue';

export default {
  name: 'PageList',
  components: {
    PageCard,
  },
  data() {
    return {
      isLoading: false,
      pageList: [],
    };
  },
  methods: {
    async loadPages() {
      this.isLoading = true;
      this.pageList = await PageAPI.all();
      this.isLoading = false;
    },
  },
  created() {
    this.loadPages();
  },
};
</script>

<style>
.new-btn {
  margin-left: 10px
}
.container {
  padding-top: 10px;
}
</style>
