<template>
	<div class="mine">
		<div class="content">
			
		</div>
		<Foot />
	</div>
</template>

<script>
	import Foot from '../../components/Foot.vue'
	export default{
		components:{
			Foot,
		}
	}
</script>

<style lang="less" scoped>
	.mine{
		display: flex;
		flex-flow: column;
		height: 100%;
		.content{
			flex: 1;
			overflow-y: auto;
		}
	}
</style>