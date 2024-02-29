<script lang='ts'>
    import { Ratings, popup } from '@skeletonlabs/skeleton';
    import type { PopupSettings } from '@skeletonlabs/skeleton';
    import bar_empty from '$lib/images/LoadingBarEmpty.svg'
    import bar_full from '$lib/images/LoadingBarFull.svg'
    import download_button from '$lib/images/download_button.png';
	import { supabase } from './supabaseClient';

    export let card_dept = 'DEFAULT';
    export let card_num = 'DEFAULT';
    export let card_prof = 'DEFAULT';
    export let card_upload_date = new Date(2024, 0, 1);
    export let card_current_rating = 0.1;
    export let card_document_name = 'DEFAULT';

    let card_data = {dept: card_dept, num: card_num, teacher: card_prof, upload_date: card_upload_date, current_rating: card_current_rating, document_name: card_document_name};

    let rating_value = {current: card_data.current_rating, max: 5};

    	//download testin function
	async function downloadNotes(doc_name: string){
		const {data: signedUrlData, error: signedUrlError} = await supabase.storage.from('notes').createSignedUrl(doc_name, 60);
        if(signedUrlData != null){
            // Create a link element to trigger the download
            const link = document.createElement('a');
            link.href = signedUrlData.signedUrl;
            link.download = doc_name;

            // Append the link to the document and trigger the click event
            document.body.appendChild(link);
            link.click();

            // Remove the link from the document
            document.body.removeChild(link);
        }


	}


    function iconClick(event: CustomEvent<{index:number}>): void {
        //change this later to calculate average and send it off to database
    	rating_value.current = event.detail.index;
    }

    const popupClick: PopupSettings = {
        event: 'click',
        target: 'popupClick',
        placement: 'bottom'
    };

    function fetchMonth(val: Number){
        if(val == 0){
            return "Jan"
        }
        else if(val == 1){
            return "Feb"
        }
        else if(val == 2){
            return "Mar"
        }
        else if(val == 3){
            return "Apr"
        }
        else if(val == 4){
            return "May"
        }
        else if(val == 5){
            return "Jun"
        }
        else if(val == 6){
            return "Jul"
        }
        else if(val == 7){
            return "Aug"
        }
        else if(val == 8){
            return "Sep"
        }
        else if(val == 9){
            return "Oct"
        }
        else if(val == 10){
            return "Nov"
        }
        else if(val == 11){
            return "Dec"
        }
    }
					
						
</script>

<div class="p-4 bg-gray-300 text-black">
    <div class='mb-2 grid grid-cols-2'>
        <label for="temp" class="block text-black font-bold mb-2 left-1">{card_data.dept} {card_data.num} - {card_data.teacher} </label>
        <!-- prod -->
        <!-- <label for="temp" style='float:right;' class="block text-black font-bold mb-2">{fetchMonth(card_data.upload_date.getMonth())} {card_data.upload_date.getDay()}, {card_data.upload_date.getFullYear()}</label> -->
        <!-- dev -->
        <label for="temp" style='float:right;' class="block text-black font-bold mb-2">{card_data.upload_date} {card_data.upload_date}, {card_data.upload_date}</label>
    </div>
    <div class='mb-2 grid grid-cols-3 space-x-4'>
        <label for="temp" class="m-2 block text-black text-center bg-green-300 font-bold">{rating_value.current}/{rating_value.max} </label>
        <button class="w-full bg-blue-500 text-black p-2 rounded-md" use:popup={popupClick}>Rate Notes</button>
        <button style="margin-top: 20px; float: right;" on:click={() => downloadNotes(card_data.document_name)}>
            <img src={download_button} alt="download" style="width:30px; height: 30px; float: right;"/>
        </button>
    </div>
</div>

<div class="card p-4 bg-gray-500 w-30" data-popup="popupClick">
    <Ratings value={rating_value.current} max={rating_value.max} interactive on:icon={iconClick}>
        <svelte:fragment slot="empty">
            <img src={bar_empty} alt="empty"/>    
        </svelte:fragment>
        <svelte:fragment slot="full">
            <img src={bar_full} alt="full"/>          
        </svelte:fragment>
    </Ratings>
	<div class="arrow bg-gray-500-800-token" />
</div>