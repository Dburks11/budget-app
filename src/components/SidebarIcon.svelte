<script lang="ts">
  import { goto } from "$app/navigation";

  export let label: string;

  function handleClick(path: string) {
    goto(path);
  }
</script>

<button
  class="flex w-full p-1 hover:bg-coreGreen text-2xl my-0.5 text-sidebarTextColor items-center gap-2"
  onclick={() => handleClick(`/${label.toLowerCase()}`)}
>
  <slot />
  {label}
</button>
