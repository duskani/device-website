
<script>
	import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
	<title>My SvelteKit Page | Page-Title</title>
	<meta name="description" content="Keywords: description, page-title." />
	<meta name="keywords" content="SvelteKit, Tailwind CSS, description, page-title, example" />
</svelte:head>

<div class="">
	<!-- Navbar Component -->
	<Nav />
</div>
	<!-- Page content -->
	<div class="flex flex-wrap gap-[1rem] p-[1rem] m-[1rem] justify-between" id="devicecontainer"> 
		<div class="flex flex-wrap bg-slate-300 w-[19rem] h-[13rem] justify-center">
			<p class="">device name</p>
			<img src="placeholder.png" alt="placeholder" class="w-[16rem] h-[7rem]">
			<p class=""> expose points: </p>
		</div>
	</div> 
    

