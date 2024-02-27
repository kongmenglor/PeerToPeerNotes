<script lang='ts'>
	import "../app.pcss";
    import { AppShell, AppBar } from '@skeletonlabs/skeleton';
    import '../app.pcss';
    import './styles.css';
    import { page } from '$app/stores';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	import home_button from '$lib/images/House_Icon.svg';
			


</script>

<AppShell>
	<svelte:fragment slot="header">
		<!-- Insert the list: -->
			<ul class="horizontal">
				<!-- Change this out for home button when possible -->
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/">
						<img class='right-px' src={home_button} alt="home_button" style="width:40px; height: 40px;"/>
					</a>
				</li>
				
				<li aria-current={$page.url.pathname === '/upload' ? 'page' : undefined}>
					<a type="button" class="btn variant-filled bg-gray-300 block text-center border rounded-md gap-4" href="/upload">Upload Notes</a>
				</li>
			</ul>
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
		list-style: none;
		display: flex;
	}

	a.btn:hover{
		background-color: #9ae6b4; /* change to your desired color */
	}

</style>