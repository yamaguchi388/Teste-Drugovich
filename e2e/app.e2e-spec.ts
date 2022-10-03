import { EssaVaiPage } from './app.po';

describe('essa-vai App', function() {
  let page: EssaVaiPage;

  beforeEach(() => {
    page = new EssaVaiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
