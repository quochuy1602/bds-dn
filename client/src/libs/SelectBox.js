import React from 'react';
import Select from 'react-select';

class SelectBox extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isMulti:props.isMulti,
            selectedOption:null
        }
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption: selectedOption});
        this.props.handleSelect(selectedOption.value);
    }
    render() {
        const { selectedOption,isMulti } = this.state;
        const { listData } = this.props;
        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={listData}
                isMulti={isMulti}
                />
        );
    }
}
export default SelectBox;
