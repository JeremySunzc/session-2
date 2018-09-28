

function tellFortune(num_child, partner, geo, job){
    console.log(`You will be a ${job} in ${geo}, and married to ${partner} with ${num_child} kids`);
    
};

var num_child = prompt("How many child do you want ?");
var partner = prompt("What's your partner's name ?");
var geo = prompt("What's your location ?");
var job = prompt("What's your job? ");

tellFortune(num_child, partner, geo, job);