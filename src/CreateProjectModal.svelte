<script lang="ts">
  export let handleCreateModalActionClose: () => void;

  let projectName = '';
  let peojectDescription = '';
  let projectGithubUrl = '';
  let projectLiveUrl = '';

  const handleProjectCreate = () => {
    console.log('Created... tada!!');
  };
</script>

<div class="fixed z-10 inset-0 overflow-y-auto">
  <div
    class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  >
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div
        class="absolute inset-0 bg-gray-500 opacity-75"
        on:click={handleCreateModalActionClose}
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
          on:submit|preventDefault={handleProjectCreate}
        >
          <h1>Create Project</h1>
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
            bind:value={peojectDescription}
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
          <div class="flex justify-end">
            <button type="submit" class="px-4 py-3 text-white  bg-green-500">
              Create!
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
