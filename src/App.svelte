<script>
  import Navbar from './Navbar.svelte'
  import Categories from './Categories.svelte'
  import Aside from './Aside.svelte'
  import Page from './Page.svelte'
</script>

<main>
  <Navbar />
  <Categories />
  <section class="flex flex-col lg:flex-row">
    <Aside title="Recently updated"></Aside>
    <Page/>
  </section>
</main>
