<template>
	<div class="store">
		<div class="storeitem" v-for="(item,i) in storelist">
			<StoreItem :item="item" />
		</div>
	</div>
</template>

<script>
	import StoreItem from './StoreItem.vue';
	export default{
		props:['storelist'],
		components: {
			StoreItem,
		} 
	}
</script>

<style lang="less" scoped>
	
</style>