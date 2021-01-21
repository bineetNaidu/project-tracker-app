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
  <div class="flex justify-between mt-4 align-middle px-6">
    <h1 class="text-2xl bg-blue-200 rounded p-2">Your Projects</h1>

    <button class="px-3 py-2" on:click={() => (showCreateModal = true)}
      >Create a new Project?</button
    >
  </div>

  {#if showCreateModal}
    <CreateProjectModal {handleCreateModalActionClose} />
  {/if}

  {#if sliderOpen}
    <Slider {handleSliderClose} {sliderOption} />
  {/if}

  <div class="flex md:flex-row items-center flex-col mx-auto">
    {#each projects as project}
      <ProjectTile
        completed={project.completed}
        projectDescription={project.projectDescription}
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
