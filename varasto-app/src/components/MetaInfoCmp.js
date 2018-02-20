import React from "react";

export class MetaInfoCmp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            metaInfo: props.metaInfo
        };
        console.log(this.state.metaInfo);
    }


    render() {
        return(
            <div className="list-group-item">
                {this.state.metaInfo.created}
                <br />
                {this.state.metaInfo.meta}


            </div>
        );


    }
}