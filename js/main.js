function boot() {
  // await install service worker
  // only then insert content (which might cause requests that we need to intercept)
  document.body.replaceChildren(document.getElementById("template").content);
}

addEventListener('DOMContentLoaded', boot);
