<script lang="ts">
  import { goto } from "$app/navigation";

  function handleClick(path: string) {
    goto(path);
  }
</script>

<div id="pageContainer" class="flex">
  <div id="loginHalf" class="flex flex-col items-center w-2/3 bg-gray-50">
    <h1 class="mt-20 text-3xl text-gradient-core">SmartBudget</h1>
    <h1 class="mt-40 text-4xl font-bold text-gradient-core">Welcome Back</h1>
    <h1 class="mt-5 text-gradient-core">
      Welcome Back, please enter your details
    </h1>
    <div class="flex flex-col mt-5">
      <input
        type="text"
        placeholder="Username"
        class="input input-secondary rounded-md mt-5"
      />
      <input
        type="text"
        placeholder="Password"
        class="input input-secondary rounded-md mt-2"
      />
      <span class="text-secondary opacity-75 mt-1 hover:text-secondary-hover">
        Forgot password?
      </span>
      <div id="rememberToggle" class="flex flex-row mt-2">
        <span class="text-primary opacity-50"> Remember sign in details? </span>
        <input type="checkbox" class="toggle toggle-secondary ml-17" />
      </div>
      <button
        class="btn mt-3 btn-secondary"
        onclick={() => handleClick(`transactions`)}>Sign in</button
      >
    </div>
  </div>
  <div id="gradientHalf" class="flex w-1/3 h-screen gradient-core"></div>
</div>
