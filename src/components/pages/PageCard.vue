<template>
  <div class="card">
    <div class="card-image">
        <figure class="image is-3by2">
        <img :src="page.featuredImage" alt="Placeholder image" style="width: 100%;height: auto;">
        </figure>
    </div>
    <div class="card-content">
        <div class="media">
        <div class="media-content">
            <p class="title is-4">{{ page.title }}</p>
        </div>
        </div>
        <div class="content">
        {{ page.description | limitTo(50, '...') }}<br>
        <time datetime="2016-1-1">{{ page.createdAt | formatDate }}</time>
        </div>
    </div>
    <footer class="card-footer">
    <a class="card-footer-item">Edit</a>
    <a class="card-footer-item" @click="$emit('delete')">Delete</a>
  </footer>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { PageAPI } from '@/api';

export default {
  name: 'PageCard',
  props: {
    page: {
      type: Object,
      default: () => null,
    },
  },
  methods: {
  },
  filters: {
    limitTo(text, length, clamp) {
      const t = text || '';
      const l = length || 50;
      const c = clamp || '';
      const result = t.slice(0, l);

      return t.length > l ? `${result}${c}` : result;
    },
    formatDate(value) {
      if (!value) return '';

      const shortMonthName = (month) => {
        const shortNames = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        return shortNames[month];
      };
      const date = new Date(value);
      const isDate = date instanceof Date;
      if (!date || !isDate) {
        return '';
      }
      const year = date.getFullYear();
      const month = shortMonthName(date.getMonth());
      const day = date.getDate();
      return `${month} ${day}, ${year}`;
    },
  },
};
</script>
