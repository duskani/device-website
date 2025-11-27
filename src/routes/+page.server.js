// +page.server.js
/** @type {import('./$types').PageServerLoad} */
export async function load() {
  // Example: data fetched on the server
  const data = {
    title: "My SvelteKit Page",
    description: "This content was loaded on the server.",
    items: ["Apple", "Banana", "Cherry"]
  };

  return data; // returned data is available in +page.svelte
}
