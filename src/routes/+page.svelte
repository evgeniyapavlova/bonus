<script>
	import AllBlocks from '../components/AllBlocks.svelte';
	import meta_img from '$lib/images/meta__img.jpg';

	const title = 'Congratulations!';
	const desc = 'You have been selected as a winner';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={meta_img} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={meta_img} />
</svelte:head>

<AllBlocks lang="en" />
