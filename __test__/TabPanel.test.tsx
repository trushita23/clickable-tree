import * as React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import { TabPanel } from '../_components/TabPanel';

jest.mock('axios');

describe('TabPanel component Testcases', () => {
    it('should fetch data for TabPanel component', () => {
        const getSpy = jest.spyOn(axios, 'get');
        // const toDoListInstance = shallow(<TabPanel />);
        shallow(<TabPanel />);
        expect(getSpy).toBeCalled();
    });
});

fdescribe('TabPanel Compenent testcases', () =>{
    it('should add 1+2',() =>{
        expect(1+2).toEqual(3);
    });
});