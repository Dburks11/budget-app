<script lang="ts">
  import { goto } from "$app/navigation";

  function handleClick(path: string) {
    goto(path);
  }
</script>

<div id="pageContainer" class="flex">
  <div id="loginHalf" class="flex flex-col items-center w-2/3 bg-gray-50">
    <div class="flex flex-row mx-2">
      <img
        class="h-20 w-20 my--10 my-15"
        src="/ChatGPT%20Image%20May%2016,%202025,%2006_07_59%20PM%20(1).png"
        alt="Logo"
      />
      <h1 class="mt-20 text-3xl text-gradient-core">SmartBudget</h1>
    </div>
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
      <span
        class="text-xs text-secondary opacity-75 mt-1 hover:text-secondary-hover"
      >
        Forgot password?
      </span>
      <div class="my-10">
        <div id="rememberToggle" class="flex flex-row mt-2">
          <span class="text-primary opacity-50 my-0"> Remember me </span>
          <input type="checkbox" class="toggle toggle-secondary ml-40" />
        </div>
        <button
          class="btn mt-3 btn-secondary px-33"
          onclick={() => handleClick(`transactions`)}>Sign in</button
        >
      </div>
    </div>
  </div>
  <div id="gradientHalf" class="flex w-1/3 h-screen gradient-core"></div>
</div>
