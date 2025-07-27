<script lang="ts">
	import { carousel } from '$lib/actions/carousel';

	const images = import.meta.glob('/src/assets/block3/**', {
		query: '?enhanced&w=235;327;465;524',
		eager: true,
		import: 'default'
	});

	const imagesSm = import.meta.glob('/src/assets/block3/**', {
		query: '?enhanced&w=305;320;394;422',
		eager: true,
		import: 'default'
	});

	const imagesLg = import.meta.glob('/src/assets/block3/**', {
		query: '?enhanced&w=310;355',
		eager: true,
		import: 'default'
	});

	const items = [
		{
			title: 'Moon Wax',
			intro:
				"Moon Wax are breaking the boundaries of music by drawing influences from everything from old school jazz and RnB to 90's funk and house. With thumping bass lines, flamboyant guitar riffs and outer space synth sounds, core members Billy Smith and Robb Maynard explore the world of the creative arts.",
			img: '/src/assets/block3/moonwax.jpg'
		},
		{
			title: 'Neolux',
			intro:
				'Neolux is an independent hardstyle/hard dance producer from Romania. Having experimented under different genres beforehand as Rudy Zensky or RVDY, Neolux created heavy dancefloor-oriented music with a strong focus on storytelling and atmosphere, making use of plenty of orchestral sections blended together.',
			img: '/src/assets/block3/neolux.jpg'
		},
		{
			title: 'Rebecca Mardal',
			intro:
				'Rebecca Mardal is a Swedish guitarist & producer, seamlessly blending calming LoFi beats with soulful guitar solos. Her instrumental talents create personal and finely crafted music that has been described as "what floating on clouds sounds like."',
			img: '/src/assets/block3/rebecca.jpg'
		},
		{
			title: 'leo.',
			intro:
				"Through his catchy melodies and honest lyrics, leo.'s music demonstrates a raw interpretation of life and its experiences. On his own artistic lane, leo. strives to create music that will connect with his audience on a deeper level, as well as a safe space where listeners can feel understood.",
			img: '/src/assets/block3/leo.jpg'
		},
		{
			title: 'IzaBeats',
			intro:
				'With traditional instrumental skills and modern production techniques, IzaBeats stands out from the crowd! Creating lofi with a "handmade" feel and being fully connected within the music community means you can always expect great music and collaborations from IzaBeats.',
			img: '/src/assets/block3/izabeats.jpg'
		},
		{
			title: 'RVDY',
			intro:
				'RVDY delivers both cutting-edge electronic tracks as well as cinematic experiences, fusing together Drum & Bass, Trap and Electro with Rock, Synth-wave and cinematic/orchestral music in an epic clash of genres, all of this in the pursuit of the ultimate futuristic soundtrack.',
			img: '/src/assets/block3/rvdy.jpg'
		},
		{
			title: 'Michael Logozar',
			intro:
				'Michael Logozar is a composer and producer based in the Nashville area. His piano based cinematic music is known for delivering heart felt melodies with a rare level of artistry and emotion. His solo piano work has received 6 album of the year nominations and his multi-instrumental work has been featured in film and television.',
			img: '/src/assets/block3/michael.jpg'
		},
		{
			title: 'Kendra Logozar',
			intro:
				'Modern Classical composer and pianist Kendra Logozar is a fresh and inspiring voice in the instrumental genre. Her tender and elegant melodies reflect her love for classical repertoire and a new generation of modern classical music.',
			img: '/src/assets/block3/kendra.jpg'
		},
		{
			title: 'Mario Viñuela',
			intro:
				'Mario Viñuela is a Spanish composer made for film, TV and theatre productions. Not only has Mario mastered the beauty of piano but he also plays a variety of instruments that allow his sounds to transcend any language barrier. Mario is a great example of how making your music accessible can lead to great success!',
			img: '/src/assets/block3/mario.jpg'
		}
	];
</script>

<div class="section-v-pad group">
	<div class="wrapper reveal-up division-gap grid text-center text-white">
		<div class="carousel-wrapper flex w-full items-center gap-5 overflow-hidden" use:carousel>
			<button
				data-scroll="-1"
				aria-label="Scroll left"
				class={[
					'arrow group-hover:opacity-100 lg:opacity-0',
					'transition-all duration-300 ease-in-out'
				].join(' ')}
			>
				&#10094;
			</button>

			<div class="carousel" id="carousel">
				{#each items as { title, intro, img }}
					<div class="card flex flex-col gap-4">
						<div class="h-fit w-full object-cover sm:hidden">
							<enhanced:img
								src={images[img]}
								alt={`picture of ${title}`}
								sizes={[
									'(max-width: 325px) 235px, (max-width: 425px) 327px,',
									'(max-width: 575px) 465px, 524px'
								].join(', ')}
								loading="lazy"
							/>
						</div>

						<div class="hidden h-fit w-full object-cover sm:block lg:hidden">
							<enhanced:img
								src={imagesSm[img]}
								alt={`picture of ${title}`}
								sizes={[
									'(max-width: 767px) 305px, (max-width: 799px) 320px',
									'(max-width: 859px) 394px, 422px'
								].join(', ')}
								loading="lazy"
							/>
						</div>
						<div class="hidden h-fit w-full object-cover lg:block">
							<enhanced:img
								src={imagesLg[img]}
								alt={`picture of ${title}`}
								sizes="(max-width: 1151px) 310px, 355px"
								loading="lazy"
							/>
						</div>

						<div class="poppins text-dark text-lg font-semibold">
							{title}
						</div>
						<div class="poppins text-dark-lighter line-clamp-6 text-sm leading-[160%]">
							{intro}
						</div>
					</div>
				{/each}
			</div>

			<button
				data-scroll="1"
				aria-label="Scroll right"
				class={[
					'arrow group-hover:opacity-100 lg:opacity-0',
					'transition-all duration-300 ease-in-out'
				].join(' ')}
			>
				&#10095;
			</button>
		</div>
	</div>
</div>

<style lang="postcss">
	.card {
		flex: 0 0 calc((100% - (30px * (1 - 1))) / 1);
		scroll-snap-align: center;

		@media (min-width: 640px) {
			flex: 0 0 calc((100% - (30px * (2 - 1))) / 2);
		}

		@media (min-width: 1024px) {
			flex: 0 0 calc((100% - (30px * (3 - 1))) / 3);
		}
	}

	.arrow {
		@apply cursor-pointer items-center justify-center text-[clamp(1.5rem,1.2rem+0.75vw,1.875rem)] text-[#000];
	}
</style>
