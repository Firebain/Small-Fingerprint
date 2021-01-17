const addToPage = (text) => {
  const p = document.createElement("p");
  p.appendChild(document.createTextNode(text));
  document.body.appendChild(p);
};

addToPage(
  `Размер экрана: ${
    (0 | (window.screen.width * (window.devicePixelRatio || 1))) +
    "x" +
    (0 | (window.screen.height * (window.devicePixelRatio || 1))) +
    "x" +
    (0 | window.screen.colorDepth)
  }`
);

addToPage(
  `Размер окна: ${
    (0 |
      (window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth)) +
    "x" +
    (0 |
      (window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight))
  }`
);

addToPage(`User Agent: ${window.navigator.userAgent}`);
