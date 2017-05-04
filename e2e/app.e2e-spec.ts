import { DiscardPage } from './app.po';

describe('discard App', () => {
  let page: DiscardPage;

  beforeEach(() => {
    page = new DiscardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
