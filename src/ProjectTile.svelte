<script lang="ts">
  export let projectName: string;
  export let projectDescription: string;
  export let completed: boolean;
  export let projectGithubUrl: string;
  export let projectLiveUrl: string;
</script>

<div class="flex flex-col p-6">
  <div class="flex justify-between">
    <h3 class="flex items-center">
      {#if completed}
        <span class="circle bg-green-800" />
      {:else}
        <span class="circle bg-red-400" />
      {/if}

      {projectName}
    </h3>

    <p>
      <a disabled={!!projectLiveUrl} href={projectLiveUrl}>Visit Site</a>
      <span> ⭐ </span>
    </p>
  </div>

  <div class="flex justify-evenly">
    <a href={projectGithubUrl}>
      {projectGithubUrl && projectGithubUrl.replace('https://github.com/', '')}
    </a>

    <p>
      {projectDescription}
    </p>
  </div>
</div>

<style>
  .circle {
    @apply w-6 h-6 rounded-full inline-block;
  }
</style>
