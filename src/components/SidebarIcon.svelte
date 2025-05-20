<script lang="ts">
  import { goto } from "$app/navigation";

  export let label: string;

  function handleClick(path: string) {
    if (label.toLowerCase() === "users") {
      goto("/");
    } else {
      goto(path);
    }
  }
</script>

<button
  class="flex w-full p-1 hover:bg-coreGrey text-xl my-0.5 text-sidebarTextColor opacity-85 hover:opacity-110 items-center gap-2 cursor-pointer"
  onclick={() => handleClick(`/${label.toLowerCase()}`)}
>
  <slot />
  {label}
</button>
