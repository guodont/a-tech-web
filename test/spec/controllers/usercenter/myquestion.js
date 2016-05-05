'use strict';

describe('Controller: UsercenterMyquestionCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var UsercenterMyquestionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsercenterMyquestionCtrl = $controller('UsercenterMyquestionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsercenterMyquestionCtrl.awesomeThings.length).toBe(3);
  });
});
