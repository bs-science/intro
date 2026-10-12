const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  navigation?.classList.toggle("open", !open);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
  });
});

const copyButton = document.querySelector("#copy-checksum");
const checksum = document.querySelector("#checksum");

copyButton?.addEventListener("click", async () => {
  if (!checksum) return;

  try {
    await navigator.clipboard.writeText(checksum.textContent.trim());
    copyButton.textContent = "복사됨";
    window.setTimeout(() => { copyButton.textContent = "복사"; }, 1600);
  } catch {
    copyButton.textContent = "직접 선택";
  }
});
