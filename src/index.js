const hc = document.querySelector("#hamburger-container");
const hcContents = hc.innerHTML;
const nav = document.querySelector("nav");
let toggled = false;

hc.addEventListener("click", () => {
  toggled = !toggled;
  if (toggled) {
    hc.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>`;

    nav.classList.replace("scale-y-0", "scale-y-100");
    nav.classList.replace("opacity-0", "opacity-100");
  } else {
    hc.innerHTML = hcContents;

    nav.classList.replace("scale-y-100", "scale-y-0");
    nav.classList.replace("opacity-0", "opacity-100");
  }
});
