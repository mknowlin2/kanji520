import { Kanji520Page } from './app.po';

describe('kanji520 App', () => {
  let page: Kanji520Page;

  beforeEach(() => {
    page = new Kanji520Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
