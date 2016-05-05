'use strict';

describe('Controller: UsercenterPostarticleCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var UsercenterPostarticleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsercenterPostarticleCtrl = $controller('UsercenterPostarticleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsercenterPostarticleCtrl.awesomeThings.length).toBe(3);
  });
});
