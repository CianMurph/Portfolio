<script>
	import Block from '../lib/block.svelte';
	import Header from '../lib/header.svelte';
	import Nav from '../lib/nav.svelte';
	//<svelte:window bind:innerHeight={Height} bind:innerWidth={Width} />
	//<div class="h-screen fixed top-0 left-0 right-0 bottom-0 border-0 m-0 bg-no-repeat bg-cover" style="background-image: {background};"></div>
</script>

<div class="index flex flex-col overflow-visible">
	<Header />
	<div class="hero relative container mx-auto min-h-[140vh] md:min-h-[90vh] flex items-center justify-center w-full  h-1 ">
		<Nav index=0 />
		<Block contentIndex=0 />
	</div>
	<div class="hero relative container mx-auto min-h-[130vh] md:min-h-[80vh] flex items-start justify-center gap-2 w-full h-1 overflow-visible">
		<Nav index=1 />
		<Block contentIndex=1 />
	</div>
	<div class="hero relative container mx-auto min-h-[135vh] md:min-h-[80vh] flex items-start justify-center gap-2 w-full h-1  overflow-visible">
		<Nav index=2 />
		<Block contentIndex=2 />
	</div>
	<div class="hero relative container mx-auto min-h-[125vh] md:min-h-[80vh] flex items-start justify-center gap-2 w-full h-1 overflow-visible">
		<Nav index=3 />
		<Block contentIndex=3 />
	</div>
	<div class="hero relative container mx-auto min-h-[120vh] md:min-h-[80vh] flex items-start justify-center gap-2 w-full h-1 overflow-visible">
		<Nav index=4 />
		<Block contentIndex=4 />
	</div>
	<div class="hero relative container mx-auto min-h-[120vh] md:min-h-[80vh] flex items-start justify-center gap-2 w-full h-1 overflow-visible">
		<Nav index=5 />
		<Block contentIndex=5 />
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: rgb(20, 20, 20);
	}
</style>
