<script lang="ts">
  import Sidebar from "../components/Sidebar.svelte";
  import Topbar from "../components/Topbar.svelte";
  import TransactionTable from "../components/TransactionTable.svelte";
</script>

<div class="flex flex-col h-screen">
  <Topbar />
  <div class="flex flex-1 overflow-hidden">
    <Sidebar />
    <main class="flex flex-col flex-1 p-4 overflow-hidden mr-25">
      <TransactionTable></TransactionTable>
    </main>
  </div>
</div>
