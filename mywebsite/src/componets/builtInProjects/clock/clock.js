import React from "react";
import './clock.css';

export default class clock extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            time: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                time: new Date()
            });
        }, 1000);
    }

    componentWillMount() {
        clearInterval(this.timerId);
    }

    render(){
        return(
            <div id='clockbody'>
                <div className='clock'>
                    <div className='hour_hand' style={{ transform: `rotateZ(${this.state.time.getHours() * 30}deg)` }}></div>
                    <div className='min_hand' style={{ transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)` }}></div>
                    <div className='sec_hand' style={{ transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)` }}></div>
                    <span className="num_twelve">12</span>
                    <span className="num_one">1</span>
                    <span className="num_two">2</span>
                    <span className="num_three">3</span>
                    <span className="num_four">4</span>
                    <span className="num_five">5</span>
                    <span className="num_six">6</span>
                    <span className="num_seven">7</span>
                    <span className="num_eight">8</span>
                    <span className="num_nine">9</span>
                    <span className="num_ten">10</span>
                    <span className="num_eleven">11</span>
                </div>
            </div>
        )
    }
}