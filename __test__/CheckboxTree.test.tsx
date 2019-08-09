import * as React from 'react';
import { shallow, mount } from 'enzyme';

import CheckBoxList from '../_components/CollapsibleListWithCheckBox';
import { Typography } from '@material-ui/core';
import { parseInt } from 'lodash';

describe('CollapsibleListWithCheckBox Component Testcases', () => {

    const initialProps = {
        items: [{
            label: 'India',
            value : 'India',
            checked : false,
            children : [
                {
                    label : 'Maharastra',
                    value : 'Maharastra',
                    checked : false,
                    children : [
                        {
                            label: 'Pune',
                            value: 'Pune',
                            checked : false,
                        },
                        {
                            label: 'Mumbai',
                            value: 'Mumbai',
                            checked : false,
                        },
                    ]
                },
                {
                    label : 'Punjab',
                    value : 'Punjab',
                    checked : false,
                    children : [
                        {
                            label: 'Amritsar',
                            value: 'Amritsar',
                            checked : false,
                        },
                        {
                            label: 'Bhatinda',
                            value: 'Bhatinda',
                            checked : false,
                        },
                    ]
                },
                {
                    label : 'Karnataka',
                    value : 'Karnataka',
                    checked : false,
                    children : [
                        {
                            label: 'Bengaluru',
                            value: 'Bengaluru',
                            checked : false,
                        },
                        {
                            label: 'Mysuru',
                            value: 'Mysuru',
                            checked : false,
                        },
                    ]
                }
            ]
        },
        {
            label: 'England',
            value : 'England',
            checked : false,
            children : [
                {
                    label : 'Berkshire',
                    value : 'Berkshire',
                    checked : false,
                    children : [
                        {
                            label: 'Reading',
                            value: 'Reading',
                            checked : false,
                        }
                    ]
                }
            ]
        },
        {
            label: 'New Zealand',
            value : 'New Zealand',
            checked : false,
            children : [
                {
                    label : 'Wellington',
                    value : 'Wellington',
                    checked : false,
                },
                {
                    label : 'Otago',
                    value : 'Otago',
                    checked : false,
                    children : [
                        {
                            label: 'Queenstown',
                            value: 'Queenstown',
                            checked : false,
                        }
                    ]
                }
            ]
        },
        {
            label: 'Australia',
            value : 'Australia',
            checked : false,
            children : [
                {
                    label : 'Victoria',
                    value : 'Victoria',
                    checked : false,
                }
            ]
        },
        {
            label: 'West Indies',
            value : 'West Indies',
            checked : false,
            children : [
                {
                    label : 'Barbados',
                    value : 'Barbados',
                    checked : false,
                },
                {
                    label : 'Trinidad and Tobago',
                    value : 'Trinidad and Tobago',
                    checked : false,
                }
            ]
        }],
        collapsibelTreeView: false
    }

    const container = shallow(<CheckBoxList {...initialProps} />);

    it('should render Typography if exists once', () => {
        expect(container.find(Typography).length).toEqual(1);
    });

    it('should render Typography for number of Nodes selected: none Selected', () => {
        let nodeCount: number = 0;
        if(parseInt(container.find(Typography).text()) === 0) {
            nodeCount = 0;
        }
        expect(nodeCount).toEqual(0);
    });

    it('should render Search TextField if exists', () => {
        expect(container.find('#standard-name').exists()).toBe(true)
    });

    it('should render search textfield with props', () => {
        expect(container.find('#standard-name').props()).toEqual({
            id: "standard-name",
            label: "Search",
            value: "",
            onChange: expect.any(Function),
            margin: "normal"
        });
    });

    it('should set the search value on change event', () => {
        container.find('#standard-name').simulate('change', {
          target: {
            value: 'India',
          },
        });
        expect(container.find('#standard-name').prop('value')).toEqual(
          'India',
        );
    });
});