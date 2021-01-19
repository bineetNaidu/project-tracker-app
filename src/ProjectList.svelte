<script lang="ts">
  import type { Project } from './types';
  import ProjectTile from './ProjectTile.svelte';

  export let projects: Project[];
</script>

<section>
  <h5>projects</h5>

  {#each projects as project}
    <ProjectTile
      completed={project.completed}
      projectDescription={project.peojectDescription}
      projectGithubUrl={project.projectGithubUrl}
      projectLiveUrl={project.projectLiveUrl}
      projectName={project.projectName}
    />
  {/each}
</section>

<style>
</style>
