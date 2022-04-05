// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import moment from "moment";


// import './countdown.css';
// import { useEffect } from 'react';


// const SVGCircle = ({ radius }) => (
//     <svg className="countdown-svg">
//         <path
//             fill="none"
//             stroke="#333"
//             stroke-width="5"
//             d={describeArc(50, 50, 48, 0, radius)}
//         />
//     </svg>
// );


// // From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
// function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
//     var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

//     return {
//         x: centerX + radius * Math.cos(angleInRadians),
//         y: centerY + radius * Math.sin(angleInRadians)
//     };
// }

// function describeArc(x, y, radius, startAngle, endAngle) {
//     var start = polarToCartesian(x, y, radius, endAngle);
//     var end = polarToCartesian(x, y, radius, startAngle);

//     var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

//     var d = [
//         'M',
//         start.x,
//         start.y,
//         'A',
//         radius,
//         radius,
//         0,
//         largeArcFlag,
//         0,
//         end.x,
//         end.y
//     ].join(' ');

//     return d;
// }

// // From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// function mapNumber(number, in_min, in_max, out_min, out_max) {
//     return (
//         ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
//     );
// }

// function Countdown(props) {

//     // const { days, hours, minutes, seconds } = this.state;
//     const [days, setDays] = useState(10);
//     const [hours, setHours] = useState(10);
//     const [minutes, setMinutes] = useState(10);
//     const [seconds, setSeconds] = useState(10);


//     const daysRadius = mapNumber(days, 30, 0, 0, 360);
//     const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
//     const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
//     const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);
    
//     // if (!seconds) {
//     //     return null;
//     // }

//     useEffect(() => {
//         const interval = setInterval(() => {
//             console.log(props)
//             const { timeTillDate, timeFormat } = props;
//             const then = moment(timeTillDate, timeFormat);
//             const now = moment();
//             const countdown = moment(then - now);
//             const days = countdown.format('D');
//             const hours = countdown.format('HH');
//             const minutes = countdown.format('mm');
//             const seconds = countdown.format('ss');
//             setDays(days);
//             setHours(hours);
//             setMinutes(minutes);
//             setSeconds(seconds);
//         }, 1000);
//         return () => {
//             if (interval) {
//                 clearInterval(interval);
//             }
//         };
//     }, []);

//     return (
//         <div>
//             <h1>Countdown</h1>
//             <div className="countdown-wrapper">
//                 {days && (
//                     <div className="countdown-item">
//                         <SVGCircle radius={daysRadius} />
//                         {days}
//                         <span>days</span>
//                     </div>
//                 )}
//                 {hours && (
//                     <div className="countdown-item">
//                         <SVGCircle radius={hoursRadius} />
//                         {hours}
//                         <span>hours</span>
//                     </div>
//                 )}
//                 {minutes && (
//                     <div className="countdown-item">
//                         <SVGCircle radius={minutesRadius} />
//                         {minutes}
//                         <span>minutes</span>
//                     </div>
//                 )}
//                 {seconds && (
//                     <div className="countdown-item">
//                         <SVGCircle radius={secondsRadius} />
//                         {seconds}
//                         <span>seconds</span>
//                     </div>
//                 )}
//             </div>
            
//         </div>
//     );
// }
// export default Countdown;