<script>
	import Intro from '../Intro.svelte';
	import Loader from '../Loader.svelte';
	import reviews_en from './reviews_en';
	import reviews_pt from './reviews_pt';
	export let lang;

	let reviews = lang === 'pt' ? reviews_pt : reviews_en;

	const content = {
		en: { like: 'Like', unlike: 'Unlike', reply: 'Reply', moreComms: 'Load 5 More Comments' },
		pt: {
			like: 'Curtir',
			unlike: 'Descurtir',
			reply: 'Responder',
			moreComms: 'Carregue mais 5 comentários'
		}
	};

	let lastVis = 4;
	let loading = false;

	function loadMore() {
		loading = true;
		setTimeout(() => {
			lastVis += 5;
			loading = false;
		}, 1500);
	}

	function toggleLike(e) {
		const index = parseInt(e.target.dataset.index);

		const currentReview = reviews[index];
		if (currentReview.isLiked) {
			reviews[index].isLiked = false;
			reviews[index].likes -= 1;
		} else {
			reviews[index].isLiked = true;
			reviews[index].likes += 1;
		}
	}
</script>

<div class="wrap wrap-{lang}">
	<textarea
		aria-label=""
		placeholder=""
		style="width:100%;box-sizing:border-box;vertical-align:top;min-height: 48px;border-color:#ccc;margin-bottom:12px;"
	></textarea>
	{#each reviews as review, index}
		<div class="item {index > lastVis ? 'hidden' : 'visible'}">
			<div class="avatar" id={`avatar-${index}`}></div>
			<div class="details">
				<div class="top-details">
					<div class="fb-name">{review._name}</div>
					<div class="fb-about">-&nbsp;{review.job}</div>
				</div>
				<div class="fb-comment-text">{review.text}</div>
				<div class="fb-bottom-details">
					<button class="details-btn" data-index={index} on:click={toggleLike}
						>{review?.isLiked ? content[lang].unlike : content[lang].like}</button
					>
					<span class="bullet">&nbsp;&bull;&nbsp;</span>
					<button class="details-btn">{content[lang].reply}</button>
					<span class="bullet">&nbsp;&bull;&nbsp;</span>
					<div class="fb-total-likes">{review.likes}</div>
					<span class="bullet">&nbsp;&bull;&nbsp;</span>
					<span class="fb-time">{review.time}</span>
				</div>
			</div>
		</div>
	{/each}

	{#if lastVis <= reviews.length}
		<button class="load-more {loading ? 'loading-btn' : 'btn'}" on:click={loadMore}>
			{#if loading}
				<Loader />
			{/if}
			{content[lang].moreComms}
		</button>
	{/if}
</div>

<style>
	.item.hidden {
		display: none;
		opacity: 0;
	}
	.load-more {
		transition: color 0.2s ease-out;
		position: relative;
		margin: 24px 0;
		width: 100%;
		display: block;
		width: 100%;
		color: #fff;
		text-align: center;
		background: #3578e5;
		border: 0;
		border-radius: 2px;
		font-weight: 700;
		padding: 12px;
		font-size: 14px;
		cursor: pointer;
		outline: 0;
	}
	.loading-btn {
		color: rgba(255, 255, 255, 0.2);
	}
	.fb-time {
		border-bottom: 1px dotted #999;
		cursor: help;
	}
	.fb-total-likes {
		font-size: 13px;
		padding-left: 19px;
		background: url('/images/fb_likes.png') no-repeat;
	}
	.fb-bottom-details {
		display: flex;
		align-items: center;
		gap: 3px;
	}
	.bullet {
		font-size: 7px;
	}
	.details-btn {
		color: #4267b2;
		color: #4267b2;
		text-decoration: none;
		display: inline;
		cursor: pointer;
		font-family: Tahoma, 'Helvetica', 'Helvetica Neue', sans-serif;
		font-size: 12px;
	}
	.fb-comment-text {
		margin: 4px 0 6px;
	}
	.top-details {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.details {
		padding: 5px 0 5px 60px;
		margin-top: 5px;
		position: relative;
		min-height: 60px;
		text-align: left;
	}
	.fb-about {
		color: #90949c;
		vertical-align: middle;
		text-decoration: none;
		margin-left: 2px;
		line-height: 10px;
	}
	.fb-name {
		color: #385898;
		font-size: 14px;
		line-height: 1.4;
		margin-right: 2px;
		display: inline-block;
		vertical-align: middle;
		font-weight: 700;
		text-decoration: none;
	}
	.wrap {
		font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
		font-size: 13px;
		line-height: 1.3;
		border-radius: 3px;
		border: 1px solid #e6e6e6;
		padding: 16px;
	}
	.avatar {
		width: 50px;
		height: 50px;
		position: absolute;
		display: block;
		top: 5px;
		left: 0;
	}
	.wrap-en .avatar {
		background-image: url('/images/css_sprites.png');
	}
	.wrap-pt .avatar {
		background-image: url('/images/css_sprites_pt.png');
	}
	#avatar-0 {
		background-position: -220px -429px;
	}
	#avatar-1 {
		background-position: -150px -429px;
	}
	#avatar-2 {
		background-position: -80px -429px;
	}
	#avatar-3 {
		background-position: -10px -429px;
	}
	#avatar-4 {
		background-position: -492px -290px;
	}
	#avatar-5 {
		background-position: -492px -220px;
	}
	#avatar-6 {
		background-position: -492px -150px;
	}
	#avatar-7 {
		background-position: -492px -80px;
	}
	#avatar-8 {
		background-position: -492px -10px;
	}
	#avatar-9 {
		background-position: -360px -359px;
	}
	#avatar-10 {
		background-position: -290px -359px;
	}
	#avatar-11 {
		background-position: -220px -359px;
	}
	#avatar-12 {
		background-position: -150px -359px;
	}
	#avatar-13 {
		background-position: -80px -359px;
	}
	#avatar-14 {
		background-position: -10px -359px;
	}
	#avatar-15 {
		background-position: -422px -220px;
	}
	#avatar-16 {
		background-position: -422px -150px;
	}
	#avatar-17 {
		background-position: -422px -80px;
	}
	#avatar-18 {
		background-position: -422px -10px;
	}
	.item {
		position: relative;
	}

	.fb-bottom-details {
		margin-top: 6px;
		font-family: Tahoma, 'Helvetica', 'Helvetica Neue', sans-serif;
		color: #385898;
		font-size: 12px;
		line-height: 1.358;
	}
</style>
