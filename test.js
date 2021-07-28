//==============Imports===================\\
let Data = require('./test_data.json')
let Moment = require('moment');

//==============Global Variables============||
let objectsOfInt = [];
let fourteens = [];
let totalTime = 0;

//==============Function Definitions==========\\
const getActive = (data) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].key === 'MasterExecution') {
      objectsOfInt.push(data[i]);
    }
  }
}

const getFourteens = (active) => {
  for (let i = 0; i < active.length; i ++) {
    if ((active[i].timestamp > '2019-01-28T13:59:59.999Z') && (active[i].timestamp < '2019-01-28T15:00:00.000Z')) {
      fourteens.push(active[i]);
  }}
  return fourteens;
}

const calcTime = (objects) => {
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].value === 'ACTIVE') {
      let momentOne = Moment(objects[i].timestamp).utc();
      let momentTwo = Moment(objects[i+1].timestamp).utc();
      let duration = Moment.duration(momentTwo - momentOne).asMinutes();
      totalTime = totalTime + duration;
    }
  }
  return totalTime;
}

//===========Executables=============\\
getFourteens(Data)
getActive(fourteens);
calcTime(objectsOfInt);

console.log('TotalTime', totalTime);


