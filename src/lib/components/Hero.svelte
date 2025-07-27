<script lang="ts">
	import { Icon } from '$lib';
	import mouseIcon from '$assets/mouse-icon.svg?raw';
</script>

<div
	class={[
		'relative flex w-full items-stretch overflow-hidden',
		'h-full max-h-screen sm:aspect-[16/10] md:aspect-[16/9]',
		'py-[95px] lg:py-[clamp(6.875rem,8.567rem+-3.526vw,8.25rem)]'
	].join(' ')}
>
	<div class="wrapper z-[50] grid text-white">
		<div
			class={[
				'flex h-fit flex-col gap-5 md:flex-row',
				'py-[clamp(1.25rem,-2.75rem+10vw,6.25rem)]'
			].join(' ')}
		>
			<h1
				class={[
					'order-2 flex-none font-bold md:order-1',
					'text-[clamp(2.5rem,1rem+3.75vw,4.375rem)] leading-[110%]'
				].join(' ')}
			>
				Identity Music
			</h1>

			<div
				class={[
					'order-1 flex items-center md:order-2',
					'md:h-[clamp(3.438rem,0.58rem+5.952vw,5.938rem)]'
				].join(' ')}
			>
				<span class="h-[5px] w-[68px] bg-[#ff5ee1]"></span>
			</div>

			<div
				class={[
					'order-3 w-fit leading-[110%] font-bold',
					'text-[clamp(2.5rem,1rem+3.75vw,4.375rem)]'
				].join(' ')}
			>
				<div class="flex-none">Digital Music</div>
				Distribution
			</div>
		</div>

		<div class="mt-auto hidden w-full items-center gap-2 md:flex">
			<div class="poppins text-lg">Scroll for more</div>
			<Icon src={mouseIcon} className="fill-white size-7" />
		</div>
	</div>

	<div class="absolute inset-0 z-10 w-full">
		<enhanced:img
			class="h-full w-full object-cover"
			src="$assets/header-image.jpg?enhanced&w=325;415;639;767;1023;1440;1920"
			alt="hero backgroud"
			loading="eager"
			sizes={[
				'(max-width: 325px) 325px, (max-width: 415px) 415px',
				'(max-width: 639px) 639px, (max-width: 767px) 767px',
				'(max-width: 1023px) 1023px, (max-width: 1440px) 1440px, 1920px'
			].join(', ')}
			fetchpriority="high"
		/>
	</div>

	<div
		class={[
			'sunrise-effect animation-delay-1',
			'absolute right-[15vw] bottom-[80px] z-20',
			'w-[clamp(9.063rem,5.306rem+18.495vw,27.5rem)]'
		].join(' ')}
	>
		<enhanced:img
			src="$assets/header-gradient1.png?enhanced&w=100"
			alt="header-gradient1"
			sizes="100px"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</div>

	<div
		class={[
			'sunrise-effect animation-delay-3 z-20',
			'absolute w-[clamp(12.5rem,6.897rem+27.586vw,40rem)]',
			'-right-8 -bottom-[clamp(7.5rem,3.297rem+20.69vw,28.125rem)]'
		].join(' ')}
	>
		<enhanced:img
			src="$assets/header-gradient3.png?enhanced&w=100"
			alt="header-gradient3"
			sizes="100px"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</div>
</div>

<style>
	@keyframes riseAndFadeIn {
		from {
			opacity: 0;
			filter: blur(1px);
			transform: translateY(200px);
			visibility: hidden;
		}
		to {
			opacity: 1;
			filter: blur(0px);
			transform: translateY(0);
			visibility: visible;
		}
	}

	.sunrise-effect {
		opacity: 0;
		transform: translateY(200px);
		visibility: hidden;
		animation: riseAndFadeIn 1.5s ease-in-out forwards;
	}

	.animation-delay-3 {
		animation-delay: 1s;
	}

	.animation-delay-1 {
		animation-delay: 1.35s;
	}
</style>
