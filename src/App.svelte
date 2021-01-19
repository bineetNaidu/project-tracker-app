<script lang="ts">
  import { onMount } from 'svelte';
  import { getAllProjects } from './functions/faunaDB-client';
  import Header from './Header.svelte';
  import ProjectList from './ProjectList.svelte';
  import ProjectStore from './store/ProjectStore';
  import type { Project } from './types';

  let loading: boolean = true;
  $: projects = [] as Project[];

  onMount(async () => {
    const res = await getAllProjects();
    ProjectStore.set(res);
    ProjectStore.subscribe((data) => (projects = data));
    loading = false;
  });
</script>

<main class="container mx-auto">
  <Header />

  {#if !loading}
    <ProjectList {projects} />
  {:else}
    <h1>Loading</h1>
  {/if}
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
