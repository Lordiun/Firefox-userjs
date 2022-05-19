//Disable firefox sync (currently trying this out)
//user_pref("identity.fxaccounts.enabled", false);

//Disable more from Mozilla
user_pref("browser.preferences.moreFromMozilla", false);

//Disable pocket
user_pref("extensions.pocket.enabled", false);

//Disable clicking a bookmark item in a bookmark folder automatically closing the folder
user_pref("browser.bookmarks.openInTabClosesMenu", false);

//Enable loading of bookmarks in background
user_pref("browser.tabs.loadBookmarksInBackground", true);

//Disable fullscreen fade animation
user_pref("full-screen-api.transition-duration.enter", 0 0);
user_pref("full-screen-api.transition-duration.leave", 0 0);

//Shorten fullscreen warning to 1000 ms
user_pref("full-screen-api.warning.timeout", 1000);

//Enable custom css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

//Disable reader view
user_pref("reader.parse-on-load.enabled", false);

//Disable javascript in PDF reader
user_pref("pdfjs.enableScripting", false);

//Set defaykt PDF zoom to 100%
user_pref("pdfjs.defaultZoomValue", 100);

//Disable geolocation
user_pref("geo.enabled", false);

//Disable menu from popping up when ALT is pressed
user_pref("ui.key.menuAccessKeyFocuses", false);

//Enable fission/site Isolation
user_pref("fission.autostart", true);

//Enable WebRender 
user_pref("gfx.webrender.all", true);