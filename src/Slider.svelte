<script lang="ts">
  import SliderContent from './SliderContent.svelte';
  import SliderFooter from './SliderFooter.svelte';
  import type { Project } from './types';

  export let handleSliderClose: () => void;
  export let sliderOption: Project;

  const {
    _id,
    completed,
    projectName,
    projectGithubUrl,
    projectLiveUrl,
    projectDescription,
  } = sliderOption;
</script>

<div class="fixed inset-0 overflow-hidden">
  <div class="absolute inset-0 overflow-hidden">
    <div
      class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      aria-hidden="true"
      on:click={handleSliderClose}
    />
    <section
      class="absolute inset-y-0 right-0 pl-10 max-w-full flex"
      aria-labelledby="slide-over-heading"
    >
      <div class="relative w-screen max-w-md">
        <div
          class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4"
        >
          <button
            on:click={handleSliderClose}
            class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
            <span class="sr-only">Close panel</span>
            <!-- Heroicon name: x -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll"
        >
          <div class="px-4 sm:px-6">
            <h2
              id="slide-over-heading"
              class="text-lg font-medium text-gray-900"
            >Edit / Delete project</h2>
          </div>
          <div class="mt-6 relative flex-1 px-4 sm:px-6">
            <!-- Replace with your content -->
            <div class="absolute inset-0 px-4 sm:px-6">
              <div
                class="h-full border-2 p-4 border-dashed border-gray-200 flex flex-col justify-between"
                aria-hidden="true"
              >
                <h1 class="text-lg underline">Project Summary</h1>
                <SliderContent
                  {completed}
                  {projectName}
                  {projectDescription}
                  {projectGithubUrl}
                  {projectLiveUrl}
                />

                <SliderFooter {_id} {handleSliderClose} />
              </div>

              <!-- /End replace -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
