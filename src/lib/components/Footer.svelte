<script lang="ts">
	import { Icon } from '$lib';

	import Brand from '$assets/brand-logo.png?enhanced&w=170';
	import socialLogo1 from '$assets/facebook-logo.svg?raw';
	import socialLogo2 from '$assets/twitter-logo.svg?raw';
	import socialLogo3 from '$assets/instagram-logo.svg?raw';
	import socialLogo4 from '$assets/linkedin-logo.svg?raw';
	import socialLogo5 from '$assets/pinterest-logo.svg?raw';

	const footerLinks = [
		'Music Distribution',
		'Publishing Administration',
		'Rights Management',
		'Promotion',
		'Label Services',
		'Blog',
		'Testimonials',
		'Careers',
		'FAQ',
		'Contact'
	];

	const socialLogos = [socialLogo1, socialLogo2, socialLogo3, socialLogo4, socialLogo5];
</script>

<footer class="bg-black py-[30px]">
	<div class="wrapper pt-[60px] pb-[30px] text-white">
		<div class="division-gap grid sm:grid-cols-2 lg:grid-cols-4">
			<div>
				<enhanced:img
					src={Brand}
					alt="Brand Logo"
					sizes="170px"
					class="h-fit w-[170px] object-contain"
					loading="lazy"
				/>
			</div>

			<div class="division-gap flex flex-col">
				<div class="poppins text-lg font-bold">Learn About Identity Music</div>
				<ul class="list-none p-0">
					{#each footerLinks as link}
						<li class="py-2">
							<a href="/" class="text-sm text-white hover:underline">{link}</a>
						</li>
					{/each}
				</ul>
			</div>

			<div class="division-in-gap flex flex-col">
				<div class="poppins text-lg font-bold">Contact</div>
				<div class="division-in-element-gap flex flex-col">
					<address class="leading-[200%] not-italic">
						<span class="font-bold">Identity Music Ltd</span><br />
						Lamberhurst Vineyard, Furnace Lane,<br />
						Tunbridge Wells, Kent, TN3 8LA, UK
					</address>
					<a href="mailto:contact@identitymusic.com" class="hover:underline">
						contact@identitymusic.com
					</a>
					<p>(+44) 1892 280 448</p>
				</div>

				<div class="flex flex-wrap space-x-5">
					{#each socialLogos as src}
						<Icon
							{src}
							className={[
								'size-5 fill-white hover:fill-primary',
								'transition-all duration-300 ease-in-out cursor-pointer'
							].join(' ')}
						/>
					{/each}
				</div>
			</div>
		</div>

		<div
			class={[
				'flex flex-wrap justify-between py-[50px] text-center',
				'division-in-element-gap mt-[clamp(3.75rem,-0.75rem+11.25vw,9.375rem)]'
			].join(' ')}
		>
			<p class="text-sm">
				<a href="/" class="hover:underline">Privacy Policy</a>
			</p>
			<p class="text-sm">
				© {new Date().getFullYear()} Identity Music Ltd. All Rights Reserved.
			</p>
		</div>
	</div>
</footer>
