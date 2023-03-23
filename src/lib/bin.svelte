<script>
	import { onMount } from 'svelte';

	let Height;
	let Width;
	let container;
	onMount(() => {
		function createStars() {
			let yPos = Math.random() * Height;
			let xPos = Math.random() * Width;
			let opacity = Math.random();
			console.log(`The x pos is ${xPos} and the y is ${yPos}`);
			let star = document.createElement('div');
			star.style.zIndex = '-1000';
			star.style.position = 'fixed';
			star.style.top = `${yPos}px`;
			star.style.left = `${xPos}px`;
			star.style.backgroundColor = `rgba(255, 255, 255, ${opacity}`;
			star.style.height = '1px';
			star.style.width = '1px';
			container.appendChild(star);
		}

		for (let i = 0; i < 100; i++) {
			createStars();
		}
	});
</script>
