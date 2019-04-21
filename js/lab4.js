// lab4.js
/* Author Name: Bruno George;
   Assignment : Module 2 Lab 4;
   Due Date   : 04/21/2019; */
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.
// from:  https://www.azlyrics.com/lyrics/kinks/youreallygotme.html
function verse1(){
    let output = '';
    // your code here
    output = "<p>Girl, you really got me goin\'</p><p>You got me so I don\'t know what I\'m doin\'</p><p>Yeah, you really got me now</p><p>You got me so I can\'t sleep at night</p><br/><br/>";
    

    return output;
}
function chorus1(){
    let output = "<p>See, don\'t ever set me free</p><p>I always wanna be by your side</p><p>Girl, you really got me now</p><p>You got me so I can\'t sleep at night</p><br><br>";
    // your code here
    output = "<p>See, don\'t ever set me free</p><p>I always wanna be by your side</p><p>Girl, you really got me now</p><p>You got me so I can\'t sleep at night</p><br><br>";

    return output;
}

function chorus2(){
    let output = '';
    // your code here
    output = "<p>Yeah, you really got me now</p><p>You got me so I don\'t know what I\'m doin\', now</p><p>Oh yeah, you really got me now</p><p>You got me so I can\'t sleep at night</p><br><br>";
    

    return output;
}

function chorus3(){
    let output = '';
    //let output = "<p>You Really Got Me</p><p>You Really Got Me</p><p>You Really Got Me</p><br><br>";
    // your code here
    output = "<p>You Really Got Me</p><p>You Really Got Me</p><p>You Really Got Me</p><br><br>";

    return output;
}

function title1(){
    let output = '';
    output = '<h2>"You Really Got Me"</h2><h3>By Ray Davies</h3><br>';

    return output
}



function main(){
    let finalOutput = '' ; // used to build lyrics string
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags
    
    finalOutput = title1()+verse1()+chorus2()+chorus3()+chorus1()+chorus2()+chorus3()+chorus2()+chorus3()+chorus1()+chorus2()+chorus3();

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
    //document.getElementById('lyrics').innerHTML = verse1();
    
}

window.onload = function(){
    main();
    
    
} 