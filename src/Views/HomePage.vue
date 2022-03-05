<template>
  <AppHeader />
  <div class="flex flex-row">
    <SideBar />
    <appBookMarkList />
  </div>
</template>

<script>
import SideBar from "@/components/Homepage/SideBar.vue";
export default {
  components: {
    SideBar,
  },
};
</script>
