<script lang='ts'>
	import { Autocomplete, popup, ProgressBar } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption, PopupSettings  } from '@skeletonlabs/skeleton';
	import Card from '$lib/images/card.svelte'
	import { supabase } from '$lib/images/supabaseClient';

	export let data;

	let fetchedData;

	let searching = false;
	let searched = false;
	let popup_visible = true;

	//Temp values to fill out later
	let dept_input = '';
	let number_input = '';
	let teacher_input = '';
	let class_dept_list:  AutocompleteOption<string> [] = data.props.departments;
	let class_number_list:  AutocompleteOption<string> [] = data.props.class_numbers;
	let teacher_list:  AutocompleteOption<string> [] = data.props.professors;
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

	async function fetchNotes(department: string, class_number: string, professor: string) {
		//if prof is entered
		if(professor.length > 0){
			const { data } = await supabase.schema('all_info').from('notes').select('department, class_number, professor, document_name, upload_date, current_rating').eq('department', department).eq('class_number', class_number).eq('professor', professor);
			//if prof is entered and we get nothing for that prof, class number, and dept
			if(data?.length == 0){
				const { data } = await supabase.schema('all_info').from('notes').select('department, class_number, professor, document_name, upload_date, current_rating').eq('department', department).eq('class_number', class_number);
			}
		}
		//if no prof is entered
		else{
			const { data } = await supabase.schema('all_info').from('notes').select('department, class_number, professor, document_name, upload_date, current_rating').eq('department', department).eq('class_number', class_number);
		}
		//const { data } = await supabase.schema('all_info').from('notes').select('department, class_number, professor, document_name');
		fetchedData = data;
	}

	async function handleSubmit(){
		//actual functionality
		searching = true;
		//Getting supabase data
		await fetchNotes(dept_input, number_input, teacher_input);
		setTimeout(() => {
			searching = false;
			searched = true;
		}
		, 5000);
		//get rid of this later
		//console.log(data.props);
	};
	
</script>

<svelte:head>
	<title>PeerToPeerNotes</title>
	<meta name="description" content="Information To Enter" />
</svelte:head>


{#if popup_visible}

<aside class="alert max-w-xs mx-auto h-22 p-4 bg-gray-300 shadow-md rounded-md space-x-4">
	<div class='alert-message'>
		<span class="block text-gray-700 font-bold mb-2 text-center p-2">Upload Notes</span>
		<span class="block text-gray-700 font-bold mb-2 text-center text-sm">Takes as little as 30 seconds!</span>
	</div>
	<div class='alert-actions'>
		<a href='/upload' class="btn w-full bg-blue-400 text-black p-2 rounded-md text-center text-lg">Upload</a>
		<button class="btn w-full bg-red-400 text-black p-2 rounded-md text-center text-sm" on:click={() => {popup_visible = false;}}>Dismiss</button>
	</div>
</aside>
{/if}

<div>
	<h1>PeerToPeerNotes</h1>
</div>
			

<form on:submit|preventDefault={handleSubmit} class="max-w-2xl mx-auto p-8 bg-gray-300 shadow-md rounded-md grid grid-cols-2 space-x-4">
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
	{#each fetchedData as item}
	<div class='m-4 '>
		<Card card_dept={item.department} card_num={item.class_number} card_prof={item.professor} card_upload_date={item.upload_date} card_current_rating={item.current_rating} card_document_name={item.document_name}/>
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