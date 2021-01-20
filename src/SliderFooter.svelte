<script lang="ts">
  import DeleteActionModel from './deleteActionModel.svelte';
  import { deleteProject } from './functions/faunaDB-client';
  import ProjectStore from './store/ProjectStore';
  import UpdateProjectModal from './UpdateProjectModal.svelte';

  export let _id: string;

  let showDeleteModal: boolean = false;
  let showUpdateModal: boolean = false;

  const handleDeleteModalActionClose = () => {
    showDeleteModal = false;
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

{#if showDeleteModal}
  <DeleteActionModel {handleDeleteModalActionClose} {handleDeleteProject} />
{/if}

{#if showUpdateModal}
  <UpdateProjectModal {_id} />
{/if}

<div class="flex">
  <button
    class="flex-1 px-4 py-3 text-white  bg-red-500"
    on:click={() => (showDeleteModal = true)}>Delete</button
  >
  <button
    class="flex-1 px-4 py-3 text-white  bg-green-500"
    on:click={() => (showUpdateModal = true)}>Update the Data</button
  >
</div>
