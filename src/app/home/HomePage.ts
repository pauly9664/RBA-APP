export class HomePage {
  templateUrl: 'home.page.html';
  constructor() { }
  public currentTab = 0;
  openDetailsWithQueryParams() {
  }
  openDetailsWithService() {
  }
  openDetailsWithState() {
  }
  navigateNextTab(tabNumber) {
    this.currentTab++;
  }
  navigatePreviousTab(tabNumber: any) {
    this.currentTab--;
  }
}
