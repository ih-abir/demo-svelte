<script lang="ts">
	import { Icon } from '$lib';

	import logo1 from '$assets/ppl-logo.svg?raw';
	import logo2 from '$assets/aim-logo.svg?raw';
	import logo3 from '$assets/prs-logo.svg?raw';

	import socialLogo1 from '$assets/facebook-logo.svg?raw';
	import socialLogo2 from '$assets/twitter-logo.svg?raw';
	import socialLogo3 from '$assets/instagram-logo.svg?raw';
	import socialLogo4 from '$assets/linkedin-logo.svg?raw';
	import socialLogo5 from '$assets/pinterest-logo.svg?raw';

	import userIcon from '$assets/user-icon.svg?raw';
	import mailIcon from '$assets/mail-icon.svg?raw';
	import mobileIcon from '$assets/mobile-icon.svg?raw';

	const logos = [logo1, logo2, logo3];
	const socialLogos = [socialLogo1, socialLogo2, socialLogo3, socialLogo4, socialLogo5];
</script>

<section class="section-v-pad grid bg-transparent">
	<div class="wrapper division-row-gap grid">
		<div
			class="mx-auto flex w-full !max-w-[750px] flex-wrap items-center justify-evenly gap-[clamp(2.5rem,0.5rem+5vw,5rem)]"
		>
			{#each logos as src}
				<Icon
					{src}
					className="size-[clamp(60px,2.75rem+2.5vw,80px)] grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer"
				/>
			{/each}
		</div>

		<div class="reveal-up division-row-gap grid lg:grid-cols-3">
			<div class="division-row-gap flex flex-col">
				<div class="division-in-gap grid">
					<h2 class="!text-2xl font-semibold">Visit our offices at</h2>
					<address class="text-dark-light leading-[200%] not-italic">
						Identity Music Ltd,<br />
						Lamberhurst Vineyard, Furnace Lane,<br />
						Tunbridge Wells, Kent, TN3 8LA, UK
					</address>
				</div>

				<div class="division-in-gap grid">
					<h2 class="!text-2xl font-semibold">Message us</h2>
					<a href="mailto:contact@identitymusic.com" class="text-dark-light hover:underline">
						contact@identitymusic.com
					</a>
					<p class="text-dark-light">(+44) 1892 280 448</p>
				</div>

				<div class="reveal-up flex flex-wrap justify-between space-x-5 lg:mr-20">
					{#each socialLogos as src}
						<Icon
							{src}
							className="size-5 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer"
						/>
					{/each}
				</div>
			</div>

			<div class="division-gap flex flex-grow flex-col lg:col-span-2">
				<div class="division-gap grid md:grid-cols-2">
					<label class="focus-within:border-primary flex items-center border-b-2 border-gray-200">
						<Icon src={userIcon} className="size-4 fill-gray-500" />
						<input
							type="text"
							placeholder="Name *"
							required
							class="w-full px-[20px] py-2 font-bold placeholder-gray-500 outline-none"
						/>
					</label>

					<label class="focus-within:border-primary flex items-center border-b-2 border-gray-200">
						<Icon src={mailIcon} className="size-4 fill-gray-500" />
						<input
							type="email"
							placeholder="Email *"
							required
							class="w-full px-[20px] py-2 font-bold placeholder-gray-500 outline-none"
						/>
					</label>
				</div>

				<label class="focus-within:border-primary flex items-center border-b-2 border-gray-300">
					<Icon src={mobileIcon} className="size-4 fill-gray-500" />
					<input
						type="tel"
						placeholder="Phone number"
						class="w-full px-[20px] py-2 font-bold placeholder-gray-500 outline-none"
					/>
				</label>

				<textarea
					rows="4"
					placeholder="Your message"
					class="focus-within:border-primary w-full border-b-2 border-gray-300 py-2 font-bold placeholder-gray-500 outline-none"
				></textarea>

				<div class="flex flex-wrap md:flex-nowrap">
					<p class="text-dark-lighter mr-[110px] font-semibold">
						Identity Music are always available and excited to hear from artists and record label
						prospects. We always aim to serve you and your needs to the best of our ability.
					</p>

					<button
						class="btn bg-primary h-fit w-fit flex-none text-white shadow-[0_10px_20px_rgb(0_0_0_/_0.07)]"
					>
						Send message
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-primary py-[70px]">
	<div class="reveal-up wrapper">
		<div class="division-gap flex flex-wrap justify-center sm:justify-between">
			<h2 class="w-fit text-white">Distribute Your Music Today!</h2>

			<div class="btn text-dark w-fit flex-none bg-white">Apply Now</div>
		</div>
	</div>
</section>
