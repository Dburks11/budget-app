<script lang="ts">
  import Sidebar from "../components/Sidebar.svelte";
  import Topbar from "../components/Topbar.svelte";
  import type { PageProps } from "./$types.js";

  let { data }: PageProps = $props();
</script>

<div class="flex">
  <Topbar></Topbar>
  <Sidebar></Sidebar>
  <h1
    class="text-4xl font-bold text-primary bg-yellow-200 p-6 rounded-lg shadow-lg ml-150 mt-100 pt-10"
  >
    {data.post.title}
  </h1>
</div>
