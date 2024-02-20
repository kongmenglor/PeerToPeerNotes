<script>
	import "../app.pcss";
    import { AppShell, AppBar } from '@skeletonlabs/skeleton';
    import '../app.pcss';
    import './styles.css';
    import { page } from '$app/stores';


</script>

<AppShell>
	<svelte:fragment slot="header">
		<nav class="w-full">
		<!-- Insert the list: -->
			<ul class="horizontal">
				<!-- Change this out for home button when possible -->
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a style="color:white;" class="btn variant-filled-primary" href="/">Home</a>
				</li>
				
				<li aria-current={$page.url.pathname === '/upload' ? 'page' : undefined}>
					<a style="color:white;" class="btn variant-filled-primary" href="/upload">Upload Notes</a>
				</li>
			</ul>
		</nav>
		<!-- --- -->
	</svelte:fragment>
</AppShell>

<div class="app">

	<main>
		<slot></slot>
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	ul {
		background-color: #333;
		list-style: none;
		padding: 0;
		display: flex;

	}

</style>