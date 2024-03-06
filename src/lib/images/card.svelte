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
    export let card_upload_date = '';
    export let card_current_rating = 0.1;
    export let card_document_name = 'DEFAULT';

    let date_present = false;
    let number_downloads = 0;
    let rating_stats;
    let newRating;

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
        checkMetrics();
        setTimeout(() => {
            storeMetrics();
        }, 3000);


	}

    async function storeMetrics(){
        let today = new Date();
        console.log(today.getFullYear() + '-' + (today.getMonth() + 1)  + '-' + today.getDate());
        //if date already exists:
        if(date_present){
            await supabase.schema('all_info').from('daily_downloads').update({downloads: number_downloads + 1}).eq('date', today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
        }
        //if not, create date and make download number  = 1
        else{
            await supabase.schema('all_info').from('daily_downloads').insert({date: today.getFullYear() + '-' + (today.getMonth() + 1)  + '-' + today.getDate(), downloads: 1});
        }
    }

    async function checkMetrics(){
        let new_date = new Date();
        const { data } = await supabase.schema('all_info').from('daily_downloads').select('*').eq('date', new_date.getFullYear() + '-' + (new_date.getMonth() + 1) + '-' + new_date.getDate());
        console.log(data);
        if(data?.length != 0){
            date_present = true;
            number_downloads = data[0].downloads;
        }
    }

    async function getCurrentRatingStats(){
        const { data, error } = await supabase.schema('all_info').from('notes').select('current_rating, number_of_ratings').eq('document_name', card_data.document_name);
        rating_stats = data;
    }

    async function setNewRating(){
        rating_value.current = newRating;
        await supabase.schema('all_info').from('notes').update({number_of_ratings: rating_stats[0].number_of_ratings + 1, current_rating: newRating}).eq('document_name', card_data.document_name);
    }


    function iconClick(event: CustomEvent<{index:number}>): void {
        //change this later to calculate average and send it off to database
        getCurrentRatingStats();
        setTimeout(() => {
            let tempRating = event.detail.index;
            newRating = (rating_stats[0].current_rating + tempRating) / (rating_stats[0].number_of_ratings + 1);
    	    setNewRating();
        }, 5000);
    }

    const popupClick: PopupSettings = {
        event: 'click',
        target: 'popupClick',
        placement: 'bottom'
    };

    function fetchDate(val: string){
        let parts = val.split("-");
        let year = parts[0];
        let month = parts[1];
        let day = parts[2];

        let month_text = "";
        //year, month, day
        if(month == "01"){
            month_text = "Jan";
        }
        else if(month == "02"){
            month_text = "Feb"
        }
        else if(month == "03"){
            month_text = "Mar"
        }
        else if(month == "04"){
            month_text = "Apr"
        }
        else if(month == "05"){
            month_text = "May"
        }
        else if(month == "06"){
            month_text = "Jun"
        }
        else if(month == "07"){
            month_text = "Jul"
        }
        else if(month == "08"){
            month_text = "Aug"
        }
        else if(month == "09"){
            month_text = "Sep"
        }
        else if(month == "10"){
            month_text = "Oct"
        }
        else if(month == "11"){
            month_text = "Nov"
        }
        else if(month == "12"){
            month_text = "Dec"
        }

        let display_string = month_text + " " + day + ", " + year;
        return display_string;
    }
					
						
</script>

<div class="p-4 bg-gray-300 text-black">
    <div class='mb-2 grid grid-cols-2'>
        <label for="temp" class="block text-black font-bold mb-2 left-1">{card_data.dept} {card_data.num} - {card_data.teacher} </label>
        <!-- prod -->
        <label for="temp" style='float:right;' class="block text-black font-bold mb-2">{fetchDate(card_data.upload_date)}</label>
        <!-- dev -->
        <!-- <label for="temp" style='float:right;' class="block text-black font-bold mb-2">{card_data.upload_date} {card_data.upload_date}, {card_data.upload_date}</label> -->
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