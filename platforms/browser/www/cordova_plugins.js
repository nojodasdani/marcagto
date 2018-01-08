cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.innoquant.moca.phonegap/www/MOCA.js",
        "id": "com.innoquant.moca.phonegap.MOCA",
        "pluginId": "com.innoquant.moca.phonegap",
        "clobbers": [
            "MOCA"
        ]
    },
    {
        "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
        "id": "cordova-plugin-android-permissions.Permissions",
        "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
            "cordova.plugins.permissions"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.innoquant.moca.phonegap": "2.6.0",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-android-play-services-gradle-release": "1.1.4",
    "cordova-plugin-android-permissions": "1.0.0",
    "cordova-plugin-geolocation": "3.0.0",
    "cordova.plugins.diagnostic": "3.8.1"
}
// BOTTOM OF METADATA
});