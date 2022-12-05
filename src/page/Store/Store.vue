<template>
	<div class="store">
		<Top :title="title" />
		<div class="content">
			<div class="shopimg">
				<img src="../../assets/yuna.jpg"/>
			</div>
			<div class="shopgoods">
				<h5 class="goodsname">鱼拿酸菜鱼</h5>
				<img class="shoplogo" src="../../assets/yuna.jpg"/>
			</div>
		</div>
		<Foot />
	</div>
</template>

<script>
	import Top from './components/Top.vue';
	import Foot from './components/Foot.vue';
	export default {
		components:{
			Top,
			Foot,
		},
		setup(){
			let title = "店铺";
			return {
				title,
			}
		},
		 
	}
</script>

<style lang="less" scoped>
	.content{
		width: 100%;
		.shopimg{
			img{
				width: 100%;
				height: 200px;
				filter: contrast(150);
			}
		}
		.shopgoods{
			width: 100%;
			position: absolute;
			background-color: white;
			margin-top: -20px;
			border-radius: 20px;
			z-index: 10;
			display: flex;
			.goodsname{
				margin-left: 20px;
				flex-wrap: wrap;
				flex: 7;
			}
			.shoplogo{
				flex-wrap: wrap;
				flex: 3;
				width: 80px;
				height: 80px;
				margin-top: -10px;
				border-radius: 15px;
				margin-right: 20px;
			}
		}
	}
</style>