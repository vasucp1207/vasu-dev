<script>
	import '../styles.css';

	const svg = `<svg class="css-smrd4p" viewBox="0 0 576 512"><path d="M540.9 56.77c-45.95-16.66-90.23-24.09-129.1-24.75-60.7.94-102.7 17.45-123.8 27.72-21.1-10.27-64.1-26.8-123.2-27.74-40-.05-84.4 8.35-129.7 24.77C14.18 64.33 0 84.41 0 106.7v302.9c0 14.66 6.875 28.06 18.89 36.8 11.81 8.531 26.64 10.98 40.73 6.781 118.9-36.34 209.3 19.05 214.3 22.19C277.8 477.6 281.2 480 287.1 480c6.52 0 10.12-2.373 14.07-4.578 10.78-6.688 98.3-57.66 214.3-22.27 14.11 4.25 28.86 1.75 40.75-6.812C569.1 437.6 576 424.2 576 409.6V106.7c0-22.28-14.2-42.35-35.1-49.93zM272 438.1c-24.95-12.03-71.01-29.37-130.5-29.37-27.83 0-58.5 3.812-91.19 13.77-4.406 1.344-9 .594-12.69-2.047C34.02 417.8 32 413.1 32 409.6V106.7c0-8.859 5.562-16.83 13.86-19.83C87.66 71.7 127.9 63.95 164.5 64c51.8.81 89.7 15.26 107.5 23.66V438.1zm272-28.5c0 4.375-2.016 8.234-5.594 10.84-3.766 2.703-8.297 3.422-12.69 2.125C424.1 391.6 341.3 420.4 304 438.3V87.66c17.8-8.4 55.7-22.85 107.4-23.66 35.31-.063 76.34 7.484 118.8 22.88 8.2 3 13.8 10.96 13.8 19.82v302.9z"></path></svg>`;
</script>

<div class="blog-wrap">
	<!-- <div class="gradient-1" />
	<div class="gradient-2" /> -->
	<div class="blog-home-cont">
		<div class="blogs-head">Blogs</div>

		<div class="blog-list">
			<a href="/blogs/preact-appwrite" class="blog-des">
				<div class="blog-name">Making a Todolist with preact-js using appwrite as a backend</div>
				<div class="time">Oct 8, 2022 {@html svg} 11 min read</div>
			</a>
			<a href="/blogs/next-appwrite" class="blog-des">
				<div class="blog-name">Build a Chat app with Appwrite and Nextjs</div>
				<div class="time">Oct 27, 2022 {@html svg}9 min read</div>
			</a>
		</div>
	</div>
</div>

<style>
	.blog-wrap {
		display: flex;
		justify-content: center;
	}
	.blog-home-cont {
		margin-top: 60px;
		width: 700px;
	}
	.blogs-head {
		font-size: 2.5rem;
		font-weight: bold;
		background: -webkit-linear-gradient(90deg, #11998e, #38ef7d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-decoration: underline 2px #38ef7d;
	}
	.blog-list {
		margin-top: 3rem;
		display: flex;
		flex-direction: column;
	}
	.blog-des {
		color: var(--light-black);
		font-size: 17px;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;
		border-radius: 10px;
		text-decoration: none;
	}
	.blog-des:hover {
		color: #11998e;
		background: #e1efe6;
		cursor: pointer;
	}
	.time {
		font-size: 14px;
		color: var(--light-gray);
		display: flex;
		align-items: center;
	}
	.blog-name {
		position: relative;
		width: fit-content;
	}
	.blog-name:hover {
		transform: skew(-10deg);
		transition: 0.2s;
		text-shadow: 0 0px 30px rgba(56, 239, 125, 0.7), 0 1px 30px rgba(56, 239, 125, 0.7);
		z-index: 10;
	}
	.blog-name::after {
		position: absolute;
		content: '';
		width: 10px;
		height: 3px;
		display: block;
		transition: 0.4s;
		background-image: linear-gradient(90deg, #11998e, #38ef7d);
		bottom: -2px;
		left: 0;
		opacity: 0;
	}
	.blog-name::before {
		position: absolute;
		content: '';
		width: 10px;
		height: 3px;
		display: block;
		transition: 0.4s;
		background-image: linear-gradient(90deg, #38ef7d, #11998e);
		bottom: -2px;
		right: 0;
		opacity: 0;
	}
	.blog-name:hover::after {
		width: 50%;
		opacity: 1;
	}
	.blog-name:hover::before {
		width: 50%;
		opacity: 1;
	}
</style>
