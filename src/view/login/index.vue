<script lang="ts" setup name="Login">
	import LoginHeader from './components/login-header.vue'
	import LoginFooter from './components/login-footer.vue'
	import LoginForm from './components/login-form.vue'
  // 账号登录和二维码登录
	import { ref } from 'vue'
	const activeName = ref<'account' | 'qrcode'>('account')
</script>

<template>
	<LoginHeader>欢迎登录</LoginHeader>
	<section class="login-section">
		<div class="wrapper">
			<nav>
				<a
					href="javascript:;"
					:class="{ active: activeName === 'account' }"
					@click="activeName = 'account'"
					>账户登录</a
				>
				<a
					href="javascript:;"
					:class="{ active: activeName === 'qrcode' }"
					@click="activeName = 'qrcode'"
					>扫码登录</a
				>
			</nav>

			<!-- 表单 -->
			<div v-if="activeName === 'account'" class="account-box">
				<LoginForm></LoginForm>
			</div>
			<!-- 二维码 -->
			<div v-else class="qrcode-box">
				<img src="@/assets/images/qrcode.jpg" alt="" />
				<p>打开 <a href="javascript:;">海豹特卖App</a> 扫码登录</p>
			</div>
		</div>
	</section>
	<LoginFooter />
</template>

<style scoped lang="less">
	.login-section {
		background: url(@/assets/images/login-bg.png) no-repeat center / cover;
		height: 488px;
		position: relative;
		.wrapper {
			width: 380px;
			background: #fff;
			min-height: 400px;
			position: absolute;
			left: 50%;
			top: 54px;
			transform: translate3d(100px, 0, 0);
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
			nav {
				height: 55px;
				border-bottom: 1px solid #f5f5f5;
				display: flex;
				padding: 0 40px;
				text-align: right;
				align-items: center;
				a {
					flex: 1;
					line-height: 1;
					display: inline-block;
					font-size: 18px;
					position: relative;
					&:first-child {
						border-right: 1px solid #f5f5f5;
						text-align: left;
					}
					&.active {
						color: @sealColor;
						font-weight: bold;
					}
				}
			}
		}
	}
	.qrcode-box {
		text-align: center;
		padding-top: 40px;
		p {
			margin-top: 20px;
			a {
				color: @sealColor;
				font-size: 16px;
			}
		}
	}
</style>
