<script lang="ts">
  import DeleteActionModel from './deleteActionModel.svelte';
  import { deleteProject } from './functions/faunaDB-client';
  import ProjectStore from './store/ProjectStore';

  export let _id: string;

  let show: boolean = false;

  const handleDeleteModalActionClose = () => {
    show = false;
  };

  const handleDeleteProject = async () => {
    try {
      const { deleteProject: deletedProject } = await deleteProject(_id);

      const updatedData = $ProjectStore.filter(
        (p) => p._id !== deletedProject._id
      );
      ProjectStore.update(() => updatedData);
      handleDeleteModalActionClose();
    } catch (e) {
      alert(e.message);
    }
  };
</script>

{#if show}
  <DeleteActionModel {handleDeleteModalActionClose} {handleDeleteProject} />
{/if}

<div class="flex">
  <button
    class="flex-1 px-4 py-3 text-white  bg-red-500"
    on:click={() => (show = true)}>Delete</button
  >
  <button class="flex-1 px-4 py-3 text-white  bg-green-500"
    >Update the Data</button
  >
</div>
