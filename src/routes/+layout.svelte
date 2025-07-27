<script lang="ts">
	import { onMount } from 'svelte';
	import '$styles/style.scss';
	import { Navbar, Footer } from '$lib';

	import Brand from '$assets/brand-favicon.svg';

	onMount(() => {
		// Reveal-up animation
		document.querySelectorAll('.reveal-up').forEach((el) =>
			new IntersectionObserver((entries, observer) => {
				if (entries[0].isIntersecting) {
					el.classList.add('visible');
					observer.unobserve(el);
				}
			}).observe(el)
		);
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="keywords" content="" />
	<link rel="icon" type="image/svg+xml" href={Brand} />
	<meta name="robots" content="all" />
	<meta name="googlebot" content="all" />
	<title>🎶 Identity Music: UK digital music distribution for independent artists & labels</title>
	<meta
		name="description"
		content="Upload your music to global streaming services with Identity Music's distribution platform. 
		UK experts in music promotion, rights management, distribution & publishing. 
		Friendly support team, fast upload times & exclusive promotional support for independent 
		artists & labels across the world. Publish your music now!"
	/>
</svelte:head>

<div class="size-screen fixed inset-0 z-[-99] bg-cover bg-center">
	<enhanced:img
		src="$assets/bg-image.webp?enhanced&w=325;415;639;767;1023;665;1440;1920"
		alt="background"
		class="h-full w-full object-cover"
		sizes={[
			'(max-width: 325px) 325px, (max-width: 415px) 415px',
			'(max-width: 639px) 639px, (max-width: 767px) 767px',
			'(max-width: 1023px) 1023px, (max-width: 1440px) 1440px, 1920px'
		].join(', ')}
	/>
</div>

<div class="block w-full">
	<Navbar />
	<main>
		<slot />
	</main>
</div>

<Footer />
