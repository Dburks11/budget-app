<script lang="ts">
  import Sidebar from "../components/Sidebar.svelte";
  import Topbar from "../components/Topbar.svelte";
  import TransactionTable from "../components/TransactionTable.svelte";
</script>

<div class="flex flex-col h-screen">
  <Topbar />
  <div class="flex flex-1 overflow-hidden">
    <Sidebar />
    <main class="flex flex-col flex-1 p-4 overflow-hidden mr-10">
      <TransactionTable>
        <input
          type="text"
          placeholder="Search"
          class="input input-bordered input-sm w-full max-w-xs px-4 py-2 mr-3 rounded-md shadow-[0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none"
        />
      </TransactionTable>
    </main>
  </div>
</div>
