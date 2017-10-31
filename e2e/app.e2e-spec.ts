import { LibraryManagementAppPage } from './app.po';

describe('library-management-app App', () => {
  let page: LibraryManagementAppPage;

  beforeEach(() => {
    page = new LibraryManagementAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    console.log(page);
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
