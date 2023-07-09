<template>
  <div>
    <div class="p-2 grid grid-cols-8 gap-4">
      <bookmark-list-item v-for="i in 16" :key="i" />
    </div>
  </div>
</template>

<script>
import bookmarkListItem from "./BookmarkListItem";
export default {
  components: {
    bookmarkListItem,
  },
};
</script>
