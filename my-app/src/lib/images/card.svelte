<script lang='ts'>
    import { Ratings, popup } from '@skeletonlabs/skeleton';
    import type { PopupSettings } from '@skeletonlabs/skeleton';
    import bar_empty from '$lib/images/LoadingBarEmpty.svg'
    import bar_full from '$lib/images/LoadingBarFull.svg'
    import download_button from '$lib/images/download_button.png';
    
    export let card_data = {dept: 'DEFAULT', num: 'DEFAULT', teacher: 'DEFAULT', upload_date: new Date(2024, 0, 1), current_rating: 0.1};

    let rating_value = {current: card_data.current_rating, max: 5};


    function iconClick(event: CustomEvent<{index:number}>): void {
    	rating_value.current = event.detail.index;
    }

    const popupClick: PopupSettings = {
        event: 'click',
        target: 'popupClick',
        placement: 'bottom'
    };
					
						
</script>

<div class="p-4 bg-gray-300 text-black">
    <div class='mb-4 grid grid-cols-2'>
        <label for="temp" class="block text-black font-bold mb-2 left-1">{card_data.dept} {card_data.num} - {card_data.teacher} </label>
        <label for="temp" class="block text-black font-bold mb-2 right-1">{card_data.upload_date}</label>
    </div>
    <div class='mb-4 grid grid-cols-3 space-x-4'>
        <label for="temp" class="block text-black bg-green-300 font-bold mb-2">{rating_value.current}/{rating_value.max} </label>
        <button class="w-full bg-blue-500 text-black p-2 rounded-md" use:popup={popupClick}>Rate Notes</button>
        <a href="/">
            <img class='right-px' src={download_button} alt="home_button" style="width:30px; height: 30px;"/>
        </a>
    </div>
</div>

<div class="card p-4 bg-gray-500 text-black" data-popup="popupClick">
    <Ratings value={rating_value.current} max={rating_value.max} interactive on:icon={iconClick}>
        <svelte:fragment slot="empty">{@html bar_empty}</svelte:fragment>
        <svelte:fragment slot="full">{@html bar_full}</svelte:fragment>
    </Ratings>
	<div class="arrow variant-filled-primary" />
</div>