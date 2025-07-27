<script lang="ts">
	function countOnIntersect(node: HTMLElement) {
		let n = 0;
		const target = +node.textContent!,
			observer = new IntersectionObserver(([entry], observer) => {
				if (entry.isIntersecting) {
					const interval = setInterval(() => {
						node.textContent = (++n).toString();
						if (n === target) clearInterval(interval);
					}, 6);
					observer.unobserve(node);
				}
			});
		observer.observe(node);

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
</script>

<div class="reveal-up wrapper section-v-pad">
	<div class="division-gap grid lg:grid-cols-2">
		<div class="division-gap flex flex-col">
			<div class="poppins text-primary text-sm font-bold">DIGITAL MUSIC DISTRIBUTION</div>
			<h2 class="text-dark">
				We want the world
				<br /> to hear <span class="text-dark-lightest">your talent.</span>
			</h2>
			<div class="division-in-element-gap flex flex-wrap items-center">
				<div class="btn bg-primary text-white shadow-[0_10px_20px_rgb(0_0_0_/_0.07)]">
					Learn More
				</div>
				<div class="btn text-dark bg-white shadow-[0_10px_20px_rgb(0_0_0_/_0.07)]">
					Download our brochure
				</div>
			</div>
		</div>

		<div class="division-gap grid">
			<div class="division-gap grid grid-cols-3">
				<div
					use:countOnIntersect
					class={[
						'counter text-primary col-span-1 font-bold',
						'text-[clamp(2.5rem,1rem+3.75vw,4.375rem)]'
					].join(' ')}
				>
					195
				</div>
				<div class="division-in-element-gap col-span-2 flex flex-col">
					<h3 class="poppins text-dark text-lg font-semibold">Countries</h3>
					<div>
						Through our established partnerships with the top Digital Service Providers, you can
						grow your audience to all corners of the world. Why should you limit your talent to the
						local area? Your future fans are all over the globe, so it’s time you took the
						international stage, front and centre! With our music services, it’s never been so easy
						to get your creations heard worldwide!
					</div>
				</div>
			</div>

			<div class="division-gap grid grid-cols-3">
				<div
					use:countOnIntersect
					class={[
						'counter text-primary col-span-1 font-bold',
						'text-[clamp(2.5rem,1rem+3.75vw,4.375rem)]'
					].join(' ')}
				>
					84
				</div>
				<div class="division-in-element-gap col-span-2 flex flex-col">
					<h3 class="poppins text-dark text-lg font-semibold">Distribution Platforms</h3>
					<div>
						Get your music on Spotify, Apple Music, SoundCloud and more, with our distribution
						services. With partnerships with over 80 of the most popular music streaming services,
						getting your music online is as simple as a push of a button. By distributing with
						Identity Music, you keep full control of your sounds. You can choose how many platforms
						to distribute to, be it all of them or just one. Since we don’t charge upfront fees, you
						won’t be slapped with a huge bill for choosing more!
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
