'use strict';

describe('Controller: UsercenterMytradeCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var UsercenterMytradeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsercenterMytradeCtrl = $controller('UsercenterMytradeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsercenterMytradeCtrl.awesomeThings.length).toBe(3);
  });
});
