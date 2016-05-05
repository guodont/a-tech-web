'use strict';

describe('Controller: UsercenterUploadpicCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var UsercenterUploadpicCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsercenterUploadpicCtrl = $controller('UsercenterUploadpicCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsercenterUploadpicCtrl.awesomeThings.length).toBe(3);
  });
});
