<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home"></Label>
    </ActionBar>

    <GridLayout rows="*, auto">
      <GridLayout row="0">
        <Label class="h1 text-center" text="bottom-navigation-bar"></Label>
      </GridLayout>
      <BottomNavigation
        class="custom-bottom-navigation-bar"
        @tabPressed="onBottomNavigationTabPressed"
        @tabSelected="onBottomNavigationTabSelected"
        @tabReselected="onBottomNavigationTabReselected"
        row="1"
      >
        <BottomNavigationTab title="First" icon="res://ic_home"/>
        <BottomNavigationTab title="Second" icon="res://ic_view_list" isSelectable="false"/>
        <BottomNavigationTab title="Third" icon="res://ic_menu"/>
      </BottomNavigation>
    </GridLayout>
  </Page>
</template>

<script>
export default {
  methods: {
    onBottomNavigationTabPressed: function(args) {
      alert(
        'This tab has isSelectable: false, and should be used to perform actions',
      );
      console.log(`pressed tab index:  ${args.index}`);
    },
    onBottomNavigationTabSelected: function(args) {
      console.log(`old tab index:  ${args.oldIndex}`);
      console.log(`selected tab index:  ${args.newIndex}`);
    },
    onBottomNavigationTabReselected: function(args) {
      alert('Tab Reselected');
      console.log(`reselected tab index:  ${args.index}`);
    },
  },
  computed: {
    message() {
      return "Blank {N}-Vue app";
    },
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles
.custom-bottom-navigation-bar {
  active-color: white;
  background-color: #fd485a;
  inactive-color: #fc99a2;
}

</style>
