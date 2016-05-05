'use strict';

describe('Controller: UsercenterChangepasswordCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var UsercenterChangepasswordCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsercenterChangepasswordCtrl = $controller('UsercenterChangepasswordCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsercenterChangepasswordCtrl.awesomeThings.length).toBe(3);
  });
});
