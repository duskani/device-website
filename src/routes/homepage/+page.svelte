<script>
  let pageTitle = "About Page";
  let description = "This is the secondary page of our SvelteKit website.";
</script>

<svelte:head>
  <title>{pageTitle} | Page-Title</title>
  <meta name="description" content={description} />
  <meta name="keywords" content="about, sveltekit, secondary page, description, page-title" />
</svelte:head>

<main class="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-6">
  <h1 class="text-3xl font-bold text-blue-600 mb-2">{pageTitle}</h1>

  <p class="text-lg mb-6 max-w-xl text-center">
    Welcome to the secondary page!  
    This page is styled with Tailwind CSS and includes its own meta tags for SEO.
  </p>

  <a href="/" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
    Go Back Home
  </a>
</main>
