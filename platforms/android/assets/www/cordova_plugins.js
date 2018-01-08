cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.innoquant.moca.phonegap.MOCA",
    "file": "plugins/com.innoquant.moca.phonegap/www/MOCA.js",
    "pluginId": "com.innoquant.moca.phonegap",
    "clobbers": [
      "MOCA"
    ]
  },
  {
    "id": "cordova-plugin-android-permissions.Permissions",
    "file": "plugins/cordova-plugin-android-permissions/www/permissions.js",
    "pluginId": "cordova-plugin-android-permissions",
    "clobbers": [
      "cordova.plugins.permissions"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.js",
    "pluginId": "cordova.plugins.diagnostic",
    "clobbers": [
      "cordova.plugins.diagnostic"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "com.innoquant.moca.phonegap": "2.6.0",
  "cordova-android-play-services-gradle-release": "1.1.4",
  "cordova-plugin-android-permissions": "1.0.0",
  "cordova-plugin-geolocation": "3.0.0",
  "cordova.plugins.diagnostic": "3.8.1"
};
// BOTTOM OF METADATA
});