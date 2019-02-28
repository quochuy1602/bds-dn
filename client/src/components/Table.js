import React, { Component } from 'react';

class Table extends Component {
    render() {
        const { listData } = this.props;
        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                {
                    listData.map((v) => {
                        return(<tr>
                            <th scope="row">{v.number}</th>
                            <td>{v.direction}</td>
                            <td>{v.stretch}</td>
                            <td>{v.type}</td>
                        </tr> )
                    })
                }

                </tbody>
            </table>
        );
    }
}
export default Table;
