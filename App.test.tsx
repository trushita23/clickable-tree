// import * as React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { shallow } from 'enzyme';
// import { Paper } from "@material-ui/core";

// import { DynamicTabs } from './components/SimpleTabs';

// const componenConfig = {
//   title: "View Controller",
//   tabsUrl : "http://localhost:3001/jda/tabs",
//   tabPanelUrl : "http://localhost:3001/jda/tabs", // tab value gets appended to this URL
//   collapsibelTreeView: false,
//   showSelectAll :true,
// }

// fdescribe('App component testcases', () =>{
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<App />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });
  
//   it('should check one div tag', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('div').length).toEqual(1);
//   });

//   it('renders without crashing2', () => {
//     const wrapper = shallow(<App />);
//     const paper = <Paper>
//       <DynamicTabs {...componenConfig}>Loading..</DynamicTabs>
//     </Paper>
//     expect(wrapper.contains(paper)).toEqual(true);
//   });
// });