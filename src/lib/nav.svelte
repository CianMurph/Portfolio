<script>
	export let index;
	let colors = [
		{ from: 'from-green-500', to: 'to-orange-500' },
		{ from: 'from-orange-500', to: 'to-purple-500' },
		{ from: 'from-purple-500', to: 'to-blue-500' },
		{ from: 'from-blue-500', to: 'to-pink-500' },
		{ from: 'from-pink-500', to: 'to-yellow-500' },
		{ from: 'from-yellow-400', to: 'to-green-500' }
	];
	let currentColors = colors[index];
	
	let dotImg = `/dots/${index}.svg`
</script>

{#if index == 0}
	<div class="flex flex-col justify-center items-center w-1/12 h-full relative">
		<div class="flex flex-col items-center justify-center gap-y-2 h-full">
			<div class="mx-auto h-5 mb-8 mt-[63vh] md:mt-[26vh] w-full">
				<img src = {dotImg} alt="bulletpoint">
			</div>
			<div class=" w-1 rounded h-full bg-gradient-to-b {currentColors.from} {currentColors.to}" />
		</div>
	</div>
{:else}
	<div class="flex flex-col justify-center items-center w-1/12 h-full relative">
		<div class="flex flex-col items-center justify-center gap-y-2 h-full">
			<div class="mx-auto h-5 mb-8 mt-5 w-full">
				<img src = {dotImg} alt="bulletpoint">
			</div>
			<div class=" w-1 rounded h-full bg-gradient-to-b {currentColors.from} {currentColors.to}" />
		</div>
	</div>
{/if}
