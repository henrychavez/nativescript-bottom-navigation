<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home"></Label>
    </ActionBar>

    <GridLayout rows="*, auto">
      <StackLayout row="0">
        <Label text="content"></Label>
        <Button text="Go to second tab" @tap="goToSecondTab"></Button>
      </StackLayout>
      <BottomNavigation
        ref="bottomNavigation"
        activeColor="red"
        inactiveColor="yellow"
        backgroundColor="black"
        keyLineColor="black"
        @tabSelected="onBottomNavigationTabSelected"
        row="1"
      >
        <BottomNavigationTab title="First" icon="ic_home"/>
        <BottomNavigationTab title="Second" icon="ic_view_list"/>
        <BottomNavigationTab title="Third" icon="ic_menu"/>
      </BottomNavigation>
    </GridLayout>
  </Page>
</template>

<script>
export default {
  methods: {
    goToSecondTab: function(args) {
      const bottomNavigation = this.$refs.bottomNavigation.nativeView;
      console.log('Bottom', bottomNavigation.nativeView);
      bottomNavigation.selectTab(1);
    },
    onBottomNavigationTabSelected: function(args) {
      console.log(`old tab index:  ${args.oldIndex}`);
      console.log(`selected tab index:  ${args.newIndex}`);
    }
  },
  computed: {
    message() {
      return "Blank {N}-Vue app";
    }
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles
.fa {
  color: $accent-dark;
}

.info {
  font-size: 20;
}
</style>
