<script>
</script>

<div class="app">
	<div class='top-line' />
	<main>
		<slot />
	</main>

	<footer>
		<div class='footer'>
			<a href='https://twitter.com/vasucp1207' target='_blank'>Twitter</a>
			<a href='https://github.com/vasucp1207' target='_blank'>Github</a>
			<a href='/blogs'>Blog</a>
		</div>
	</footer>
</div>

<style>
	.top-line {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 5px;
		width: 100vw;
		background-color: #6b0f1a;
		background-image: linear-gradient(315deg, #6b0f1a 0%, #b91372 74%);
	}
	footer {
		font-family: Public Sans, system-ui;
		display: flex;
		justify-content: center;
	}
	.footer {
		margin-top: 50px;
		width: 700px;
		display: flex;
		justify-content: space-around;
		text-decoration: underline 2px #eaeaef;
	}
	.footer>a {
		cursor: alias;
		background: -webkit-linear-gradient(right, #000, #b91372);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 500;
		color: white;
		padding: 4px;
		border-radius: 8px;
	}
</style>
