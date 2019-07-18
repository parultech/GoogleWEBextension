function openPage() {
  browser.tabs.create({
    url: "https://www.google.com"
  });
}

browser.browserAction.onClicked.addListener(openPage);
