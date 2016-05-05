'use strict';

describe('Controller: ExpertAlbumCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var ExpertAlbumCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpertAlbumCtrl = $controller('ExpertAlbumCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExpertAlbumCtrl.awesomeThings.length).toBe(3);
  });
});
