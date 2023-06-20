<script>
	import Header from './Header.svelte';
</script>

<div class="app">
	<div class="top-line" />
	<Header />
	<main>
		<slot />
	</main>

	<footer>
		<div class="footer">
			<a href="https://twitter.com/vasucp1207" target="_blank">Twitter</a>
			<a href="https://github.com/vasucp1207" target="_blank">Github</a>
		</div>
	</footer>
</div>

<style>
	.app {
		position: relative;
	}
	.top-line {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 5px;
		width: 100vw;
		background-image: linear-gradient(90deg, #11998e, #38ef7d);
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
		text-decoration: underline 1px #38ef7d;
	}
	.footer > a {
		position: relative;
		cursor: pointer;
		background: -webkit-linear-gradient(90deg, #11998e, #38ef7d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 500;
		color: white;
		padding: 4px;
		border-radius: 8px;
	}
	.footer > a:hover {
		transform: skew(-10deg);
		transition: 0.2s;
		text-shadow: 0 0px 30px rgba(56, 239, 125, 0.7), 0 1px 30px rgba(56, 239, 125, 0.7);
		z-index: 10;
	}
	.footer > a::after {
		position: absolute;
		content: '';
		width: 10px;
		height: 3px;
		display: block;
		transition: 0.4s;
		background-image: linear-gradient(90deg, #11998e, #38ef7d);
		bottom: 4px;
		opacity: 0;
	}
	.footer > a::before {
		position: absolute;
		content: '';
		width: 10px;
		height: 3px;
		display: block;
		transition: 0.4s;
		background-image: linear-gradient(90deg, #38ef7d, #11998e);
		bottom: 4px;
		right: 1px;
		opacity: 0;
	}
	.footer > a:hover::after {
		width: 50%;
		opacity: 1;
	}
	.footer > a:hover::before {
		width: 50%;
		opacity: 1;
	}
</style>
