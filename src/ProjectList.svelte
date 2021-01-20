<script lang="ts">
  import type { Project } from './types';
  import ProjectTile from './ProjectTile.svelte';
  import Slider from './Slider.svelte';
  import CreateProjectModal from './CreateProjectModal.svelte';

  export let projects: Project[];

  let sliderOpen: boolean = false;
  let showCreateModal: boolean = false;
  let sliderOption: Project | null | undefined = null;

  const handleSliderOptId = (id: string): void => {
    sliderOption = projects.find((p) => p._id === id);
    sliderOpen = true;
  };
  const handleSliderClose = () => {
    sliderOpen = !sliderOpen;
  };
  const handleCreateModalActionClose = () => {
    showCreateModal = false;
  };
</script>

<section>
  <div class="flex justify-between">
    <h1>Your Projects</h1>

    <button class="px-3 py-4" on:click={() => (showCreateModal = true)}
      >Create a new Project?</button
    >
  </div>

  {#if showCreateModal}
    <CreateProjectModal {handleCreateModalActionClose} />
  {/if}

  {#if sliderOpen}
    <Slider {handleSliderClose} {sliderOption} />
  {/if}

  <div class="flex">
    {#each projects as project}
      <ProjectTile
        completed={project.completed}
        projectDescription={project.peojectDescription}
        projectGithubUrl={project.projectGithubUrl}
        projectLiveUrl={project.projectLiveUrl}
        projectName={project.projectName}
        on:click={() => handleSliderOptId(project._id)}
      />
    {/each}
  </div>
</section>

<style>
</style>
