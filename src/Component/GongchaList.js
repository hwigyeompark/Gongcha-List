import React, {Component} from 'react';
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";


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
          <div style={styles.container}>
              <div style={styles.picStyle} />
              <div style={styles.align}>
                  <div style={{fontSize:'1.5em'}}>Name : {this.props.name}</div>
                  <div>Price : {this.props.price}</div>
              </div>
          </div>
        );
    }
}
class GongchaList extends Component{
    render(){
        const contacts = [
            {
                name:'망고 쥬얼리 밀크티',
                price : '5.1',
                pic: {img1}
            },
            {
                name:'망고 밀크 요거티',
                price : '5.1',
                pic: {img2}
            },
            {
                name:'딸기 쿠키 스무디',
                price : '5.3',
                pic: {img3}
            },
            {
                name:'딸기 얼그레이 티라떼',
                price : '4.5',
                pic: {img4}
            },
            {
                name:'초코 쿠앤크 스무디',
                price : '4.5',
                pic: {img5}
            },
            {
                name:'청포도 스무디',
                price : '4.8',
                pic: {img6}
            }
        ]
    }

}
export default GongchaList;