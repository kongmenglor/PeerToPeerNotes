<script lang='ts'>
	import { ProgressBar } from '@skeletonlabs/skeleton';
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import { Autocomplete } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption } from '@skeletonlabs/skeleton';

	//Temp values to fill out later
	let dept_input = '';
	let number_input = '';
	let class_dept_list:  AutocompleteOption<string> [] = [
		{label: 'CSCI', value:'CSCI'}, 
		{label: 'HASS', value:'HASS'} 
	];
	let class_number_list:  AutocompleteOption<string> [] = [
		{label: '101', value:'101'}, 
		{label: '102', value:'102'} 
	];

	function onDeptSelect(event: CustomEvent<AutocompleteOption<string>>): void {
		dept_input = event.detail.label;
	}

	function onNumberSelect(event: CustomEvent<AutocompleteOption<string>>): void {
		number_input = event.detail.label;
	}


</script>

<svelte:head>
	<title>Unnamed Notes App - Upload</title>
	<meta name="description" content="Information To Enter" />
</svelte:head>

<FileDropzone name="file_in" accept=".docx, .pdf, .png" class="text-4xl max-w-xl mx-auto p-8 bg-white shadow-md rounded-md p-4">
	<svelte:fragment slot="message">Drag and Drop file... <br> (png, docx, pdf)</svelte:fragment>
</FileDropzone>

<div>

	<form class="max-w-xl mx-auto p-8 bg-white shadow-md rounded-md">
		<div class="mb-4 grid grid-cols-2">
			<label for="class" class="bg-gray-300 block text-gray-700 mb-2 text-center w-30 p-2 border rounded-md">Class Number: </label>
			<div class="grid grid-cols-2">
				<input class="input bg-gray-100 w-15 border rounded-md" type="search" id="class_dept" name="class_dept" bind:value={dept_input} placeholder="CSCI" />
				<Autocomplete bind:input={dept_input} options={class_dept_list} on:selection={onDeptSelect}/>
				<input class="input bg-gray-100 w-15 border rounded-md" type="search" id="class_number" name="class_number" bind:value={number_input} placeholder="400" />
				<Autocomplete bind:input={number_input} options={class_number_list} on:selection={onNumberSelect}/>
			</div>
		</div>
		<div class="mb-4 grid grid-cols-2">
			<label for="teacher_name" class="bg-gray-300 block text-gray-700 mb-2 text-center w-30 p-2 border rounded-md">Teacher: </label>
			<input type="text" id="teacher_name" name="teacher_name" class="bg-gray-100 w-30 border rounded-md">
		</div>

		<!-- Submit Button -->
		<div class="mt-6 p-8 grid grid-cols-1 gap-2">
			<button type="submit" class="w-full bg-gray-300 text-black p-2 rounded-md">Upload</button>
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