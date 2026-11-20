export const scrollToSection = (sectionId, offset = 250) => {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const targetTop = target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: Math.max(0, targetTop - offset),
    behavior: 'instant',
  });

  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
};