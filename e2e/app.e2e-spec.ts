import { VehicleAdminPage } from './app.po';

describe('vehicle-admin App', () => {
  let page: VehicleAdminPage;

  beforeEach(() => {
    page = new VehicleAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
