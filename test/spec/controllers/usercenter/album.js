'use strict';

describe('Controller: UsercenterAlbumCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var UsercenterAlbumCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsercenterAlbumCtrl = $controller('UsercenterAlbumCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsercenterAlbumCtrl.awesomeThings.length).toBe(3);
  });
});
