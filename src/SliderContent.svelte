<script lang="ts">
  export let completed: boolean;
  export let projectName: string;
  export let projectDescription: string;
  export let projectGithubUrl: string;
  export let projectLiveUrl: string;
</script>

<div>
  <div class="p-1 rounded-md border-purple-300 border-dashed border-2 my-2">
    <h1 class="text-lg font-semibold text-purple-900">Project Name:</h1>
    <h2 class="ml-1 font-light text-purple-600">{projectName}</h2>
  </div>

  <div class="p-1 rounded-md border-purple-300 border-dashed border-2 my-2">
    <h1 class="text-lg font-semibold text-purple-900">Project Description:</h1>
    <h2 class="ml-1 font-light text-purple-600">
      {projectDescription}
    </h2>
  </div>

  <div class="p-1 rounded-md border-purple-300 border-dashed border-2 my-2">
    <h1 class="text-lg font-semibold text-purple-900">Project Github Url:</h1>
    {#if projectGithubUrl}
      <a class="ml-1 font-light text-purple-600" href={projectGithubUrl}
        >Github link</a
      >
    {:else}
      <h2 class="ml-1 font-light text-purple-600">No Github Link</h2>
    {/if}
  </div>

  <div class="p-1 rounded-md border-purple-300 border-dashed border-2 my-2">
    <h1 class="text-lg font-semibold text-purple-900">Project Live Url:</h1>
    {#if projectLiveUrl}
      <a class="ml-1 font-light text-purple-600" href={projectLiveUrl}
        >View Link</a
      >
    {:else}
      <h2 class="ml-1 font-light text-purple-600">No View Link</h2>
    {/if}
  </div>

  <div class="p-1 rounded-md border-purple-300 border-dashed border-2 my-2">
    <h1 class="text-lg font-semibold text-purple-900">Completed:</h1>
    <h2 class="ml-1 font-light text-purple-600">
      {completed ? 'Completed' : 'Ongoing'}
    </h2>
  </div>
</div>
