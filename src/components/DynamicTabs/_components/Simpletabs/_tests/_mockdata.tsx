export const tabItems = [
  {
    label: "Country",
    value: "Country"
  },
  {
    label: "Location",
    value: "Location"
  },
  {
    label: "Customer",
    value: "Customer"
  },
  {
    label: "Resoruce",
    value: "Resoruce"
  }
];

export const componentConfig = {
    title: "View Controller",
    tabsUrl: "http://localhost:3001/jda/tabs",
    tabPanelUrl: "http://localhost:3001/jda/tabs", // tab value gets appended to this URL
    collapsibelTreeView: false,
    showSelectAll: true
  };