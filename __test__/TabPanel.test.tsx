import * as React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import { TabPanel } from '../_components/TabPanel';
import { SimpleTabs } from '../index';
import { Tabs, Typography } from '@material-ui/core';

jest.mock('axios');

describe('TabPanel Component Testcases', () => {
    xit('should fetch data for TabPanel component', () => {
        const getSpy = jest.spyOn(axios, 'get');
        // const toDoListInstance = shallow(<TabPanel />);
        shallow(<TabPanel />);
        expect(getSpy).toBeCalled();
    });

    const initialProps = {
        title: "View Controller",
        items: [{
            label: 'India',
            value : 'India',
            a11y: undefined,
            checked : undefined,
            children : [
                {
                    label : 'Maharastra',
                    value : 'Maharastra',
                    a11y: undefined,
                    checked : undefined,
                    children : [
                        {
                            label: 'Pune',
                            value: 'Pune',
                            a11y: undefined,
                            checked : undefined,
                        },
                        {
                            label: 'Mumbai',
                            value: 'Mumbai',
                            a11y: undefined,
                            checked : undefined,
                        },
                    ]
                },
                {
                    label : 'Punjab',
                    value : 'Punjab',
                    a11y: undefined,
                    checked : undefined,
                    children : [
                        {
                            label: 'Amritsar',
                            value: 'Amritsar',
                            a11y: undefined,
                            checked : undefined,
                        },
                        {
                            label: 'Bhatinda',
                            value: 'Bhatinda',
                            a11y: undefined,
                            checked : undefined,
                        },
                    ]
                },
                {
                    label : 'Karnataka',
                    value : 'Karnataka',
                    a11y: undefined,
                    checked : undefined,
                    children : [
                        {
                            label: 'Bengaluru',
                            value: 'Bengaluru',
                            a11y: undefined,
                            checked : undefined,
                        },
                        {
                            label: 'Mysuru',
                            value: 'Mysuru',
                            a11y: undefined,
                            checked : undefined,
                        },
                    ]
                }
            ]
        },
        {
            label: 'England',
            value : 'England',
            a11y: undefined,
            checked : undefined,
            children : [
                {
                    label : 'Berkshire',
                    value : 'Berkshire',
                    a11y: undefined,
                    checked : undefined,
                    children : [
                        {
                            label: 'Reading',
                            value: 'Reading',
                            a11y: undefined,
                            checked : undefined,
                        }
                    ]
                }
            ]
        },
        {
            label: 'New Zealand',
            value : 'New Zealand',
            a11y: undefined,
            checked : undefined,
            children : [
                {
                    label : 'Wellington',
                    value : 'Wellington',
                    a11y: undefined,
                    checked : undefined,
                },
                {
                    label : 'Otago',
                    value : 'Otago',
                    a11y: undefined,
                    checked : undefined,
                    children : [
                        {
                            label: 'Queenstown',
                            value: 'Queenstown',
                            a11y: undefined,
                            checked : undefined,
                        }
                    ]
                }
            ]
        },
        {
            label: 'Australia',
            value : 'Australia',
            a11y: undefined,
            checked : undefined,
            children : [
                {
                    label : 'Victoria',
                    value : 'Victoria',
                    a11y: undefined,
                    checked : undefined,
                }
            ]
        },
        {
            label: 'West Indies',
            value : 'West Indies',
            a11y: undefined,
            checked : undefined,
            children : [
                {
                    label : 'Barbados',
                    value : 'Barbados',
                    a11y: undefined,
                    checked : undefined,
                },
                {
                    label : 'Trinidad and Tobago',
                    value : 'Trinidad and Tobago',
                    a11y: undefined,
                    checked : undefined,
                }
            ]
        }],
        tabOnChange: expect.any(Function),
        renderPanel: expect.any(Function),
        tabPanelUrl: "http://localhost:3001/jda/tabs",
        collapsibelTreeView: false,
        showSelectAll: false
    }

    const container = shallow(<SimpleTabs {...initialProps} />);

    it('should render Typography if exists once', () => {
        expect(container.find(Typography).length).toEqual(1);
    });

    it('should render Typography having View Controller title', () => {
        expect(container.find(Typography).text()).toEqual("View Controller");
    });

    it('should render Tabs if exists once', () => {
        expect(container.find(Tabs).length).toEqual(1);
    });

    it('should render TabPanel if exists once', () => {
        expect(container.find(TabPanel).length).toEqual(1);
    });

    xit('should set the tab value on change event', () => {
        container.find(Tabs).simulate('change', {
          items: {
            value: 1,
          },
        });
        expect(container.find(Tabs).prop('value')).toEqual(
          1,
        );
    });
});

// fdescribe('TabPanel Compenent testcases', () =>{
//     it('should add 1+2',() =>{
//         expect(1+2).toEqual(3);
//     });
// });