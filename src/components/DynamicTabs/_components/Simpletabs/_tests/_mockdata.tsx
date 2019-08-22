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
    tabsUrl: "http://localhost:3001/jda/tabs",
    getTabItems: (data: any) => { return data},
    setTabIndex: (data: any) => {return data},
    setTabValue: (data: any) => {return data},
    tabIndex: 0,
    tabValue: 'Country',
    tabItems: [],
    loading: true
  };