
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  toggleBtn.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme");
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    toggleBtn.innerText = newTheme === "dark" ? "Toggle Light Mode" : "Toggle Dark Mode";
  });

  document.getElementById("costCalculator").addEventListener("submit", function (e) {
    e.preventDefault();
    const pages = parseInt(document.getElementById("pages").value);
    const type = document.getElementById("type").value;
    const side = document.getElementById("side").value;
    let rate = 0;

    if (type === "bw") {
      rate = side === "single" ? 1 : 0.75;
    } else {
      rate = side === "single" ? 5 : 4;
    }

    const cost = pages * rate;
    document.getElementById("totalCost").innerText = `Estimated Cost: ₹${cost.toFixed(2)}`;
  });
});
