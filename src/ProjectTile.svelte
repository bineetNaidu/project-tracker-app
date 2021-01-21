<script lang="ts">
  export let projectName: string;
  export let projectDescription: string;
  export let completed: boolean;
  export let projectGithubUrl: string;
  export let projectLiveUrl: string;

  console.log(!!projectLiveUrl);
</script>

<div class="flex flex-col bg-gray-100 min-w-max rounded-xl m-4 w-2/4">
  <div class="w-full flex justify-between p-4 items-center">
    <div>
      <h1>
        {projectName}
        {#if completed}
          <span class="circle bg-green-500">Completed</span>
        {:else}
          <span class="circle bg-yellow-400"> Ongoing </span>
        {/if}
      </h1>
      <p class="text-gray-500">
        {projectDescription}
      </p>
    </div>
    <div>
      {#if projectGithubUrl}
        <a href={projectGithubUrl}>Github</a>
      {:else}
        <p class="text-red-500">Not Github Link</p>
      {/if}
    </div>
  </div>

  <div class="flex">
    <button
      on:click
      class="flex-1 py-2 border-t border-r border-b-0 border-l-0 focus:outline-none"
      >More Options</button
    >
    <button
      disabled={projectLiveUrl === '' || !projectLiveUrl}
      class="flex-1 py-2 border-t border-l-0 border-b-0 border-r focus:outline-none">
      {#if projectLiveUrl}
        <a href={projectLiveUrl} class="hover:no-underline">View Live</a>
      {:else}
        <p>No Live Url</p>
      {/if}
    </button>
  </div>
</div>

<style>
  .circle {
    @apply px-2 py-1 text-xs rounded-full;
  }
</style>
