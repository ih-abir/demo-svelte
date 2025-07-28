<script lang="ts">
	import { Icon } from '$lib';
	import { carousel } from '$lib/actions/carousel';
	import { highlightCarousel } from '$lib/actions/highlightCarousel';

	import quoteIcon from '$assets/quote-right.svg?raw';

	const images = import.meta.glob('/src/assets/block5/**', {
		query: '?enhanced&w=60',
		eager: true,
		import: 'default'
	});

	const items = [
		{
			name: 'Vidorra',
			text: 'Finding Identity has been an absolute dream. Being able to work closely with Alex has been not only helpful, but game changing in how I learn about distribution and how to get my music out. The service is extremely personalised and I feel a real sense of care in the work Identity Music do.',
			img: '/src/assets/block5/vidorra.jpg'
		},
		{
			name: 'Tim North',
			text: "After only a few months, it's very notable what a positive difference it makes to work with Alex and the team. Working with Identity has truly been a collaborative experience, and as a creative I feel like that type of relationship is ideal across the board. These guys understand musicians.",
			img: '/src/assets/block5/tim-north.jpg'
		},
		{
			name: 'DeadFish',
			text: "Working with you is a pleasure - everything is nice, quick, and easy. The live chat support is always there to help me so I'm never stressed that I'm going to mess up my release. You're always helpful, kind and friendly - I can see that you really care about us - the artists, and want to help us!",
			img: '/src/assets/block5/dead-fish.jpg'
		},
		{
			name: 'Mario Viñuela',
			text: 'Professional, attentive and always ready to help. I started a few months ago with them and what makes the difference, compared to other distributors with whom I have worked, is the almost immediate contact you have to solve any problem or question that arises along the way. I hope to continue collaborating on my next musical releases.',
			img: '/src/assets/block5/mario-vinuela.jpg'
		},
		{
			name: 'Gemp',
			text: "Personal and professional! It's a pleasure working with them. ",
			img: '/src/assets/block5/gemp.jpg'
		},
		{
			name: 'Brandon Bester',
			text: 'Identity Music has changed my life!!! They have helped me take my music career to the next level. They are insanely selfless, amazing communicators, and timely.',
			img: '/src/assets/block5/brandon-bester.jpg'
		},
		{
			name: 'HeviBeats',
			text: 'Fantastic communication and lovely people :) Providing great service, thank you.',
			img: '/src/assets/block5/hevi-beats.jpg'
		},
		{
			name: 'Roshin',
			text: 'I was with a mass Distributer before Identity Music, and lord the contrast. I have an engaged, talented team over here who are supportive of me being an artist that doesn’t have to stick to one box. I shared a small percentage of music royalties and got a team back I can lean on.',
			img: '/src/assets/block5/roshin.jpg'
		}
	];
</script>

<div
	class={[
		'reveal-up section grid lg:grid-cols-10 xl:grid-cols-3 2xl:grid-cols-2',
		'division-gap bg-dark items-center text-white'
	].join(' ')}
>
	<div
		class={[
			'col-span-1 lg:col-span-2 xl:col-span-1',
			'section-v-pad w-full lg:max-w-[650px]',
			'mx-auto px-[min(100px,4vw)] text-center lg:mr-0 lg:pr-0 lg:text-left'
		].join(' ')}
	>
		<h2>
			What<br />
			people say<br />
			about us
		</h2>
	</div>

	<div
		class={[
			'group carousel-wrapper relative',
			'col-span-1 lg:col-span-8 xl:col-span-2 2xl:col-span-1'
		].join(' ')}
		use:carousel
		use:highlightCarousel
	>
		<button
			data-scroll="-1"
			class={[
				'arrow left group-hover:opacity-100 lg:opacity-0',
				'transition-all duration-300 ease-in-out'
			].join(' ')}
		>
			&#10094;
		</button>
		<div class="carousel h-full" id="testimonial-carousel">
			{#each items as { name, text, img }, idx}
				<div
					class={[
						'card flex flex-col items-stretch gap-[25px]',
						'py-[clamp(45px,2.063rem+1.875vw,60px)]',
						'px-[clamp(1.875rem,0.875rem+2.5vw,3.125rem)]',
						idx === 0 ? 'bg-primary' : 'bg-dark-lighter',
						idx === 1 ? 'md:bg-primary' : 'md:bg-dark-lighter'
					].join(' ')}
				>
					<div
						class={[
							'line-clamp-10 text-xl lg:line-clamp-15 xl:line-clamp-20',
							"before:content-['“'] after:content-['”']"
						].join(' ')}
					>
						{text}
					</div>
					<div class="division-in-gap mt-auto flex">
						<div class="flex-none">
							<enhanced:img
								class="size-[60px] rounded-full object-cover"
								src={images[img]}
								alt="avatar"
								sizes="60px"
								loading="lazy"
							/>
						</div>
						<div class="division-gap flex w-full flex-col">
							<div class="division-in-element-gap flex flex-col">
								<div class="poppins text-lg font-semibold">{name}</div>
								<div class="text-sm">Artist</div>
							</div>
							<Icon src={quoteIcon} className="ml-auto size-[30px] fill-white" />
						</div>
					</div>
				</div>
			{/each}
		</div>
		<button
			data-scroll="1"
			class={[
				'arrow right group-hover:opacity-100 lg:opacity-0',
				'transition-all duration-300 ease-in-out'
			].join(' ')}
		>
			&#10095;
		</button>
	</div>
</div>

<style lang="postcss">
	.card {
		flex: 0 0 calc((100% - (30px * (1 - 1))) / 1);
		scroll-snap-align: center;

		@media (min-width: 640px) {
			flex: 0 0 calc((100% - (30px * (1.5 - 1))) / 1.5);
		}

		@media (min-width: 768px) {
			flex: 0 0 calc((100% - (30px * (2.5 - 1))) / 2.5);
		}
	}

	.arrow {
		@apply absolute flex h-[100px] w-[50px] cursor-pointer items-center justify-center bg-[#fff]/50 text-[clamp(1.5rem,1.2rem+0.75vw,1.875rem)] text-[#fff] hover:bg-[#fff] hover:text-[#000];

		top: 50%;
		transform: translateY(-50%);
	}

	.arrow.left {
		@apply rounded-r-full;
		left: 0;
	}

	.arrow.right {
		@apply rounded-l-full;
		right: 0;
	}
</style>
