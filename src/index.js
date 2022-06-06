const hc = document.querySelector("#hamburger-container");
const hcContents = hc.innerHTML;
let toggled = false;

hc.addEventListener("click", () => {
  toggled = !toggled;
  hc.innerHTML = toggled
    ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>`
    : hcContents;
});
