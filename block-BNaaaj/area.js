function square(side){
    return side*side;
}


function rectangle(l,b){
    return 2*(l+b);
}

function circle(r){
    return 2*Math.PI*r;
}


module.exports={
    square:square,
    rectangle:rectangle,
    circle:circle
}