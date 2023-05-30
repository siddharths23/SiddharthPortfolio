export const particleBgColors = () => {
  // for dark use atom one dark, for light use CLRS
  const background = (darkMode = false) => (darkMode ? '#000' : '#DCD6C8');
  const particle = (darkMode = false) => (darkMode ? '#c678' : '#5C7C8A');
  const links = (darkMode = false) => (darkMode ? '#98c3' : '#E7B669');

  return {
    background,
    particle,
    links,
  };
};
