'use strict';

describe('Controller: UsercenterMytrendCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var UsercenterMytrendCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsercenterMytrendCtrl = $controller('UsercenterMytrendCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsercenterMytrendCtrl.awesomeThings.length).toBe(3);
  });
});
