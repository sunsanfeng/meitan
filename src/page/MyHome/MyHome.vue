<template>
	<div class="home">
		<!-- 表头 -->
		<div class="content">
			<div class="top">
				<div class="toptext">外卖</div>
				<div class="location">
					<van-icon name="location-o" />
					<span>行运无限大（北京）餐饮有限公司</span>
					<van-icon name="arrow" />
				</div>
			</div>
			<!-- 搜索框 -->
			<div class="seach">
				<van-search
					show-action
					placeholder="请输入搜索关键词"
				>
				<template #action >
					<div  >搜索</div>
				</template>
				</van-search>
			</div>
			<!-- 栏目组 -->
			<div class="classify">
				<div class="bigclassify">
					<div v-for="(item,i) in big_classify" :key="i">
						<svg class="icon" aria-hidden="true">
						    <use :xlink:href="`#${item.icon}`"></use>
						</svg>
						{{item.name}}
					</div>
				</div>
				<div class="smallclassify">
					<div v-for="(item,i) in small_classify" :key="i">
						<svg class="icon" aria-hidden="true">
						    <use :xlink:href="`#${item.icon}`"></use>
						</svg>
						{{item.name}}
					</div>
				</div>
			</div>
			<!-- 项目组标签导航 -->
			<div class="tab">
				<van-tabs class="van-tabs" >
					<van-tab v-for="item,i in centent_nav_list" :title="`${item.tab}`">
						<Store :storelist='item.data' />
					</van-tab>
					
				</van-tabs>
			</div>
			
			
			<!-- 店铺列表 -->
			<div class="shoper">
				<div>
					
				</div>
			</div>
		</div>
		<Foot />
	</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import Foot from '../../components/Foot.vue';
import Store from './components/Store.vue';
	export default{
		components:{
			Foot,
			Store,
		},
		setup() {
			let data = reactive({
			  big_classify: [
				{ name: "美食", icon: "icon-meishi" },
				{ name: "甜点饮品", icon: "icon-xiuxian" },
				{ name: "超市便利", icon: "icon-fuwu-copy" },
				{ name: "生鲜果蔬", icon: "icon--" },
				{ name: "线上药房", icon: "icon-yiyao-yiyaoxiang" },
			  ],
			  small_classify: [
				{ name: "午餐", icon: "icon-meishixiaochi-copy" },
				{ name: "足浴", icon: "icon-zuyuzuliao" },
				{ name: "骑行", icon: "icon-cycleqiche-copy" },
				{ name: "电影", icon: "icon-dianying" },
				{ name: "火车票", icon: "icon-huochepiao-copy" },
				{ name: "美发", icon: "icon-meifa" },
				{ name: "酒店住宿", icon: "icon-jiudianzhusu" },
				{ name: "跑腿", icon: "icon-paotuiAPP" },
				{ name: "打车", icon: "icon-dache-copy" },
				{ name: "旅游景点", icon: "icon-lvyoujingdian" },
			  ],
			  centent_nav_list: [
				{
				  tab: "天天神券",
				  data: [
					{
					  pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
					  title: "鱼拿酸菜鱼",
					  sales: "2888",
					  price: "20",
					  label: ["门店上新", "很下饭"],
					},
					{
					  pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
					  title: "隆江猪脚饭",
					  sales: "2888",
					  price: "20",
					  label: ["门店上新", "很下饭"],
					},
					{
					  pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
					  title: "鱼拿酸菜鱼",
					  sales: "2888",
					  price: "20",
					  label: ["门店上新", "很下饭"],
					},
					{
					  pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
					  title: "鱼拿酸菜鱼",
					  sales: "2888",
					  price: "20",
					  label: ["门店上新", "很下饭"],
					},
				  ],
				},
				{
				  tab: "减配送费",
				  data: [
					{
					  pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
					  title: "鱼拿酸菜鱼",
					  sales: "2888",
					  price: "20",
					  label: ["门店上新", "很下饭"],
					},
				  ],
				},
				{
				  tab: "点评高分",
				  data: [
					{
					  pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
					  title: "鱼拿酸菜鱼",
					  sales: "2888",
					  price: "20",
					  label: ["门店上新", "很下饭"],
					},
					{
					  pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
					  title: "鱼拿酸菜鱼",
					  sales: "2888",
					  price: "20",
					  label: ["门店上新", "很下饭"],
					},
				  ],
				},
				{
				  tab: "会员满减",
				  data: [
					{
					  pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
					  title: "鱼拿酸菜鱼",
					  sales: "2888",
					  price: "20",
					  label: ["门店上新", "很下饭"],
					},
					{
					  pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
					  title: "鱼拿酸菜鱼",
					  sales: "2888",
					  price: "20",
					  label: ["门店上新", "很下饭"],
					},
				  ],
				},
			  ],
			})
			return {
				...toRefs(data),
			}
		}
	}
</script>

<style lang="less" scoped>
	/deep/ .van-tabs__nav{
		border-radius: 10px;
	}
	.home{
		display: flex;
		flex-flow: column;
		height: 100%;
		.content{
			flex: 1;
			overflow-y: auto;
		}
		.top{
			display: flex;
			padding: 10px 15px 25px 15px;
			justify-content: space-between;
			background-image: linear-gradient(#ffc400,#fff);
			align-items: center;
			.toptext{
				font-size: 25px;
			}
			.location{
				font-size: 15px;
			}
		}
		.classify{
			padding: 10px 0;
			.bigclassify{
				display: flex;
				div{
					flex: 1;
					display: flex;
					justify-content: center;
					flex-flow: column;
					align-items: center;
					font-size: 14px;
					.icon{
						width: 40px;
						height: 40px;
						margin-top: 5px;
					}
				}
			}
			.smallclassify{
				margin-top: 10px;
				display: flex;
				flex-wrap: wrap;
				div{
					width: 20%;
					display: flex;
					justify-content: center;
					flex-flow: column;
					align-items: center;
					font-size: 12px;
					.icon{
						width: 30px;
						height: 30px;
						margin-top: 5px;
					}
				}
			}
		}
		.tab{
			padding: 0 20px 10px;
		}
	}
</style>