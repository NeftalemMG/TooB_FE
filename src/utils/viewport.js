export const setViewportSize = () => {
    // Force the viewport to use the actual device width
    const setViewportProperty = () => {
      const vh = window.innerHeight * 0.01;
      const vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      document.documentElement.style.setProperty('--vw', `${vw}px`);
    };
  
    setViewportProperty();
    window.addEventListener('resize', setViewportProperty);
    window.addEventListener('orientationchange', setViewportProperty);
  };