<script lang="ts">
  import Sidebar from "../../components/Sidebar.svelte";
  import Topbar from "../../components/Topbar.svelte";
  import TransactionTable from "../../components/TransactionTable.svelte";
</script>

<div class="flex">
  <Topbar></Topbar>
  <Sidebar></Sidebar>
  <TransactionTable></TransactionTable>
</div>
