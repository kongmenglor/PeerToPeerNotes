<script lang='ts'>
	import { Autocomplete, popup, FileDropzone, ProgressBar } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption, PopupSettings  } from '@skeletonlabs/skeleton';
	import { supabase } from '$lib/images/supabaseClient';

	export let data;

	let uploading = false;
	let uploaded = false;
	let input_file: FileList;
	let label_num = 1;

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

	async function placeInBucket() {
		const {data, error} = await supabase.storage.from('notes').upload('/' + dept_input + number_input + teacher_input + label_num, input_file[0]);
	}

	async function getMostRecentNumber(){
		const {data, error} = await supabase.schema('all_info').from('notes').select('document_name').eq('department', dept_input).eq('class_number', number_input).eq('professor', teacher_input);
		let sorting_list: string[] = [];
		if(data?.length > 0 ){
			data?.forEach((element) =>{
				sorting_list.push(element.document_name);
			})

			//after populating list, sort and find the biggest
			sorting_list.sort();
			let most_recent_name = sorting_list[sorting_list.length - 1];
			let most_recent_number = most_recent_name[most_recent_name.length - 1];
			label_num = parseInt(most_recent_number) + 1;
		}
	}

	async function addDeptToDataBase(dept: string){
		const { data, error } = await supabase.schema('all_info').from('departments').select('*').eq('department', dept);
		if(data?.length == 0){
			await supabase.schema('all_info').from('departments').insert({department: dept});
		}
	}

	async function addClassNumToDataBase(num: string){
		const { data, error } = await supabase.schema('all_info').from('class_numbers').select('*').eq('class_number', num);
		if(data?.length == 0){
			await supabase.schema('all_info').from('class_numbers').insert({class_number: num});
		}
	}


	async function addProfToDataBase(prof: string){
		const { data, error } = await supabase.schema('all_info').from('professors').select('*').eq('full_name', prof);
		if(data?.length == 0){
			await supabase.schema('all_info').from('professors').insert({full_name: prof});
		}
	}


	async function handleSubmit(){
		//comment this out for prod
		console.log(input_file);
		getMostRecentNumber()
		uploading = true;
		//put it into bucket
			setTimeout(async () => {
				placeInBucket();
				//put into database
				const { data } = await supabase.schema('all_info').from('notes').insert({department: dept_input, class_number: number_input, professor: teacher_input, document_name: dept_input + number_input + teacher_input + label_num, upload_date: new Date(), current_rating: 5});
			}
			, 5000);

			//check if department, class number, and prof already exist. If they don't add them to database
			addDeptToDataBase(dept_input);
			addClassNumToDataBase(number_input);
			addProfToDataBase(teacher_input);

		setTimeout(() => {
			uploading = false;
			uploaded = true;
		}
		, 5000);
	}



</script>

<svelte:head>
	<title>PeerToPeerNotes - Upload</title>
	<meta name="description" content="Information To Enter" />
</svelte:head>


{#if uploaded}
<aside class="alert max-w-xs mx-auto h-22 p-4 bg-gray-300 shadow-md rounded-md space-x-4">
	<div class='alert-message'>
		<span class="block text-gray-700 font-bold mb-2 text-center p-2">Notes uploaded successfully!</span>
	</div>
	<div class='alert-actions'>
		<button class="btn w-full bg-red-400 text-black p-2 rounded-md text-center text-sm" on:click={() => {uploaded = false;}}>Dismiss</button>
	</div>
</aside>
{/if}


<FileDropzone bind:files={input_file} name="file_in" accept=".docx, .pdf, .png" class="h-80 text-4xl max-w-xl mx-auto p-8 bg-white shadow-md rounded-md p-4">
	<svelte:fragment slot="message">Select or Drag and Drop one file... <br> (png, docx, pdf)</svelte:fragment>
</FileDropzone>

{#if input_file}
	<span class="block text-gray-700 font-bold mb-2 text-center p-2">File: {input_file[0].name} accepted!</span>
{/if}

<form on:submit|preventDefault={handleSubmit} class="max-w-xl mx-auto p-8 shadow-md rounded-md">
	<div class="mb-4 grid grid-cols-2 space-x-4">
		<label for="class" class="bg-gray-300 block text-gray-700 mb-2 text-center w-30 p-2 border rounded-md">Class Number: </label>
		<div class="grid grid-cols-2 space-x-4">
			<input
				class="input autocomplete border-0 bg-gray-300 rounded-md"
				type="search"
				name="autocomplete-search-dept"
				bind:value={dept_input}
				placeholder="CSCI"
				use:popup={popupSettingsDept}
			/>
			<div data-popup="popupAutocompleteDept" class="bg-gray-400 text-gray-700 mb-2 text-center w-30 p-2 rounded-md">
				<Autocomplete
					bind:input={dept_input}
					options={class_dept_list}
					on:selection={onDeptSelect}
				/>
			</div>
			<input
				class="input autocomplete border-0 bg-gray-300 rounded-md"
				type="search"
				name="autocomplete-search-num"
				bind:value={number_input}
				placeholder="400"
				use:popup={popupSettingsNum}
			/>
			<div data-popup="popupAutocompleteNum" class="bg-gray-400 text-gray-700 mb-2 text-center w-30 p-2 rounded-md">
				<Autocomplete
					bind:input={number_input}
					options={class_number_list}
					on:selection={onNumberSelect}
				/>
			</div>
		</div>
	</div>
	<div class="mb-4 grid grid-cols-2 space-x-4">
		<label for="teacher_name" class="bg-gray-300 block text-gray-700 mb-2 text-center w-30 p-2 border rounded-md">Teacher: </label>
		<input
			class="input autocomplete border-0 bg-gray-300 rounded-md"
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

	<!-- Submit Button -->
	<div class="mt-6 p-8 grid grid-cols-1 gap-2">
		<button type="submit" class="w-full bg-gray-300 text-black p-2 rounded-md">Upload!</button>
	</div>
</form>

{#if uploading}
<div>
	<ProgressBar meter="bg-sky-500" track=" bg-sky-500/30" class="w-10/12 mx-auto" value={undefined} />
</div>
{/if}