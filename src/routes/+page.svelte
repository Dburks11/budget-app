<script lang="ts">
  import Sidebar from "../components/Sidebar.svelte";
  import Topbar from "../components/Topbar.svelte";
  import TransactionTable from "../components/TransactionTable.svelte";
  import Searchbar from "../components/Searchbar.svelte";
</script>

<div class="flex flex-col h-screen">
  <Topbar />
  <div class="flex flex-1 overflow-hidden">
    <Sidebar />
    <main class="flex flex-col flex-1 p-4 overflow-hidden mr-25">
      <div class="flex justify-end items-center mt-20">
        <Searchbar />
      </div>
      <TransactionTable />
    </main>
  </div>
</div>
