var moment = require('moment');
const TIME_RANGE = [8, 9, 10, 11, 12, 13, 14, 15, 16 , 17 , 18 , 19 , 20];

const getTimes = (day) =>{
    const randHour = TIME_RANGE[Math.floor(Math.random() * TIME_RANGE.length)];
    return {
        startTime: moment(day).hour(randHour),
        endTime: moment(day).hour(randHour + 1)
    };
};

module.exports = {
    getTimes
}