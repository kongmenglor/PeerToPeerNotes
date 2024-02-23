<script lang='ts'>
	import { Autocomplete, popup, FileDropzone, ProgressBar } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption, PopupSettings  } from '@skeletonlabs/skeleton';

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

</script>

<svelte:head>
	<title>PeerToPeerNotes</title>
	<meta name="description" content="Information To Enter" />
</svelte:head>

<div>
	<h1>PeerToPeerNotes</h1>
</div>

<div>

	<form class="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-md grid grid-cols-2">
		<div class="mb-4">
			<label for="teacher_name" class="block text-gray-700 font-bold mb-2">Teacher Name: </label>
			<input
				class="input autocomplete"
				type="search"
				name="autocomplete-search-num"
				bind:value={teacher_input}
				placeholder="Neil Dantam"
				use:popup={popupSettingsTeacher}
			/>
			<div data-popup="popupAutocompleteTeacher" class="bg-gray-300 block text-gray-700 mb-2 text-center w-30 p-2 border rounded-md">
				<Autocomplete
					bind:input={teacher_input}
					options={teacher_list}
					on:selection={onTeacherSelect}
				/>
			</div>
		</div>
		<div class="mb-4">
			<label for="class" class="block text-gray-700 font-bold mb-2">Class Number: </label>
			<div class="mb-4 grid grid-cols-2">
				<input
					class="input autocomplete"
					type="search"
					name="autocomplete-search-dept"
					bind:value={dept_input}
					placeholder="CSCI"
					use:popup={popupSettingsDept}
				/>
				<div data-popup="popupAutocompleteDept" class="bg-gray-300 block text-gray-700 mb-2 text-center w-30 p-2 border rounded-md">
					<Autocomplete
						bind:input={dept_input}
						options={class_dept_list}
						on:selection={onDeptSelect}
					/>
				</div>
				<input
					class="input autocomplete"
					type="search"
					name="autocomplete-search-num"
					bind:value={number_input}
					placeholder="400"
					use:popup={popupSettingsNum}
				/>
				<div data-popup="popupAutocompleteNum" class="bg-gray-300 block text-gray-700 mb-2 text-center w-30 p-2 border rounded-md">
					<Autocomplete
						bind:input={number_input}
						options={class_number_list}
						on:selection={onNumberSelect}
					/>
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