<script>
  import { randomTitle, randomNumber, randomYear } from './Mockups/Random'

  let articles = []

  for (let index = 0; index < 9; index++) {
    let rYear = randomYear()
    articles.push({
      title: randomTitle(rYear),
      number: randomNumber(),
      year: rYear
    })
  }
</script>

<h1 class="text-center font-bold mb-4">Popular pages</h1>
<div class="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-6 -mx-4">
  {#each articles as article}
    <a href="#" class="bg-white rounded-sm shadow-lg p-4">
      <article class="flex flex-col gap-y-2">
        <strong class="mb-2">{article.title}</strong>
        <small class="text-gray-500">
          <span>Number:</span> <strong>{article.number}</strong>
        </small>
        <small class="text-gray-500">
          <span>Year:</span> <strong>{article.year}</strong>
        </small>
      </article>
    </a>
  {/each}
</div>
