cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
        "id": "cordova-plugin-android-permissions.Permissions",
        "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
            "cordova.plugins.permissions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/com.innoquant.moca.phonegap/www/MOCA.js",
        "id": "com.innoquant.moca.phonegap.MOCA",
        "pluginId": "com.innoquant.moca.phonegap",
        "clobbers": [
            "MOCA"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-android-permissions": "1.0.0",
    "cordova-plugin-geolocation": "3.0.0",
    "cordova.plugins.diagnostic": "3.8.1",
    "cordova-android-play-services-gradle-release": "1.2.0",
    "cordova-plugin-inappbrowser": "2.0.2",
    "com.innoquant.moca.phonegap": "2.6.2"
}
// BOTTOM OF METADATA
});