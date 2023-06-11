<script>
	import './styles.css';
</script>

<div class="header">
	<span><a href="/" class="initials">𝒱𝒮</a></span>
	<div class="links">
		<a href="/">Home</a>
		<a href="/blogs">Blogs</a>
		<a href="https://github.com/vasucp1207">Github</a>
	</div>
</div>

<style>
	.header {
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
		background: -webkit-linear-gradient(90deg, #11998e, #38ef7d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
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
		font-weight: 600;
		background: -webkit-linear-gradient(90deg, #11998e, #38ef7d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-decoration: underline 1px #38ef7d;
		padding: 8px;
	}
	.links > a:hover {
		transform: skew(-10deg);
		transition: 0.2s;
		text-shadow: 0 0px 30px rgba(56, 239, 125, 0.7), 0 1px 30px rgba(56, 239, 125, 0.7);
		z-index: 10;
	}
	.links > a::after {
		position: absolute;
		content: '';
		width: 10px;
		height: 3px;
		display: block;
		transition: 0.4s;
		background-image: linear-gradient(90deg, #11998e, #38ef7d);
		bottom: 8px;
		opacity: 0;
	}
	.links > a::before {
		position: absolute;
		content: '';
		width: 10px;
		height: 3px;
		display: block;
		transition: 0.4s;
		background-image: linear-gradient(90deg, #38ef7d, #11998e);
		bottom: 8px;
		right: 8px;
		opacity: 0;
	}
	.links > a:hover::after {
		width: 50%;
		opacity: 1;
	}
	.links > a:hover::before {
		width: 50%;
		opacity: 1;
	}
</style>
