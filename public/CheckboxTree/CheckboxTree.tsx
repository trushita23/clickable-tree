
import PropTypes from 'prop-types';

interface checkBoxTreeProps {
    nodes: Proptypes.arrayOf(nodeShape).isRequired,
        checked: listShape,
        disabled: PropTypes.bool,
        expandDisabled: PropTypes.bool,
        expandOnClick: PropTypes.bool,
        expanded: listShape,
        icons: iconsShape,
        id: PropTypes.string,
        lang: languageShape,
        name: PropTypes.string,
        nameAsArray: PropTypes.bool,
        nativeCheckboxes: PropTypes.bool,
        noCascade: PropTypes.bool,
        onlyLeafCheckboxes: PropTypes.bool,
        optimisticToggle: PropTypes.bool,
        showExpandAll: PropTypes.bool,
        showNodeIcon: PropTypes.bool,
        showNodeTitle: PropTypes.bool,
        onCheck: PropTypes.func,
        onClick: PropTypes.func,
        onExpand: PropTypes.func,
}

export default class ChecboxTree {
    render() {
        return <h1>Check Box Tree</h1>
    }
}