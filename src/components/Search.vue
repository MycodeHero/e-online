<template>
  <div class="search">
    <i class="search-icon"></i>
    <input type="text" placeholder="You can Search something"/>
    <i class="delete-icon"></i>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .search {
    position:relative;
    display: flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height:40px;
    box-sizing: border-box;
    padding: 0 10px;
  }

  .search input {
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    border-radius: 15px;
    border:1px solid #ccc;
    padding: 0 31px;
  }

  .search-icon, .delete-icon{
    position:absolute;
    width:15px;
    height:15px;
    top:50%;
    transform:translateY(-50%)
  }
  .search-icon {
    left: 18px;
    background: url('../../static/image/search.png');
    background-size:100% 100%;
  }
  .delete-icon {
    right: 18px;
    background: url('../../static/image/delete.png');
    background-size:100% 100%;
  }
</style>
