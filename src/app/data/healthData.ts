// export const HealthData = [
//     ['aug,20', 40],
//     ['aug,30', 40],
//     ['sep,15', 35],
//     ['sep,30', 39],
//     ['oct,1', 23],
//     ['oct,15', 50],
//     ['oct, 30', 50], 
// ];
export const HealthData = [{
    name: 'aug,20',
    //color: '#00FF00',
    y: 32,
    val: 5,
    tooltip: `<div><b>There are following key factor which shows low productivity in this sprint:</b>
    <br>1. Stories were blocked.</br>
    <br>2. Developer were not able to understand requirement properly.</br></div>`
}, {
    name: 'aug,30',
    //color: '#FF00FF',
    y: 45,
    val: 3,
    tooltip: 'This sprint went very well'
}, {
    name: 'sep,15',
    //color: '#00FF00',
    y: 34,
    val: 6,
    tooltip: `There are following key factor which shows low productivity in this sprint:
    1. Stories were blocked
    2. Developer were not able to understand requirement properly`
},
{
    name: 'sep,30',
    //color: '#FF00FF',
    y: 38,
    val: 3,
    tooltip: 'This sprint went very well'
}]
export const HealthDataEstimated = [
    ['aug,20', 50],
    ['aug,30', 40],
    ['sep,15', 35],
    ['sep,30', 40]
    // ['sep,30', 40],
    // ['oct,1', 40],
    // ['oct,15', 51],
    // ['oct, 30', 30],
];