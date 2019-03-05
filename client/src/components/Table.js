import React, { Component } from 'react';
const styles = {backGround: "#1ade58"}
class Table extends Component {
    constructor(props) {
        super(props);
    }
    showInfo(id){
        this.props.showInfo(id);
    }
    render() {
        const { listData,showInfoIndex } = this.props;
        console.log("props showInfoIndex",showInfoIndex);
        return (
            <table className="table table-striped table-fixed">
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
                        if(showInfoIndex === v._id){
                            return(
                                <tr style={{background: "#1ade58"}} key={v._id} onClick={()=>{ this.showInfo(v._id)}} >
                                    <th scope="row">{v.number}</th>
                                    <td>{v.direction}</td>
                                    <td>{v.stretch}</td>
                                    <td>{v.type}</td>
                                </tr>
                            )
                        }else{
                            return(
                                <tr key={v._id} onClick={()=>{ this.showInfo(v._id)}}>
                                    <th scope="row">{v.number}</th>
                                    <td>{v.direction}</td>
                                    <td>{v.stretch}</td>
                                    <td>{v.type}</td>
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
export default Table;
