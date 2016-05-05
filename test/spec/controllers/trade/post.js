'use strict';

describe('Controller: TradePostCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var TradePostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TradePostCtrl = $controller('TradePostCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TradePostCtrl.awesomeThings.length).toBe(3);
  });
});
