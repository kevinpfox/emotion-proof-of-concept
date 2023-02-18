// Bar is somewhat illogical by design
// Not a bug but a feature
// If you are on a single group page, "Groups" tab is highlighted suggesting that is `where you are`
// But if you select "Groups" you'll be taken to /my-profile/groups

// Three possible tabs
export enum DiscoveryBarValues {
  Home = 'home',
  Discover = 'discover',
  Groups = 'groups',
  MyActivity = 'myActivity',
  MyBookmarks = 'myBookmarks',
  None = '',
}

// Bar used within 4 templates
export enum DiscoveryBarPaths {
  Home = '/',
  Discover = '/groups',
  GroupPage = '/groups/[group_id]/[group_title]',
  MyGroups = '/my-profile/groups',
  MyActivity = '/my-activity',
  MyBookmarks = '/my-bookmarks',
}

export const getDiscoveryBarValue = (url: string): DiscoveryBarValues => {
  switch (url) {
    case DiscoveryBarPaths.MyGroups:
      return DiscoveryBarValues.Groups;
    case DiscoveryBarPaths.GroupPage:
      return DiscoveryBarValues.None;
    case DiscoveryBarPaths.Home:
      return DiscoveryBarValues.Home;
    case DiscoveryBarPaths.Discover:
      return DiscoveryBarValues.Discover;
    case DiscoveryBarPaths.MyActivity:
      return DiscoveryBarValues.MyActivity;
    case DiscoveryBarPaths.MyBookmarks:
      return DiscoveryBarValues.MyBookmarks;
    default:
      return DiscoveryBarValues.Groups;
  }
};

export const getDiscoveryBarPath = (value: DiscoveryBarValues): DiscoveryBarPaths => {
  switch (value) {
    case DiscoveryBarValues.Groups:
      return DiscoveryBarPaths.MyGroups;
    case DiscoveryBarValues.Home:
      return DiscoveryBarPaths.Home;
    case DiscoveryBarValues.Discover:
      return DiscoveryBarPaths.Discover;
    case DiscoveryBarValues.MyActivity:
      return DiscoveryBarPaths.MyActivity;
    case DiscoveryBarValues.MyBookmarks:
      return DiscoveryBarPaths.MyBookmarks;
    default:
      return DiscoveryBarPaths.MyGroups;
  }
};
