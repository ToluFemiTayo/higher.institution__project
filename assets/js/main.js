// function buttonsWithVar (counts, targetElement) {
//     for (var i = 0; i <= count; i+=1) {
//         var button = makeButton ('button' + 1);
  
//         button.onclick = function () {
//           alert ("This is button" + i + ".");
//         };
//         targetElement.appendChild(button);
//     }
//   }
  
  
  
  
//   $(function () {
//     $('.example-popover').popover({
//       container: 'body'
//     })
//   });
  
  
  
//   //wrough work
  
  
  
  
  
  
  
  
  
  
  
//   for (let i = 0; i < values.length; ++i) {
//     if (0 <= values[i]) {
//       result[values[i]] = true;
//     }
//   }
  
//   for (let i = 1; i <= result.length; ++i) {
//     if (undefined === result[i]) {
//       return i;
//     }
//   }
  
//   return 1
//   }
  
  
  
//   function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   function solution(A) {
//     for (i = 1; i < 1000000; i++) {
//       if(!A.includes(i)) return i;
//     }
//   }
  
//   var numbers = [1..100,000];
  
//   for (let i = 0; i < A.length; ++i) {
//     if (0 <= A[i]) {
//       numbers[A[i]] = true;
//     }
//   }
  
//   for (let i = 1; i <= numbers.length; ++i) {
//     if (undefined === numbers[i]) {
//       return i;
//     }
//   }
  
//   return 1
//   }
  
//   }
  
  
//   /////////////////////
//   const personB = Object.create(person, {  
//   profession: {
//     value: 'Astronaut',
//     enumerable: true
//   }
//   });
  
//   console.log(personB.hasOwnProperty('profession'));
  
  
  
  
  
  
  
  
  
//   //countdown timer
//   function timer(seconds) {
  
//   }
  
  
  
  
//   // follow links
//   // const triggers = document.querySelectorAll('');
//   // const highlight = document.createElement('span');
//   // highlight.classList.add(highlight);
//   // document.body.append(highlight);
  
//   //when you hoval on the links and it's going to resize itself:the basic is the use of BoundingClientRect and applying it to inline style
//   // function highlightLink() {
//   // console.log(this);
//   // console.log('highlight');
//   //   const linkCoords = this.getBoundingClientRect();
//   //   console.log(linkCoords);
//   //   const coords = (
//   //     width: linkCoords.width,
//   //     height: linkCoords.height,
//   //     top: linkCoords.top + window.scrollY,
//   //     left: linkCoords.left + window.scrollx,
//   //   )
//   //   highlight.style.width = '${coords.width}px';
//   //   highlight.style.height = '${coords.height}px';
//   //   highlight.style.transform = 'translate(${coords.left}px, ${linkcoords.top}px)';
  
//   // }
  
//   // triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   function setup() {
//     // Write your code here.
//     var els = document.getElementsByClassName("remove")[0].click();
  
//     for (var i = 0; i < els.length; i++) {
//       els [i].addEvenListener('click', function () {
//         this.parentNode.remove();
//       })
//     }
//   };
  
//   // Example case. 
//   // document.body.innerHTML = `
//   // <div class="image">
//   //   <img src="https://goo.gl/kjzfbE" alt="First">
//   //   <button class="remove">X</button>
//   // </div>
//   // <div class="image">
//   //   <img src="https://goo.gl/d2JncW" alt="Second">
//   //   <button class="remove">X</button>
//   // </div>`;
  
//   setup();
  
//   document.getElementsByClassName("remove")[0].click();
//   console.log(document.body.innerHTML);
  
  
//   ///
//   function formatDate(userDate) {
//     // format from M/D/YYYY to YYYYMMDD
//       const arrayNumber = userDate.split("/");
//       if (arrayNumber[0].length < 2) {
//        return arrayNumber[0] = "0" + arrayNumber[0];
//       }
//       if (arrayNumber[1].length < 2) {
//         return arrayNumber[0] = "0" + arrayNumber[1];
//       }
//       const arrayAnswer = arrayNumber[2]+ arrayNumber[0]+ arrayNumber[1];
//       return arrayAnswer;
//   } 
  
//   console.log(formatDate("1/3/2014"));
//   //output must equal 20140103
  
//   function fizzbuzz() {
//     return 'Fizz' + 'buzz';
    
//   }
//   fizzbuzz();





//   /////////////////////////////////////////
// const array = [1, 1, 2, 3, 5, 5, 1]
// const uniqueArray = [...new Set(array)];
// console.log(uniqueArray);




//drag and drop





// Js on form
var _form = document.getElementsByClassName("form__fill2")[0];
var _inputs = Array.from(_form.getElementsByClassName("form-control"));
var _error = 0;
var keyupHandler = function (e) {
  var _next = e.target.nextElementSibling;
  if (e.target.name === "name" ) {
   if (e.target.value.length < 4) {
    this.classList.add("is-invalid");
    _next.classList.remove("d-none");
   }
   else {
    this.classList.remove("is-invalid");
    _next.classList.add("d-none");
   }
  }
  
  else if (e.target.name === "email") {
   var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   var value = e.target.value;
   if (!regExp.test(String(value).toLowerCase())) {
    this.classList.add("is-invalid");
    _next.classList.remove("d-none");
   }
   else {
    this.classList.remove("is-invalid");
    _next.classList.add("d-none");
   }
  }
  else if (e.target.name === "message") {
   if (e.target.value.length < 10) {
    this.classList.add("is-invalid");
    _next.classList.remove("d-none");
   }
   else {
    this.classList.remove("is-invalid");
    _next.classList.add("d-none");   
   };
  }
  
 };
_inputs.forEach(function (eachInputs) {
     eachInputs.addEventListener("keyup", keyupHandler);
   });
 _form.addEventListener("submit")
e.preventDefault();
// Js on form
