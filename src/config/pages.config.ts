class DASHBOARD_PAGES {
  private root = '/i';

  HOME = this.root;
  TASKS = `${this.root}/tasks`;
  PROFILE = `${this.root}/profile`;
  SETTINGS = `${this.root}/settings`;
}

export const DASHBOARD = new DASHBOARD_PAGES();
