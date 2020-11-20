<template>
  <div id="user-info">
    <Dropdown>
      <Avatar style="background-color: #87d068" icon="ios-person" />
      <DropdownMenu slot="list">
        <DropdownItem>个人信息</DropdownItem>
        <DropdownItem>登出</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <span class="user-name">Admin</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#user-info {
  float: right;
  padding-right: 30px;
  .user-name {
    margin-left: 5px;
  }
}
</style>