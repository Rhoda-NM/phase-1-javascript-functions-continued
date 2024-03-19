function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
//console.log(saturdayFun("Ice-skate"));
const mondayWork = function(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}
function wrapAdjective(greet = "*") {
    return function(adjective = "special") {
        return `You are ${greet}${adjective}${greet}!`
    }
}
//const hello = wrapAdjective('||')('an awesome person');
//console.log(hello);