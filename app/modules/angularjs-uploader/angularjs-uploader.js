angular.module('ideasVN.uploader', [])
    .directive('iUploader', [function () {
        return {
            restrict: 'E',
            template: '<div class="input-group" id="uploadFile">' +
            '<span class="input-group-btn">' +
            '<button class="btn btn-success" type="button">Add File</button>' +
            '<!--<input type="file" class="uploadBtn"/>-->' +
            '</span>' +
            '<input type="text" class="form-control uploadFile" readonly="readonly"/>' +
            '<span class="input-group-btn">' +
            '<button class="btn btn-success" type="button">Upload</button>' +
            '<button class="btn btn-danger" type="button">Delete</button>' +
            '</span>' +
            '</div>',
            link: function (scope, element, attrs, ctrls) {
                
            }
        };
    }]);