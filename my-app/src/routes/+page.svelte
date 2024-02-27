<script lang='ts'>
	import { Autocomplete, popup, ProgressBar, AppBar } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption, PopupSettings  } from '@skeletonlabs/skeleton';
	import { Alert } from 'flowbite-svelte';
	import Card from '$lib/images/card.svelte'
	import { supabase } from '$lib/images/supabaseClient';

	export let data;

	let searching = false;
	let searched = false;

	// switch to using result array instead of counter
	let results = ['filler', 'filler'];

	//Temp values to fill out later
	let dept_input = '';
	let number_input = '';
	let teacher_input = '';
	let class_dept_list:  AutocompleteOption<string> [] = [
		{label: 'CSCI', value:'CSCI'}, 
		{label: 'HASS', value:'HASS'} 
	];
	let class_number_list:  AutocompleteOption<string> [] = [
		{label: '101', value:'101'}, 
		{label: '102', value:'102'} 
	];
	let teacher_list:  AutocompleteOption<string> [] = [
		{label: 'Bonkers McBonk', value:'Bonkers McBonk'}, 
		{label: 'Zippy Wow III', value:'Zippy Wow III'} 
	];

	function onDeptSelect(event: CustomEvent<AutocompleteOption<string>>): void {
		dept_input = event.detail.label;
	}

	function onNumberSelect(event: CustomEvent<AutocompleteOption<string>>): void {
		number_input = event.detail.label;
	}
	function onTeacherSelect(event: CustomEvent<AutocompleteOption<string>>): void {
		teacher_input = event.detail.label;
	}


	let popupSettingsDept: PopupSettings = {
		event: 'click',
		target: 'popupAutocompleteDept',
		placement: 'bottom',
	};

	let popupSettingsNum: PopupSettings = {
		event: 'click',
		target: 'popupAutocompleteNum',
		placement: 'bottom',
	};

	let popupSettingsTeacher: PopupSettings = {
		event: 'click',
		target: 'popupAutocompleteTeacher',
		placement: 'bottom',
	};

	function fetchData(){
		//actual functionality
		searching = true;
		//TODO: fill out with actually getting supabase data
		
		// setTimeout(() => {
			searching = false;
			searched = true;
		// }
		// , 5000);
		console.log(data.props);
	}


					
</script>

<svelte:head>
	<title>PeerToPeerNotes</title>
	<meta name="description" content="Information To Enter" />
</svelte:head>


<Alert dismissable class="card max-w-xs h-22 mx-auto p-4 bg-gray-300 shadow-md rounded-md space-x-4">
	<span class="block text-gray-700 font-bold mb-2 text-center p-2">Upload Notes</span>
	<span class="block text-gray-700 font-bold mb-2 text-center text-sm">Takes as little as 30 seconds!</span>
	<a href='/upload' class="btn w-full bg-blue-400 text-black p-2 rounded-md text-center">Upload</a>
</Alert>


<div>
	<h1>PeerToPeerNotes</h1>
</div>
			

<form on:submit|preventDefault={fetchData} class="max-w-2xl mx-auto p-8 bg-gray-300 shadow-md rounded-md grid grid-cols-2 space-x-4">
	<div class="mb-4">
		<label for="teacher_name" class="block text-gray-700 font-bold mb-2">Teacher Name: </label>
		<input
			class="input autocomplete border-0 bg-white p-2 mb-2"
			type="search"
			name="autocomplete-search-num"
			bind:value={teacher_input}
			placeholder="Neil Dantam"
			use:popup={popupSettingsTeacher}
		/>
		<div data-popup="popupAutocompleteTeacher" class="bg-gray-400 text-gray-700 mb-2 text-center w-70 p-2 rounded-md">
			<Autocomplete
				bind:input={teacher_input}
				options={teacher_list}
				on:selection={onTeacherSelect}
			/>
		</div>
	</div>
	<div class="mb-4">
		<label for="class" class="block text-gray-700 font-bold mb-2">Class Number: </label>
		<div class="mb-4 grid grid-cols-2 space-x-4">
			<input
				class="input autocomplete border-0 bg-white p-2 mb-2"
				type="search"
				name="autocomplete-search-dept"
				bind:value={dept_input}
				placeholder="CSCI"
				use:popup={popupSettingsDept}
			/>
			<div data-popup="popupAutocompleteDept" class="bg-gray-400 text-gray-700 mb-2 text-center w-50 p-2 rounded-md">
				<Autocomplete
					bind:input={dept_input}
					options={class_dept_list}
					on:selection={onDeptSelect}
				/>
			</div>
			<input
				class="input autocomplete border-0 bg-white p-2 mb-2"
				type="search"
				name="autocomplete-search-num"
				bind:value={number_input}
				placeholder="400"
				use:popup={popupSettingsNum}
			/>
			<div data-popup="popupAutocompleteNum" class="bg-gray-400 text-gray-700 mb-2 text-center w-50 p-2 rounded-md">
				<Autocomplete
					bind:input={number_input}
					options={class_number_list}
					on:selection={onNumberSelect}
				/>
			</div>
		</div>
	</div>

	<!-- Submit Button -->
	<div class="col-span-2 text-center">
		<button type="submit" class="w-30 bg-blue-400 text-black p-2 rounded-md mx-auto">Search</button>
	</div>
</form>
{#if searching}
<div>
	<ProgressBar meter="bg-sky-500" track=" bg-sky-500/30" class="w-10/12 mx-auto" value={undefined} />
</div>
{/if}

{#if searched}
<div class='m-4 border-b border-t border-black mx-auto w-full'>
	<h2 class="text-center text-4xl">Results</h2>
</div>
{/if}

{#if searched}
<div class='m-4 '>
	{#each results as item}
	<div class='m-4 '>
		<Card />
	</div>
	{/each}
</div>
		
{/if}

<style>
	h1 {
		width: 100%;
		color: black;
		text-align: center;
		padding: 4rem;
	}

	h2 {
		width: 100%;
		color: black;
		text-align: center;
	}

</style>