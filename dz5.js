
// // 1.1
// function stepen (x, n) {
//     if (n == 1) {
//         return x;
//       } else {
//         return x * pow(x, n - 1);
//       }
// }

//1.2

// function nod (a, b){
//     if(b!= 0) {
//         if (a > b){
//             return nod(b, (a % b));
//         } 
//         else if (a < b){
//             return nod(a, (b % a));
//         }    
//     }
//     return a;
// }
  
// alert(nod(12,24));

// 1.3  Написать функцию для поиска максимальной цифры в числе.
let maxnum = 0; 
function max (a){
   //alert (a[1]);
   
        if (maxnum < a[0]){
        maxnum = a[0];
        max(a.substring(1, a.lenght));
        } 
         else if (maxnum >= a[0]) {
         max(a.substring(1, a.lenght));
         }   

return(maxnum);
}
alert(max ('45668125'));









// function timer(t){
//     console.clear();
//     console.log(t.sec);
//     t.sec++;
// }

// setInterval(timer, 1000, {sec : 0});






// function loader(l) {
//     console.clear();
//     console.log(l.dots[l.counter]);
//     l.counter++;
//     if (l.counter == l.dots.length) {
//         l.counter = 0;
//     }

// }

// setInterval(loader, 1000, {dots : ['⠙','⠹', '⠸', '⠼', '⠦', '⠧', '⠇', '⠏', '⣽', '⣻', '⢿', '⡿', '⣟', '⣷', '⠋', '⠙', '⠚', '⠞', '⠦', '⠴', '⠲', '⠳', '⠄', '⠆', '⠇', '⠋', '⠙', '⠰', '⠠', '⠰', '⠸', '⠙', '⠇', '⠆', '⠖', '⠲'], counter: 0 });
// setInterval(loader, 4000, {dots : ['dot1', 'dot2', 'dot3', 'dot4'], counter: 0 });



// function loader(l) {
//     console.clear();
//     console.log(l.dots[l.counter]);
//     document.getElementById(text).innerHTML = l.dots[l.counter];

//     l.counter++;
//     if (l.counter == l.dots.length) {
//         l.counter = 0;
//     }
// }

// setInterval(loader, 100, {dots : ['-', '\\', '|', '/', '-', '—', '—', '—', '-'], counter: 0 });
// //setInterval(loader, 400, {dots : ['line1', 'line2'], counter: 0 });





