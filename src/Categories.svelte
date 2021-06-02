<script>
  import { randomIcon, randomProduct } from "./Mockups/Random";

  let categories = [];

  for (let index = 0; index < 10; index++) {
    categories.push({
      title: randomProduct(),
      icon: randomIcon()
    });
  }

  categories.push({
    title: "Show all categories"
  });
</script>

<section class="m-4 p-4 flex flex-1 overflow-x-auto overflow-y-hidden">
  <div class="flex flex-row gap-6 mx-auto">
    {#each categories as category}
      <a href="#" class="p-4 bg-white flex flex-col items-center justify-center w-32 max-w-32 hover:bg-green-400 hover:text-white">
        {#if category.icon}
          <svelte:component this={category.icon} class="feather feather-monitor h-16 mb-2"></svelte:component>
        {/if}
        <strong class="text-center">{category.title}</strong>
      </a>
    {/each}
  </div>
</section>
