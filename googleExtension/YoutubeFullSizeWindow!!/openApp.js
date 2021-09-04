function openApp() {
  let keyword = 'https://www.youtube.com/watch?v=';
  let url = location.href;
  url = ~url.indexOf('&') ? url.slice(0, url.indexOf('&')) : url;
  if (~url.indexOf(keyword)) {
    window.open(
      url.replace(keyword, 'https://import-youtube-fullsize.vercel.app/movies/')
    );
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: openApp,
  });
});
