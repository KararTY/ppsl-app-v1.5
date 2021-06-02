<script>
  import X from "./Icons/X.svelte";
  import Menu from "./Icons/Menu.svelte";
  import Search from "./Icons/Search.svelte";
  import Login from "./Icons/Login.svelte";
  import Settings from "./Icons/Settings.svelte";

  let menuIsOpen = false

  function search (terms) {
    console.log(terms)
  }

  function onKeyPress (e = new KeyboardEvent()) {
    if (e.key === 'Enter') search(this.value)
  }

  function onFocus () {
    document.getElementById('search_svg').classList.add('text-brand')
  }

  function onFocusOut () {
    document.getElementById('search_svg').classList.remove('text-brand')
  }
</script>

<nav class="bg-white md:px-4 md:py-2 shadow">
  <div class="md:container md:mx-auto md:flex md:justify-between md:items-center">
    <div class="flex items-center justify-between px-4 py-3 md:p-0">
      <div class="-m-4">
        <p class="m-4 flex items-center">
          <span class="font-bold">Repair Wiki - PPSL</span>
        </p>
      </div>
      <div class="md:hidden flex items-center justify-center">
        <button type="button" class="hamburger" on:click={() => menuIsOpen = !menuIsOpen}>
          {#if menuIsOpen}
            <Menu />
          {:else}
            <X/>
          {/if}
        </button>
      </div>
    </div>
    <div class="relative flex-grow 2xl:mx-48 md:mx-20 md:rounded-md shadow-sm">
      <div class="absolute inset-y-0 right-0 p-2 flex items-center pointer-events-none">
        <Search class="md:text-sm" id="search_svg"/>
      </div>
      <input type="text" name="search_wiki" id="search" placeholder="Type in your search..." on:keypress={onKeyPress} on:focus={onFocus} on:focusout={onFocusOut}>
    </div>
    <div class="left-menu hidden" class:hidden="{!menuIsOpen}">
      <a href="#" class="navbar-burger-button">
        <Login />
        <span>Login</span>
      </a>
      <a href="#" class="navbar-burger-button">
        <Settings />
        <span>Settings</span>
      </a>
    </div>
  </div>
</nav>

<style lang="postcss">
  .navbar-burger-button {
    @apply rounded bg-btncolor p-2 m-2 flex items-center text-black hover:bg-brand duration-300 hover:text-white duration-300;
  }
  .navbar-burger-button:not(:last-child) {
    @apply md:mr-2;
  }
  .navbar-burger-button > span {
    @apply md:hidden 2xl:block pl-2 font-bold;
  }
  .left-menu {
    @apply p-2 h-full md:flex md:items-center md:p-0 md:-m-2;
  }
  .hamburger {
    @apply text-black hover:text-brand duration-300 focus:text-brand focus:outline-none;
  }
  #search {
    @apply flex-grow w-full pr-12 block md:rounded-md bg-gray-100 border-transparent focus:border-brand focus:bg-white focus:ring-0 duration-100;
  }
</style>
