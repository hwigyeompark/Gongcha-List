import React, {Component} from 'react';

class GongchaList extends Component{
    static defaultProps = {
      name : 'No Name',
      price : 'No Price',
      pic : 'No Pic'
    };
    render(){
        const styles = {
            container : {
                border : '1px solid #555',
                borderRadius : '20px',
                width : '30%',
                height : '300px',
                margin : '0 auto',
                padding : '50px',
            },
            picStyle : {
                width:'250px',
                height: '250px',
                backgroundImage : `url(${this.props.pic})`,
                backgroundSize : 'contain',
                backgroundRepeat : 'no-repeat',
                borderRadius:'50%'
            },
            align : {
                fontSize : '1.2em',
                display : 'inline-block',
                verticalAlign : 'middle'
            }
        };
        return(
          <div></div>
        );
    }
}
export default GongchaList;