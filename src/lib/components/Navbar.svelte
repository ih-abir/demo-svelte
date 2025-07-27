<script lang="ts">
	import { Icon, EnhancedImage } from '$lib';
	import Brand from '$assets/brand-logo.png?enhanced&w=110;130;150';
	import menuIcon from '$assets/menu-icon.svg?raw';
	import closeIcon from '$assets/close-icon.svg?raw';

	let isMenuOpen = false;

	const navMenus = ['Home', 'About', 'Services', 'Contact', 'Blog', 'Login'];

	// Sticky navbar background change on scroll
	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			const navbar = document.querySelector('.navbar');
			if (navbar) {
				navbar.classList.toggle('bg-black', window.scrollY > 0);
			}
		});
	}
</script>

<nav
	class={[
		'navbar fixed top-0 z-[999] w-full shadow-md',
		'flex max-w-[100vw] items-center justify-center py-[15px] md:py-[22px]'
	].join(' ')}
>
	<div
		class={[
			'wrapper inline-flex items-center gap-5',
			'text-secondary-light w-full justify-between font-semibold'
		].join(' ')}
	>
		<div class="mr-auto flex w-full items-center justify-between">
			<a href="/" aria-label="home">
				<enhanced:img
					src={Brand}
					alt="Brand Logo"
					sizes="(max-width: 768px) 110px, (max-width: 1023px) 130px, 150px"
					class="h-fit w-[clamp(110px,4.018rem+5.952vw,150px)] object-contain"
					loading="eager"
					fetchpriority="high"
				/>
			</a>

			<div
				class={[
					isMenuOpen ? '!flex' : 'hidden',
					'fixed top-[94px] left-0 md:static',
					'flex-col items-center md:flex md:flex-row',
					'px-[min(100px,6vw)] py-5 md:px-0 md:py-0',
					'gap-[clamp(0.625rem,-1.125rem+4.375vw,2.813rem)]',
					'h-full w-full bg-white md:w-auto md:bg-transparent'
				].join(' ')}
			>
				{#each navMenus as item}
					<div
						class={[
							'w-full !py-3 md:w-fit md:py-0',
							'cursor-pointer text-black md:text-white'
						].join(' ')}
					>
						<a href="/" class="hover:underline">{item}</a>
					</div>
				{/each}

				<div
					class={[
						'btn mr-auto !px-[32px] !py-[15px]',
						'bg-primary h-fit cursor-pointer text-white'
					].join(' ')}
				>
					Apply
				</div>
			</div>
		</div>

		<div class="block md:hidden">
			<button
				on:click={() => (isMenuOpen = true)}
				aria-label="open navbar menu"
				class={[
					'block size-12 cursor-pointer p-[7px] select-none',
					isMenuOpen ? 'hidden' : ''
				].join(' ')}
			>
				<Icon src={menuIcon} className="fill-white" />
			</button>

			<button
				on:click={() => (isMenuOpen = false)}
				aria-label="Close navbar menu"
				class={[
					'size-12 cursor-pointer p-[11px] select-none',
					isMenuOpen ? 'block' : 'hidden'
				].join(' ')}
			>
				<Icon src={closeIcon} className="fill-white" />
			</button>
		</div>
	</div>
</nav>
