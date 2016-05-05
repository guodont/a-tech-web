'use strict';

describe('Controller: UsercenterMessageCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var UsercenterMessageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsercenterMessageCtrl = $controller('UsercenterMessageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsercenterMessageCtrl.awesomeThings.length).toBe(3);
  });
});
