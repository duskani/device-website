<script>
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import { toggleCreate } from "$lib/components/Menu.svelte"

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<main>
  <nav class="flex flex-row items-center bg-[#9ED8D2] p-[1rem] w-full h-[7rem] ">
    
    <img class="size-[3rem]" src="edenspritelogo.png" alt="logo" />
	<button onclick={toggleCreate} class="bg-white size-[5rem]">Create</button>
    
  </nav>
  
  <div>
    {@render children?.()}
  </div>
</main>
