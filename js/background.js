// Script ran when the extension icon is clicked
// Opens new tab (newtab.html)

chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "dist/newtab.html";
    chrome.tabs.create({ url: newURL });
});