export const exportPDF = () => {
  if ('ontouchstart' in document.documentElement) {
    alert('WIP!');
  } else {
    const stylesheet = document.styleSheets[0];

    stylesheet.insertRule(`@page { size: A4 portrait; margin: 0; }`, stylesheet.cssRules.length);

    window.print();
  }
};
