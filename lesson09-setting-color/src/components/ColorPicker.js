import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state={
            colors : ['red','green','blue','#ccc']
        };
    }

    showColor(color){
        console.log(this.props.color);
        return {
            background: color //thuoc tinh css
        };
    }

    setActiveColor(color){
        this.props.onReceiveColor(color); // truyen nguoc lai va di ra thang cha
    }

    render() {

        var elmColors = this.state.colors.map((color, index) => {
            return <span 
                    key={index} 
                    style={this.showColor(color)}
                    className={this.props.color === color ? 'active' : ''} //su dung class='active'
                    onClick={() => this.setActiveColor(color)}
                    ></span> 
        })

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        { elmColors }

                        <hr />
                      
                    </div>
                </div>
            </div >

        );
    }
}

export default ColorPicker;