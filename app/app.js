var MyApp = angular.module('MyApp', [
    'ideasVN.router',
    'ideasVN.services',
    'ideasVN.modules',
    'ideasVN.directives'
]);

angular.module('ideasVN.router', ['ui.router']);
angular.module('ideasVN.services', []);
angular.module('ideasVN.modules', ['ideasVN.uploader']);
angular.module('ideasVN.directives', []);