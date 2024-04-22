const createElement = (element, attrs = {}) => Object.assign(document.createElement(element), attrs);

const $textarea = document.getElementById("textarea");
const $send = document.getElementById("send");

$send.addEventListener("click", function () {
  window.parent.postMessage($textarea.value, "*");
});

window.addEventListener("message", function (event) {
  const $p = createElement("p", { className: "send-item", innerHTML: event.data });
  document.body.append($p);
});
