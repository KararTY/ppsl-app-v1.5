<script>
  import Popular from "./Popular.svelte"

  export let data = ''

  $: string = JSON.stringify(data, null, 2)
</script>

<div class="lg:w-4/5 m-4 p-4 lg:mr-16 mt-0 lg:mt-4">
  <Popular />
</div>
