<script>
	import './styles.css';
</script>

<div class="cont">
	<div class="gradient-1" />
	<div class="gradient-2" />
	<div class="gradient-3" />
	<div class="wrap">
		<div class="header">
			<div class="blob">VS</div>
			<div class="name">Vasu Singh,</div>
			<div class="work">student & developer</div>
		</div>

		<div class="intro">Hello👋, I'm Vasu a Web-Developer from India.</div>

		<div class="description">
			Hello, I am a B.Tech Computer Science Engineering (CSE) student who has a passion for open
			source projects and software development.
		</div>

		<div class="interset">
			I have a particular interest in JavaScript frameworks like <span class="react">React</span>,
			<span class="svelte">Svelte</span>, <span class="qwik">Qwik</span>,
			<span class="solid">Solid</span> and libraries within the JavaScript ecosystem. I believe in the
			power of open source collaboration and actively contribute to open source projects whenever possible.
		</div>

		<div class="learning">
			Currently, I am expanding my knowledge and skills by learning Rust, a systems programming
			language known for its performance, safety, and concurrency features.
		</div>

		<a
			class="gmail"
			href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vasucp1207@gmail.com"
			target="_blank"><li class="contact">Contact Me!</li></a
		>

		<div class="open-source">My Open Source Projects</div>

		<div class="projects">
			<a target="_blank" href="https://github.com/jotaijs/jotai-tutorial"><li>Jotai-Tutorial</li></a
			>
			<a target="_blank" href="https://github.com/vasucp1207/sveltronics"><li>Sveltronics</li></a>
			<a target="_blank" href="https://github.com/vasucp1207/retro-kit"><li>Retro-Kit</li></a>
			<a target="_blank" href="https://github.com/vasucp1207/appwrite-web-react"
				><li>Appwrite-Web-React</li></a
			>
			<a target="_blank" href="https://github.com/vasucp1207/qwik-table"><li>Qwik Table</li></a>
		</div>
	</div>
</div>

<style>
	.cont {
		display: flex;
		justify-content: center;
		margin: 0;
		padding: 0;
		font-family: 'LXGW WenKai Screen R', Public Sans, system-ui;
		font-weight: 20px;
		line-height: 1.5rem;
		letter-spacing: 0.5px;
	}
	.wrap {
		max-width: 700px;
		margin-top: 40px;
	}
	.blob {
		font-size: 30px;
		font-family: 'Courier New', Courier, monospace;
		display: flex;
		color: white;
		justify-content: center;
		align-items: center;
		background-image: linear-gradient(90deg, #11998e, #38ef7d);
		filter: drop-shadow(0 0 35px #11998e);
		margin-right: 8px;
		height: 70px;
		width: 70px;
		animation-name: blobby;
		animation-duration: 7s;
		animation-iteration-count: infinite;
		animation-timing-function: ease;
		animation-direction: alternate;
		mix-blend-mode: luminosity;
	}
	@keyframes blobby {
		0% {
			border-radius: 50%;
		}
		20% {
			border-radius: 41% 59% 41% 59% / 53% 51% 49% 47%;
			transform: rotate(36deg);
		}
		40% {
			transform: rotate(72deg);
			border-radius: 43% 57% 41% 59% / 53% 52% 48% 47%;
		}
		80% {
			border-radius: 48% 52% 41% 59% / 48% 58% 42% 52%;
			transform: rotate(108deg);
		}
		100% {
			transform: rotate(144deg);
			border-radius: 54% 46% 60% 40% / 43% 55% 45% 57%;
		}
	}
	.name {
		font-weight: bold;
		color: var(--dark-gray);
	}
	.work {
		font-weight: normal;
		color: var(--light-gray);
	}
	.header {
		display: flex;
		align-items: center;
		gap: 5px;
	}
	.intro {
		font-weight: bold;
		font-size: 1.8rem;
		color: var(--dark-gray);
		margin-top: 1rem;
	}
	.description {
		margin-top: 1rem;
		color: var(--light-black);
		margin-bottom: 1rem;
	}
	.interset {
		margin-top: 1rem;
		color: var(--light-black);
		margin-bottom: 1rem;
	}
	span {
		font-weight: 500;
	}
	.react {
		background: -webkit-linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.svelte {
		background: -webkit-linear-gradient(315deg, #ee9617 0%, #fe5858 74%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.solid {
		background: -webkit-linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.qwik {
		background: -webkit-linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.gmail {
		font-size: 18px;
		font-weight: 500;
		margin-top: 1rem;
		background: -webkit-linear-gradient(315deg, #00bfb2 0%, #028090 74%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.open-source {
		font-size: 1.5rem;
		font-weight: bold;
		color: var(--dark-gray);
		margin-top: 1.3rem;
	}
	.projects {
		margin-top: 1rem;
	}
	a {
		width: max-content;
		display: flex;
		text-decoration: none;
	}
	li {
		position: relative;
		text-decoration: 1px underline #38ef7d;
		background: -webkit-linear-gradient(90deg, #11998e, #38ef7d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 500;
		cursor: cursor;
	}
	.contact {
		margin-left: -25px;
	}
	.contact::marker {
		color: white !important;
	}
	.contact:after {
		left: 23px;
	}
	li:hover {
		transform: skew(-10deg);
		transition: 0.2s;
		text-shadow: 0 0px 30px rgba(56, 239, 125, 0.7), 0 1px 30px rgba(56, 239, 125, 0.7);
		z-index: 10;
	}
	li::after {
		position: absolute;
		content: '';
		width: 10px;
		height: 3px;
		display: block;
		transition: 0.4s;
		background-image: linear-gradient(90deg, #11998e, #38ef7d);
		bottom: 2px;
		left: 23px;
		opacity: 0;
	}
	li::before {
		position: absolute;
		content: '';
		width: 10px;
		height: 3px;
		display: block;
		transition: 0.4s;
		background-image: linear-gradient(90deg, #38ef7d, #11998e);
		bottom: 2px;
		right: 0;
		opacity: 0;
	}
	li:hover::after {
		width: 40%;
		opacity: 1;
	}
	li:hover::before {
		width: 60%;
		opacity: 1;
	}
	li::marker {
		color: #11998e;
	}
</style>
