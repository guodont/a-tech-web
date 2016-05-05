'use strict';

describe('Controller: UsercenterIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var UsercenterIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsercenterIndexCtrl = $controller('UsercenterIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsercenterIndexCtrl.awesomeThings.length).toBe(3);
  });
});
