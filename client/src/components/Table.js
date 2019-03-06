import React, { Component } from 'react';
import Action from '../libs/Action';
class Table extends Component {
    constructor(props) {
        super(props);
    }
    showInfo(id){
        this.props.showInfo(id);
    }
    render() {
        const { listData,showInfoIndex,type } = this.props;
        console.log("props showInfoIndex",showInfoIndex);
        if(type == '1') {
            return (
                <table className="table table-striped table-fixed">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        listData.map((v) => {
                            if (showInfoIndex === v._id) {
                                return (
                                    <tr style={{background: "#1ade58"}} key={v._id}
                                        onClick={()=>{ this.showInfo(v._id)}}>
                                        <th scope="row">{v.number}</th>
                                        <td>{v.direction}</td>
                                        <td><Action/></td>
                                    </tr>
                                )
                            } else {
                                return (
                                    <tr key={v._id} onClick={()=>{ this.showInfo(v._id)}}>
                                        <th scope="row">{v.number}</th>
                                        <td>{v.direction}</td>
                                        <td><Action/></td>
                                    </tr>
                                )
                            }

                        })
                    }

                    </tbody>

                </table>
            );
        }else{
            return (
                <table className="table table-striped table-fixed">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">City</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        listData.map((v) => {
                            if (showInfoIndex === v._id) {
                                return (
                                    <tr style={{background: "#1ade58"}} key={v._id}
                                        onClick={()=>{ this.showInfo(v._id)}}>
                                        <th scope="row">{v.name}</th>
                                        <td>{v.city}</td>
                                        <td><Action/></td>
                                    </tr>
                                )
                            } else {
                                return (
                                    <tr key={v._id} onClick={()=>{ this.showInfo(v._id)}}>
                                        <th scope="row">{v.name}</th>
                                        <td>{v.city}</td>
                                        <td><Action/></td>
                                    </tr>
                                )
                            }

                        })
                    }

                    </tbody>

                </table>
            );
        }
    }
}
export default Table;
