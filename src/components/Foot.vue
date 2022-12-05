<template>
	<div class="foot">
		<div class="footitem">
			<router-link to="/" class="navitem" active-class="activecolor">
				<van-icon name="wap-home-o" size="30" />
				首页
			</router-link>
		</div>
		<div class="footitem">
			<router-link to="/cart" class="navitem">
				<van-icon name="shopping-cart-o" size="30" />
				购物车
			</router-link>
		</div>
		<div class="footitem">
			<router-link to="/order" class="navitem">
				<van-icon name="balance-list-o" size="30" />
				订单
			</router-link>
		</div>
		<div class="footitem">
			<router-link to="mine" class="navitem">
				<van-icon name="manager-o" size="30" />
				我的
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="less" scoped>
	.foot{
		border-top: 1px solid lightsteelblue;
		display: flex;
		font-size: 14px;
		.navitem{
			display: flex;
			flex-flow: column;
			align-items: center;
		}
		.footitem{
			flex: 1;
			display: flex;
			justify-content: center;
		}
		.activecolor{
			color: coral;
			flex-flow: column;
		}
	}
</style>