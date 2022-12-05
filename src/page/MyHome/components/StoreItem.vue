<template>
	<div class="storeitem" @click="toStore">
		<div class="shoplist">
			<div class="leftshoplist">
				<img :src="`${item.pic}`" alt="`${item.title}`"/>
			</div>
			<div class="rightshoplist">
				<p class="shopname">{{item.title}}</p>
				<p>月售：{{item.sales}}</p>
				<p>起送价：￥{{item.price}} 免配送费</p>
				<p >
					<span class="shoplabel" v-for="(i,index) in item.label">{{i}}</span>
				</p>
				<p></p>
			</div>
		</div>	
	</div>
</template>

<script>
	import router from '../../../router/indexRouter.js';
	export default{
		props:['item'],
		setup(){
			const toStore = ()=>{
				router.push('./store');
			};
			return {
				toStore,
			};
		},
	}
</script>

<style lang="less" scoped>
	/deep/.van-card{
		background-color: white;
	}
	.storeitem{
		width: 100%;
		p{
			margin: 5px;
		}
		.shoplist{
			display: flex;
			height: 100px;
			margin-top: 5px;
			border-radius: 10px;
			border: 1px solid lightgrey;
			background-color: white;
			.leftshoplist{
				flex: 2;
				flex-wrap: wrap;
				img{
					height: 80px;
					width: 90px;
					margin: 10px;
				}
			}
			.rightshoplist{
				flex: 8;
				flex-wrap: wrap;
				font-size: 12px;
				margin: 0;
				padding: 0;
				.shopname{
					font-weight: bold;
					font-size: 16px;
				}
				.shoplabel{
					font-size: 9px;
					padding: 2px;
					margin-left: 3px;
					background-color: bisque;
				}
			}
		}
	}
</style>