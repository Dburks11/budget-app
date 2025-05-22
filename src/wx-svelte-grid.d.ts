declare module 'wx-svelte-grid' {
  import type { SvelteComponent } from 'svelte';

  // Declare Grid component with props of type 'any'
  export class Grid extends SvelteComponent<any> {}

  // Declare a generic Column type as 'any'
  export type Column = any;
}
