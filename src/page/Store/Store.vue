<template>
	<div class="store">
		<div class="content">
			<div class="top">
				<van-nav-bar
				  title="店铺"
				  left-text="返回"
				  left-arrow
				  @click-left='onClickLeft'
				/>
			</div>
		</div>
		<Foot />
	</div>
</template>

<script>
	import Foot from '../../components/Foot.vue';
	export default {
		components:{
			Foot,
		},
		methods:{
			onClickLeft(){
				this.$router.go (-1);
			}
		}
	}
</script>

<style lang="less" scoped>
	.store{
		display: flex;
		flex-flow: column;
		height: 100%;
		.content{
			flex: 1;
			overflow-y: auto;
		}
	}
</style>