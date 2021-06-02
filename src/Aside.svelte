<script>
  export let title

  import { randomTitle, randomDateTime } from './Mockups/Random'

  let articles = []

  for (let index = 0; index < 6; index++) {
    articles.push({
      title: randomTitle(),
      lastUpdated: randomDateTime()
    })
  }

  articles.sort((a, b) => {
    return b.lastUpdated.toMillis() - a.lastUpdated.toMillis()
  })
</script>

<aside class="lg:w-1/5 m-4 p-4 lg:ml-16 mb-0 lg:mb-4">
  <h1 class="text-center font-bold mb-4">{title}</h1>
  <div class="bg-white -mx-4 p-4 rounded-sm shadow-lg">
    <div class="flex flex-col gap-2">
      {#each articles as article, index}
        <a href="#">
          <article class="flex flex-col gap-2">
            <strong>{article.title}</strong>
            <small class="text-gray-500">{article.lastUpdated.toRelative()}</small>
          </article>
        </a>
        {#if index < (articles.length - 1)}
          <hr>
        {/if}
      {/each}
    </div>
  </div>
</aside>
