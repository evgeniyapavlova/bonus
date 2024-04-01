<script>
	import { onMount } from 'svelte';

	function getURLParameters() {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		return Object.fromEntries(urlParams.entries());
	}

	function updateLinks() {
		const parameters = getURLParameters();
		const links = document.querySelectorAll('a');

		links.forEach((link) => {
			const linkHref = link.getAttribute('href');

			if (linkHref && !linkHref.startsWith('#') && !linkHref.startsWith('mailto')) {
				const [url, query] = linkHref.split('?');

				const queryParams = new URLSearchParams(query);
				for (const [key, value] of Object.entries(parameters)) {
					let tempKey = key;
					if (tempKey === 'aff') {
						tempKey = 'c';
					} else if (tempKey === 'afftrack') {
						tempKey = 'pid';
					}
					queryParams.set(tempKey, value);
				}

				const updatedHref = url + '?' + queryParams.toString();
				link.href = updatedHref;
			}
		});
	}

	onMount(() => {
		updateLinks();
	});
</script>

<a
	href="https://app.appsflyer.com/com.iqoption.x-install?af_r=https%3A%2F%2Fstatic.cdnroute.io%2Ffiles%2Fstorage%2Fpublic%2F5a%2Fe3%2F5de74a883.apk"
	>Get app</a
>

<style>
	a {
		text-decoration: none;
		position: relative;
		cursor: pointer;
		outline: none;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		padding: 24px;
		height: 84px;
		min-width: 280px;
		max-width: 95%;
		color: #ffffff;
		border: 0;
		background-color: #406aff;
		border-radius: 16px;
		transition: 0.3s;
		user-select: none;
		font-weight: 600;
		font-size: 28px;
		line-height: 36px;
		margin-top: 65vh;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 32px;
	}

	@media (max-width: 375px) {
		a {
			font-size: 24px;
			line-height: 36px;
			width: 85%;
			min-width: 85%;
		}
	}

	@media (max-width: 332px) {
		a {
			font-size: 20px;
			width: 90%;
			min-width: 90%;
		}
	}
</style>
