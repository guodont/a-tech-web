'use strict';

describe('Controller: UsercenterProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var UsercenterProfileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsercenterProfileCtrl = $controller('UsercenterProfileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsercenterProfileCtrl.awesomeThings.length).toBe(3);
  });
});
