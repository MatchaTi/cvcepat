export const exportPDF = () => {
  if ('ontouchstart' in document.documentElement) {
    alert('WIP!');
  } else {
    const element = document.getElementById('resumeResult');
    const stylesheet = document.styleSheets[0];

    stylesheet.insertRule(
      `@page { size: ${element!.offsetWidth}px ${element!.offsetHeight + 1}px; }`,
      stylesheet.cssRules.length,
    );

    window.print();
  }
};
