const createElement = (element, attr = {}) => Object.assign(document.createElement(element), attr);

const managementPath = "/management-service.html";

const $app = document.getElementById("app");
const $iframeContainer = document.getElementById("iframe-container");
const $mangementOpen = document.getElementById("management-open");
const $widthChange = document.getElementById("width-change");
const $textarea = document.getElementById("textarea");
const $send = document.getElementById("send");
const state = {
  $iframe: null,
};

$widthChange.addEventListener("click", function () {
  if (!state.$iframe) null;
  state.$iframe.style.width = `${Math.random() * (window.innerWidth - 700) + 500}px`;
});

$mangementOpen.addEventListener("click", function () {
  state.$iframe = createElement("iframe", { src: managementPath, width: 1200, height: 500 });
  state.$iframe.style.transition = "0.5s";
  $iframeContainer.append(state.$iframe);
});

$send.addEventListener("click", function () {
  if (!state.$iframe) null;
  state.$iframe.contentWindow.postMessage($textarea.value, "*");
});

window.addEventListener("message", function (event) {
  const $p = createElement("p", { className: "send-item", innerHTML: event.data });
  $app.append($p);
});
