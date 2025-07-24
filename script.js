// Example JS placeholder for theme toggle and calculator
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    const updateLabel = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      toggleBtn.innerText = theme === 'dark' ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    };
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
      updateLabel();
    });
    updateLabel();
  }
});
