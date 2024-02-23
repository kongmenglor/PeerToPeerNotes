<script>
    import { Ratings, popup } from '@skeletonlabs/skeleton';
    import type { PopupSettings } from '@skeletonlabs/skeleton';
    import { icons } from './icons';
    
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
    <button class="w-full bg-blue-500 text-black p-2 rounded-md" use:popup={popupClick}>Rate Notes</button>
</div>

<div class="card p-4 bg-gray-500 text-black" data-popup="popupClick">
    <Ratings value={rating_value.current} max={rating_value.max} interactive on:icon={iconClick}>
        <svelte:fragment slot="empty">{@html icons.starEmpty}</svelte:fragment>
        <svelte:fragment slot="full">{@html icons.starFull}</svelte:fragment>
    </Ratings>
	<div class="arrow variant-filled-primary" />
</div>