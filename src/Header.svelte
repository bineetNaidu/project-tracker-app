<script></script>

<header class="header">
  <h3 class="header__subLinks pr-4">Products</h3>
  <h1 class="header__mainLink">Project Tracker</h1>
  <h3 class="header__subLinks pl-4">Settings</h3>
</header>

<style>
  .header {
    @apply flex justify-center items-baseline bg-purple-100;

    border-bottom-right-radius: 9px;
    border-bottom-left-radius: 9px;
  }

  .header__mainLink {
    @apply font-semibold text-5xl text-purple-700 hover:underline;
    cursor: pointer;
  }

  .header__subLinks {
    @apply text-2xl text-purple-500 hover:underline;

    cursor: pointer;
  }
</style>
