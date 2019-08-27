import { DynamicTreeViewConfig } from "../_dataTypes";
export const initialProps: DynamicTreeViewConfig = {
  treeItems: [
    {
      label: "India",
      value: "India",
      checked: false,
      children: [
        {
          label: "Maharastra",
          value: "Maharastra",
          checked: false,
          children: [
            {
              label: "Pune",
              value: "Pune",
              checked: false
            },
            {
              label: "Mumbai",
              value: "Mumbai",
              checked: false
            }
          ]
        },
        {
          label: "Punjab",
          value: "Punjab",
          checked: false,
          children: [
            {
              label: "Amritsar",
              value: "Amritsar",
              checked: false
            },
            {
              label: "Bhatinda",
              value: "Bhatinda",
              checked: false
            }
          ]
        },
        {
          label: "Karnataka",
          value: "Karnataka",
          checked: false,
          children: [
            {
              label: "Bengaluru",
              value: "Bengaluru",
              checked: false
            },
            {
              label: "Mysuru",
              value: "Mysuru",
              checked: false
            }
          ]
        }
      ]
    },
    {
      label: "England",
      value: "England",
      checked: false,
      children: [
        {
          label: "Berkshire",
          value: "Berkshire",
          checked: false,
          children: [
            {
              label: "Reading",
              value: "Reading",
              checked: false
            }
          ]
        }
      ]
    },
    {
      label: "New Zealand",
      value: "New Zealand",
      checked: false,
      children: [
        {
          label: "Wellington",
          value: "Wellington",
          checked: false
        },
        {
          label: "Otago",
          value: "Otago",
          checked: false,
          children: [
            {
              label: "Queenstown",
              value: "Queenstown",
              checked: false
            }
          ]
        }
      ]
    },
    {
      label: "Australia",
      value: "Australia",
      checked: false,
      children: [
        {
          label: "Victoria",
          value: "Victoria",
          checked: false
        }
      ]
    },
    {
      label: "West Indies",
      value: "West Indies",
      checked: false,
      children: [
        {
          label: "Barbados",
          value: "Barbados",
          checked: false
        },
        {
          label: "Trinidad and Tobago",
          value: "Trinidad and Tobago",
          checked: false
        }
      ]
    }
  ],
  loading: true,
  tabChanged: false,
  openItems: [],
  searchString: "",
  checkedItems: [],
  selectedTab: "",
  treeDataUrl: "",
  getTreeData: () => {},
  setChecked: () => {},
  setOpen: () => {},
  setSearch: () => {},
  setSelectedTab: () => {},
  collapsibelTreeView: false,
  showSelectAll: false
};

export const Country = [
  {
    label: "India",
    value: "India",
    children: [
      {
        label: "Maharastra",
        value: "Maharastra",
        children: [
          {
            label: "Pune",
            value: "Pune"
          },
          {
            label: "Mumbai",
            value: "Mumbai"
          }
        ]
      },
      {
        label: "Punjab",
        value: "Punjab",
        children: [
          {
            label: "Amritsar",
            value: "Amritsar"
          },
          {
            label: "Bhatinda",
            value: "Bhatinda"
          }
        ]
      },
      {
        label: "Karnataka",
        value: "Karnataka",
        children: [
          {
            label: "Bengaluru",
            value: "Bengaluru"
          },
          {
            label: "Mysuru",
            value: "Mysuru"
          }
        ]
      }
    ]
  },
  {
    label: "England",
    value: "England",
    children: [
      {
        label: "Berkshire",
        value: "Berkshire",
        children: [
          {
            label: "Reading",
            value: "Reading"
          }
        ]
      }
    ]
  },
  {
    label: "New Zealand",
    value: "New Zealand",
    children: [
      {
        label: "Wellington",
        value: "Wellington"
      },
      {
        label: "Otago",
        value: "Otago",
        children: [
          {
            label: "Queenstown",
            value: "Queenstown"
          }
        ]
      }
    ]
  },
  {
    label: "Australia",
    value: "Australia",
    children: [
      {
        label: "Victoria",
        value: "Victoria"
      }
    ]
  },
  {
    label: "West Indies",
    value: "West Indies",
    children: [
      {
        label: "Barbados",
        value: "Barbados"
      },
      {
        label: "Trinidad and Tobago",
        value: "Trinidad and Tobago"
      }
    ]
  }
];
