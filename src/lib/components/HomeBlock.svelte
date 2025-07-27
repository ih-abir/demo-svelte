<script lang="ts">
	import { Icon } from '$lib';

	import musicIcon from '$assets/music-icon.svg?raw';
	import copyrightIcon from '$assets/copyright-icon.svg?raw';
	import globeIcon from '$assets/globe-icon.svg?raw';
	import bookReaderIcon from '$assets/book-reader-icon.svg?raw';

	const items = [
		{
			title: 'Digital Music Distribution',
			intro:
				'Distribute your music worldwide using our digital distribution services. Get your music on Spotify, Apple Music, SoundCloud and 80+ platforms with ease, confidence and world class support.',
			img: musicIcon,
			btnTxt: 'Distro my music...'
		},
		{
			title: 'Rights Management Service',
			intro:
				'Protect what matters to you most with our music rights management service. We safeguard your creations and online music from third parties who try to steal your sound!',
			img: copyrightIcon,
			btnTxt: 'Protect my rights...'
		},
		{
			title: 'Music Promotion Service',
			intro:
				'Get discovered, with the help of our music promotion experts! Work with our team to shape your image, plan your path to success and get your music out to the world.',
			img: globeIcon,
			btnTxt: 'Promote my music...'
		},
		{
			title: 'Publishing Administration',
			intro:
				'Get credited and claim your earnings, with the help of our music publishing team! Our team work to get you earnings from the compositions you have been integral to creating.',
			img: bookReaderIcon,
			btnTxt: 'Publish my music...'
		}
	];
</script>

<section class="section-v-pad bg-transparent">
	<div class="wrapper division-row-gap grid text-center">
		<div class="reveal-up division-gap grid">
			<div class="text-primary text-sm font-bold tracking-[0.07em]">
				WE LAUNCH YOUR MUSIC INTO THE FUTURE
			</div>
			<h2 class="text-dark">
				At Identity Music we distribute, protect and promote your music worldwide. We offer
				innovative solutions for independent music artists and record labels to share their music
				with the world. Our industry leading music services enable you to sell your music without
				all the hassle and daunting upfront fees.
			</h2>
		</div>

		<div class="reveal-up grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{#each items as { title, intro, img, btnTxt }}
				<div
					class="h-full bg-white p-2.5 transition-all duration-350 ease-in-out hover:-translate-y-[3px] hover:shadow-[0_2px_30px_rgb(0_0_0_/_0.1)]"
				>
					<div
						class="division-gap hover:border-primary grid h-full content-between border border-gray-200 px-[35px] py-[60px]"
					>
						<div class="division-in-gap grid">
							<Icon src={img} className="fill-primary mx-auto size-[80px]" />
							<div class="poppins text-dark text-lg font-semibold">{title}</div>
							<div class="text-dark-light">{intro}</div>
						</div>

						<div>
							<a
								href="/"
								class="poppins text-dark hover:text-primary/90 text-sm font-bold hover:underline"
							>
								{btnTxt}
								<span class="text-primary !hover:no-underline ml-2.5">🡪</span>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
