<template>
  <div>
    <div class="p-2 grid grid-cols-8 gap-4">
      <bookmark-list-item v-for="item in items" :item="item" :key="item.id" />
    </div>
  </div>
</template>

<script>
import bookmarkListItem from "./BookmarkListItem";
export default {
  components: {
    bookmarkListItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
