'use strict';

describe('Controller: UsercenterMyarticleCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var UsercenterMyarticleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsercenterMyarticleCtrl = $controller('UsercenterMyarticleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsercenterMyarticleCtrl.awesomeThings.length).toBe(3);
  });
});
