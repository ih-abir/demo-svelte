export function highlightCarousel(node: HTMLElement) {
	const carousel = node.querySelector('#testimonial-carousel') as HTMLElement;
	if (!carousel) return;

	const cards = Array.from(carousel.querySelectorAll('.card')) as HTMLElement[];
	const total = cards.length;
	const mq = matchMedia('(min-width:768px)');

	const getCardWidth = () =>
		cards[0].offsetWidth + parseFloat(getComputedStyle(carousel).gap || '0');

	const highlight = () => {
		const scroll = carousel.scrollLeft;
		const index = Math.round(scroll / getCardWidth());
		let target = mq.matches ? (index + 1) % total : index % total;

		if (!mq.matches && scroll >= carousel.scrollWidth - carousel.clientWidth - 1) {
			target = total - 1;
		}

		cards.forEach((card, i) => {
			card.classList.remove('bg-primary', 'bg-dark-lighter', 'md:bg-primary', 'md:bg-dark-lighter');
			card.classList.add(
				mq.matches
					? i === target
						? 'md:bg-primary'
						: 'md:bg-dark-lighter'
					: i === target
						? 'bg-primary'
						: 'bg-dark-lighter'
			);
		});
	};

	const arrows = node.querySelectorAll('.arrow');
	arrows.forEach((btn) => btn.addEventListener('click', () => setTimeout(highlight, 350)));

	const onScroll = () => {
		clearTimeout((carousel as any)._timer);
		(carousel as any)._timer = setTimeout(highlight, 150);
	};
	carousel.addEventListener('scroll', onScroll);
	mq.addEventListener('change', highlight);

	highlight();

	// Cleanup
	return {
		destroy() {
			arrows.forEach((btn) => btn.removeEventListener('click', () => setTimeout(highlight, 350)));
			carousel.removeEventListener('scroll', onScroll);
			mq.removeEventListener('change', highlight);
		}
	};
}
