<template>
	<div class="top">
		<div class="content">
			<div class="top">
				<van-nav-bar
				  :title="`${title}`"
				  left-arrow
				  @click-left='onClickLeft'
				/>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['title'],
		methods:{
			onClickLeft(){
				this.$router.go (-1);
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>