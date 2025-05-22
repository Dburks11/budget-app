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
      <div class="flex justify-end items-center mt-20">
        <!-- Existing Search bar -->
        <div class="relative flex items-center">
          <input
            type="text"
            placeholder="Search for Users"
            class="px-4 py-2 pl-10 rounded-sm shadow-[0_2px_4px_rgba(0,0,0,0.7)] focus:outline-none w-100 h-8"
          />
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-[#028348]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <TransactionTable></TransactionTable>
    </main>
  </div>
</div>
