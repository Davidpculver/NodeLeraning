// function sayHello(name) {
//     console.log('Hello ' + name);
// }
//
// sayHello('Winston');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

var stdin = '';
process.stdin.on('data', function (chunk) {
    stdin += chunk;
}).on('end', function () {
    var lines = stdin.trim().split('\n');
    for (var i = 0; i<lines.length; i++){
        // process.stdout.write("" + lines[i] * lines[i] + '\n');
        // square(lines[i]);
        fibonacci(lines);
    }
})


function square(num) {
    process.stdout.write("" + num * num + '\n');
}



function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let num3;
    for (let i = 0; i < num - 1; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    process.stdout.write("" + num3 + '\n');
}