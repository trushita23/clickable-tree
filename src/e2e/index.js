// import createTestCafe from 'testcafe';
import { waitForReact, ReactSelector } from 'testcafe-react-selectors'
const fixture = global.fixture
fixture `Navigation`.page `http://localhost:3000`

test('Render SimpleTabs', async t => {
    // Test code
    await waitForReact();
    const SimpleTab = ReactSelector('SimpleTabs')
    await t.expect(SimpleTab.exists).eql(true); 
});

test('Click and Render Second Tab', async t => {
    // Test code
    await waitForReact();
    const CheckBoxTreeViewItem =  ReactSelector('CheckBoxTreeView');
    await t.click('#tab-1');
    await t.expect(CheckBoxTreeViewItem.exists).eql(true); 
});

