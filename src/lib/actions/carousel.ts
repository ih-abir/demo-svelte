// src/lib/actions/carousel.ts
export function carousel(node: HTMLElement) {
	node.onclick = (event) => {
		const button = (event.target as HTMLElement).closest('[data-scroll]');
		if (!button) return;

		const direction = +(button as HTMLElement).dataset.scroll!,
			container = button.closest('.carousel-wrapper')?.querySelector('.carousel') as HTMLElement,
			card = container?.querySelector('.card') as HTMLElement;
		if (!container || !card) return;

		const cardWidth = card.offsetWidth + parseFloat(getComputedStyle(container).gap || '0'),
			maxScroll = container.scrollWidth - container.clientWidth,
			currentScroll = container.scrollLeft,
			targetScroll =
				direction > 0
					? currentScroll >= maxScroll - 1
						? 0
						: currentScroll + cardWidth
					: currentScroll <= 1
						? maxScroll
						: currentScroll - cardWidth;

		container.scrollTo({
			left: targetScroll,
			behavior: targetScroll !== 0 && targetScroll !== maxScroll ? 'smooth' : 'auto'
		});
	};

	return {
		destroy() {
			node.onclick = null;
		}
	};
}
