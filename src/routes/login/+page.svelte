<script lang="ts">
  import { goto } from "$app/navigation";

  function handleClick(path: string) {
    goto(path);
  }
</script>

<div id="pageContainer" class="flex">
  <div
    id="loginHalf"
    class="flex flex-col items-center w-full md:w-2/3 md:fixed"
  >
    <div class="flex flex-row ml-[-2rem]">
      <img class="h-20 w-20 my-15" src="/smartbudgetlogo.png" alt="Logo" />
      <h1 class="mt-20 text-3xl text-gradient-core">SmartBudget</h1>
    </div>
    <div id="welcomeBack-to-button" class="py">
      <h1 class="mt-20 mb-10 text-4xl mx-7 font-bold text-gradient-core">
        Welcome Back
      </h1>
      <div>
        <div class="flex flex-col mt-5">
          <input
            type="text"
            placeholder="Username"
            class="input input-secondary rounded-md"
          />
          <input
            type="text"
            placeholder="Password"
            class="input input-secondary rounded-md mt-2"
          />
          <button
            class="text-xs text-secondary opacity-75 mt-1 hover:text-secondary-hover self-start"
          >
            Forgot password?
          </button>
        </div>
        <div class="my-10">
          <div id="rememberToggle" class="flex flex-row mt-2">
            <span class="text-primary opacity-50 my-0"> Remember me </span>
            <input type="checkbox" class="toggle toggle-secondary ml-40" />
          </div>
          <div class="flex flex-col">
            <button
              class="btn btn-secondary px-33 mt-1"
              onclick={() => handleClick(`/`)}>Sign in</button
            >
            <button
              class="text-secondary opacity-75 text-xs mt-3 hover:text-secondary-hover"
              >First time login?</button
            >
          </div>
        </div>
      </div>
    </div>
    <div
      id="gradientHalf"
      class="hidden md:flex w-1/3 h-screen gradient-core fixed right-0 shadow"
    ></div>
  </div>
</div>
