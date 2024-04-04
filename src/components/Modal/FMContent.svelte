<script>
	import { getContext, onMount } from 'svelte';
	import Popup from './FMPopup.svelte';
	const { open } = getContext('simple-modal');

	onMount(() => {
		open(Popup);
	});
</script>
