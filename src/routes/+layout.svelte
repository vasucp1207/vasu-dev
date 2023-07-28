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
		background: black;
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
	}
	.footer > a {
		position: relative;
		cursor: pointer;
		font-weight: 400;
		color: var(--text-black);
		padding: 4px;
		border-radius: 8px;
		text-decoration: underline 2px var(--underline);
	}
	a:hover {
		color: black;
		text-decoration: underline 2px black;
	}
</style>
