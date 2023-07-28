<script>
	import './styles.css';
</script>

<div class="header">
	<span><a href="/" class="initials"></a></span>
	<div class="links">
		<a href="/">Home</a>
		<a href="/blogs">Blogs</a>
		<a href="https://github.com/vasucp1207">Github</a>
	</div>
</div>

<style>
	.header {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		height: 60px;
		align-items: center;
		font-size: 17px;
	}
	a {
		text-decoration: none;
	}
	.initials {
		text-decoration: none;
		cursor: pointer;
		font-size: 27px !important;
		font-weight: 100;
		margin-left: 30px;
	}
	.links {
		display: flex;
		align-items: center;
		gap: 2rem;
		cursor: pointer;
		margin-right: 30px;
	}
	.links > a {
		position: relative;
		font-weight: 400;
		color: var(--text-black);
		text-decoration: underline 2px var(--underline);
		padding: 8px;
	}
	.links > a:hover {
		color: black;
		text-decoration: underline 2px black;
	}
</style>
