<template>
  <div class="hello">
	  仿美团项目
	  <van-button type="default">默认按钮</van-button>
	  <van-button type="primary">主要按钮</van-button>
	  <van-button disabled type="primary">禁用状态</van-button>
	  <van-button disabled type="info">禁用状态</van-button>
	  <svg class="icon" aria-hidden="true">
		<use xlink:href="#icon-wode"></use>
	  </svg>
  </div>

</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{
		font-size: 20px;
	}
</style>
