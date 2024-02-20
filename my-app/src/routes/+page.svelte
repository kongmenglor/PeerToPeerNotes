<script lang='ts'>
	import { ProgressBar } from '@skeletonlabs/skeleton';

</script>

<svelte:head>
	<title>Unnamed Notes App</title>
	<meta name="description" content="Information To Enter" />
</svelte:head>

<div>
	<h1>Unnamed Notes App</h1>
</div>

<div>

	<form class="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-md grid grid-cols-2">
		<div class="mb-4">
			<label for="teacher_name" class="block text-gray-700 font-bold mb-2">Teacher Name: </label>
			<input type="text" id="teacher_name" name="teacher_name" class="w-62 p-2 border rounded-md">
		</div>
		<div class="mb-4">
			<label for="class" class="block text-gray-700 font-bold mb-2">Class Number: </label>
			<div class="mb-4 grid grid-cols-2">
				<div>
					<input type="text" id="class_dept" name="class_dept" class="w-36 p-2 border rounded-md">
				</div>
				<div>
					<input type="text" id="class_number" name="class_number" class="w-36 p-2 border rounded-md">
				</div>
			</div>
		</div>

		<!-- Submit Button -->
		<div class="mt-6 p-8 grid grid-cols-1 gap-2">
			<button type="submit" class="w-full bg-blue-500 text-black p-2 rounded-md">Search</button>
		</div>
	</form>
	<!-- {#if searching}
	<div>
		<ProgressBar meter="bg-sky-500" track=" bg-sky-500/30" class="w-full" value={undefined} />
	</div>
	{/if}

	{#if searched}
		<h1>Information Fields to Update: </h1>
		<form on:submit|preventDefault={updateSchema} class='max-w-xl mx-auto p-8 bg-white shadow-md rounded-md' id='reportGen'>
			<Template dataShown={dataToShow}/>
			<div class='mt-6 p-8 grid grid-cols-1 gap-2'>
				<button type='submit' class='w-full bg-red-500 text-white p-2 rounded-md'>Save</button>
			</div>
		</form>
			
	{/if} -->
</div>

<style>
	h1 {
		width: 100%;
		color: black;
		text-align: center;
		padding: 4rem;
	}

</style>