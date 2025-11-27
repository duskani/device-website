<script>
  import Menu from "$lib/components/Menu.svelte"
</script>

<nav class="flex flex-row items-center bg-[#9ED8D2] p-[2rem] w-full h-[3rem]">
  <div class="logo"> <img class="logo" src="edenspritelogo.png" alt="logo"> </div>
  <li class="justify-start"> <Menu /> </li>

</nav>

<style>
  /* .navbar {
    display: flex;
    align-items: center;
    background-color: #9ED8D2;
    padding: 10px 20px;
    height: 2.5rem;
    gap: 1rem;
    width: 100%;
    height: 3rem;
  } */

  .logo {
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .logo {
    width: 3rem;
    height: 3rem;
    justify-content: left;
  }
  
  li {
    list-style: none;
  }
</style>