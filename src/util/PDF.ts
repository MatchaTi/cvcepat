export const exportPDF = () => {
  const element = document.getElementById('resumeResult');
  const stylesheet = document.styleSheets[0];

  stylesheet.insertRule(
    `@page { size: ${element!.offsetWidth}px ${element!.offsetHeight + 1}px; }`,
    stylesheet.cssRules.length,
  );

  window.print();
};
