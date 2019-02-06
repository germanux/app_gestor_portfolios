import { AppCliGesPortPage } from './app.po';

describe('app-cli-ges-port App', function() {
  let page: AppCliGesPortPage;

  beforeEach(() => {
    page = new AppCliGesPortPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
