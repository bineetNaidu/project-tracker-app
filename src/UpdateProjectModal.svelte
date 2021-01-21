<script lang="ts">
  import { onMount } from 'svelte';
  import { updateProject } from './functions/faunaDB-client';
  import ProjectStore from './store/ProjectStore';
  import type { Project } from './types';

  export let handleSliderClose: () => void;
  export let _id: string;
  export let handleUpdateModalActionClose: () => void;

  $: completed = true;
  $: projectName = '';
  $: projectDescription = '';
  $: projectGithubUrl = '';
  $: projectLiveUrl = '';

  onMount(() => {
    const project = $ProjectStore.find((p) => p._id === _id) as Project;

    completed = project.completed;
    projectName = project.projectName;
    projectDescription = project.projectDescription;
    projectGithubUrl = project.projectGithubUrl;
    projectLiveUrl = project.projectLiveUrl;

    console.log('Mount Assigned....');
  });

  const handleProjectUpdate = async () => {
    try {
      const { updateProject: updatedProject, errors } = await updateProject(
        _id,
        projectName,
        projectDescription,
        completed,
        projectGithubUrl,
        projectLiveUrl
      );

      if (errors) throw new Error(JSON.stringify(errors[0]));

      ProjectStore.update((data) => {
        const lastStoreArr = data.filter((p) => p._id !== _id);
        return [...lastStoreArr, updatedProject];
      });
      handleSliderClose();
      handleUpdateModalActionClose();
    } catch (e) {
      alert(e.message);
    }
  };
</script>

<div class="fixed z-10 inset-0 overflow-y-auto">
  <div
    class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  >
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div
        class="absolute inset-0 bg-gray-500 opacity-75"
        on:click={handleUpdateModalActionClose}
      />
    </div>

    <span
      class="hidden sm:inline-block sm:align-middle sm:h-screen"
      aria-hidden="true">&#8203;</span
    >
    <div
      class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <form
          class="flex flex-col"
          on:submit|preventDefault={handleProjectUpdate}
        >
          <h1>Update Project ({projectName})</h1>
          <input
            class="my-2 py-2 px-4 text-sm"
            type="text"
            bind:value={projectName}
            placeholder="Project Name"
            required
          />
          <input
            class="my-2 py-2 px-4 text-sm"
            type="text"
            bind:value={projectDescription}
            placeholder="Project Description"
            required
          />
          <input
            class="my-2 py-2 px-4 text-sm"
            type="text"
            bind:value={projectGithubUrl}
            placeholder="Project Github Url"
          />
          <input
            class="my-2 py-2 px-4 text-sm"
            type="text"
            bind:value={projectLiveUrl}
            placeholder="Project Live Url"
          />
          <div class="flex justify-between">
            <div>
              <input
                class="my-2 py-2 px-4 text-sm"
                type="checkbox"
                checked={completed}
                on:change={() => (completed = !completed)}
              />
              <span> Completed ? </span>
            </div>

            <button type="submit" class="px-4 py-3 text-white  bg-green-500">
              Updated?
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
