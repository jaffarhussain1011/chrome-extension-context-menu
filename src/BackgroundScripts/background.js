/* global chrome */

// The onClicked callback function.
function onClickHandler(info, tab) {
  console.log(info?.selectionText);
  if (info?.selectionText) {
    var url = `https://www.linkedin.com/search/results/people/?keywords=${info?.selectionText}`;
    chrome.tabs.create({ url: url }, function (tab) {
      console.log(tab);
    });
  }
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function () {
  var id = chrome.contextMenus.create(
    {
      title: "Search linkedin",
      contexts: ["selection"],
      id: "search_linked_in",
      // documentUrlPatterns: ["https://www.linkedin.com/*"],
    },
    function () {
      if (chrome.extension.lastError) {
        console.log(
          "Got expected error: " + chrome.extension.lastError.message
        );
      }
    }
  );

});
