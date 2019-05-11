
var console1Pair = ''
var console2Pair = ''
var console3Pair = ''

var console1LeftValue = ''
var console1RightValue = ''

var console2LeftValue = ''
var console2RightValue = ''

var console3LeftValue = ''
var console3RightValue = ''

var combosCsv = `1-1,2-12,8-10,White1
1-1,4-5,6-5,Red2
1-2,1-4,11-4,Red1
1-7,12-3,8-4,Yellow3
1-10,7-11,3-12,Red6
1-12,1-1,5-4,Cyan3
2-4,1-6,3-10,Green2
2-5,11-2,3-5,Yellow2
2-6,5-4,10-3,Cyan1
2-7,2-11,9-10,Yellow6
2-9,12-3,10-2,Purple5
3-3,1-3,6-8,Green7
4-3,2-4,2-9,Green1
4-3,2-11,4-7,Purple6
4-6,5-6,5-12,Blue4
4-8,12-8,9-3,White5
4-9,9-4,5-5,Yellow1
5-6,7-3,7-10,Red5
5-9,11-7,12-10,Purple7
6-5,6-10,1-1,Purple1
6-9,12-10,8-5,White7
6-11,11-4,12-4,Cyan4
7-2,8-3,3-12,White6
7-4,2-7,7-9,Green5
7-9,6-5,5-12,Yellow4
7-12,1-2,5-4,Blue5
8-4,5-8,9-4,Cyan2
8-5,11-8,11-11,Cyan7
8-6,2-9,2-10,White3
8-6,9-2,12-12,Yellow5
8-10,5-6,11-11,Red3
8-12,5-9,9-4,Cyan6
9-3,12-7,12-12,Green3
9-7,7-8,12-7,Purple4
9-9,8-10,8-6,Purple2
10-2,3-8,9-3,White2
10-3,2-3,7-11,Green4
10-5,6-2,3-9,Blue2
10-12,11-5,8-12,Green6
11-1,5-7,10-2,Blue6
11-4,2-8,4-8,Blue7
11-4,4-11,12-3,Yellow7
11-4,5-4,7-6,Red4
11-6,12-8,11-11,Red7
11-7,6-3,12-5,Purple3
11-11,7-3,8-11,Blue3
12-2,11-4,2-11,Cyan5
12-5,7-1,5-7,White4
12-5,12-11,4-4,Blue1`



// var andresData = combosCsv.split('\n').reduce((memo, line) => {
//   var parts = line.split(',')
//   if (!memo[parts[0]]) {
//     var value = {}
//     value[parts[1]] = parts[3]
//     memo[parts[0]] = value
//   } else {
//     memo[parts[0]][parts[1]] = parts[3]
//   }
  
//   return memo
// }, {})

// console.info(andresData)

// console.info('-----------------------------------------------')


// console.info(combosCsv)


var data = {}

var combos = combosCsv.split(/\r\n|\n/);
for (let i = 0; i < combos.length; i++) {
  const element = combos[i];
  const values = element.split(',')

  const color = values[3].substring(0, values[3].length-1)

  const countToNumber = values[3].length-1
  const number = values[3][countToNumber]

  const terminal = color + ' ' + number

  if (!data[values[0]])
  {
    data[values[0]] = {}
  }
  data[values[0]][values[1]] = terminal
}

// The array looks like:
// data['1-2']['3-4'] = 'White 1'
console.info(data)

$('#wheel1 #cn-wrapper a').click(function(event) {
  console1LeftValue = $(this).attr("data-number");
  $('#wheel1 #cn-button').html(console1LeftValue);
  //
  $('#wheel1 #cn-wrapper a').removeClass('active');
  $(this).addClass('active');  
  
  result();
});  

$('#wheel2 #cn-wrapper a').click(function(event) {
  console1RightValue = $(this).attr("data-number");
  $('#wheel2 #cn-button').html(console1RightValue);
  //
  $('#wheel2 #cn-wrapper a').removeClass('active');
  $(this).addClass('active');  
  
  result();
});

$('#wheel3 #cn-wrapper a').click(function(event) {
  console2LeftValue = $(this).attr("data-number");
  console.info(`console 2 wheel3 value ${console2LeftValue}`)
  $('#wheel3 #cn-button').html(console2LeftValue);
  //
  $('#wheel3 #cn-wrapper a').removeClass('active');
  $(this).addClass('active');  
  
  result();
});  

$('#wheel4 #cn-wrapper a').click(function(event) {
  console2RightValue = $(this).attr("data-number");
  console.info(`console 2 wheel4 value ${console2RightValue}`)
  $('#wheel4 #cn-button').html(console2RightValue);
  //
  $('#wheel4 #cn-wrapper a').removeClass('active');
  $(this).addClass('active');  
  
  result();
});

// $('#wheel5 #cn-wrapper a').click(function(event) {
//   console2LeftValue = $(this).attr("data-number");
//   $('#wheel5 #cn-button').html(console2LeftValue);
//   //
//   $('#wheel5 #cn-wrapper a').removeClass('active');
//   $(this).addClass('active');  
  
//   result();
// });  

// $('#wheel6 #cn-wrapper a').click(function(event) {
//   console3RightValue = $(this).attr("data-number");
//   $('#wheel6 #cn-button').html(console3RightValue);
//   //
//   $('#wheel6 #cn-wrapper a').removeClass('active');
//   $(this).addClass('active');  
  
//   result();
// }); 

function result() {
  console1Pair =  console1LeftValue + '-' + console1RightValue
  console.info(`Console1Pair = ${console1Pair}`)
  $('#console1PairResult span').html(console1Pair);  

  if (!data[console1Pair]) {
    console.info("Console 1 pair NOT found ;(")
    $('#nodeToActivateValue').html('Nope');
    var nodeToActivate = document.getElementById('nodeToActivateValue');
    nodeToActivate.style.color = 'gray';

    // Nothing found, no need to continue
    return
  }

  console.info(`Console 1 pair found!: ${JSON.stringify(data[console1Pair])}`)

  const console1PairKeys = Object.keys(data[console1Pair])
  if(console1PairKeys.length == 1)
  {
    // Only one possibility found under console1Pair, so no need to search further,
    // just use that one.
    const key = console1PairKeys[0]
    const element = data[console1Pair][key]
    console.info(`There is only one possible combo, so lets print this: ${JSON.stringify(element)}`)
    $('#nodeToActivateValue').html(element);
    color = element.split(' ')[0];
    var nodeToActivate = document.getElementById('nodeToActivateValue');
    nodeToActivate.style.color = color;

    // Clear wheel3 
    $('#wheel3 #cn-wrapper a').removeClass('active');
    $('#wheel3 #cn-button').html('');
    $('wheel3').click(false);
    console2LeftValue = ''
    // Clear wheel4
    $('#wheel4 #cn-wrapper a').removeClass('active');
    $('#wheel4 #cn-button').html('');
    $('wheel4').click(false);
    console2RightValue = ''

    // Clear pair 2
    $('#console2PairResult span').html('-');  
    console1Pair = ''

    console.info(`Console 1 Pair has only one combo, select it automatically: ${JSON.stringify(element)}`)

    // Combo already found, no need to continue
    return
  }

  console.info(`Console 1 has more that 1 combo.`)
  // Console 1 has more than 1 combos.
  $('wheel3').click(true);
  $('wheel4').click(true);

  console2Pair =  console2LeftValue + '-' + console2RightValue
  console.info(`Console2Pair = ${console2Pair}`)
  $('#console2PairResult span').html(console2Pair);

  if (console2Pair.length > 1 && console2Pair.endsWith('-')) {
    // only the console left value has been introduced, but it might be enough

    console.info(`Console 2 left value has been clicked, see if there is only one combo with it...`)

    var elementsStartingWithLEftValue = 0
    var lastElementStartingWithLeftValue = ''
    for (let i = 0; i < console1PairKeys.length; i++) {
      const element = console1PairKeys[i];
      var elementLeftValue = element.split('-')[0]
      console.info(`Analyzing element: ${JSON.stringify(element)}, left value: ${elementLeftValue}...`)
      if (elementLeftValue === console2LeftValue) {
        elementsStartingWithLEftValue++
        lastElementStartingWithLeftValue = element
        console.info(`Yes, element: ${JSON.stringify(element)} starts with ${console2LeftValue}.`)
      }
    }

    if (elementsStartingWithLEftValue === 1) {
      console.info (`There is only 1 combo startgin with ${console2LeftValue}!, select it automatically: ${lastElementStartingWithLeftValue}`)
      console2Pair = lastElementStartingWithLeftValue
      $('#console2PairResult span').html(console2Pair);
      const element = data[console1Pair][console2Pair]
      console.info (`Element is ${element}`)
      $('#nodeToActivateValue').html(element);
      color = element.split(' ')[0];
      var nodeToActivate = document.getElementById('nodeToActivateValue');
      nodeToActivate.style.color = color;
      
      return
    }
  }

  console.info(`Console 1 pair exists, has more than one combo, and the console 2 left value has more than one combo...`)

  if (!data[console1Pair]) {

  } else {
    $('#nodeToActivateValue').html('Ok, select next pair.');
    var nodeToActivate = document.getElementById('nodeToActivateValue');
    nodeToActivate.style.color = 'green'; 

    if(data[console1Pair][console2Pair]) {
      console.info("Console 1 Console 2 pair found!")
      $('#nodeToActivateValue').html(data[console1Pair][console2Pair]);
      color = data[console1Pair][console2Pair].split(' ')[0];
      var nodeToActivate = document.getElementById('nodeToActivateValue');
      nodeToActivate.style.color = color; 
    } else {
      console.info("Console 1 Console 2 pair NOT found ;(")
      $('#nodeToActivateValue').html('Nope');
      var nodeToActivate = document.getElementById('nodeToActivateValue');
      nodeToActivate.style.color = 'gray'; 
    }
  }
}





/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );
// EventListener | @jon_neal | //github.com/jonathantneal/EventListener
!window.addEventListener && window.Element && (function () {
    function addToPrototype(name, method) {
        Window.prototype[name] = HTMLDocument.prototype[name] = Element.prototype[name] = method;
    }
 
    var registry = [];
 
    addToPrototype("addEventListener", function (type, listener) {
        var target = this;
 
        registry.unshift({
            __listener: function (event) {
                event.currentTarget = target;
                event.pageX = event.clientX + document.documentElement.scrollLeft;
                event.pageY = event.clientY + document.documentElement.scrollTop;
                event.preventDefault = function () { event.returnValue = false };
                event.relatedTarget = event.fromElement || null;
                event.stopPropagation = function () { event.cancelBubble = true };
                event.relatedTarget = event.fromElement || null;
                event.target = event.srcElement || target;
                event.timeStamp = +new Date;
 
                listener.call(target, event);
            },
            listener: listener,
            target: target,
            type: type
        });
 
        this.attachEvent("on" + type, registry[0].__listener);
    });
 
    addToPrototype("removeEventListener", function (type, listener) {
        for (var index = 0, length = registry.length; index < length; ++index) {
            if (registry[index].target == this && registry[index].type == type && registry[index].listener == listener) {
                return this.detachEvent("on" + type, registry.splice(index, 1)[0].__listener);
            }
        }
    });
 
    addToPrototype("dispatchEvent", function (eventObject) {
        try {
            return this.fireEvent("on" + eventObject.type, eventObject);
        } catch (error) {
            for (var index = 0, length = registry.length; index < length; ++index) {
                if (registry[index].target == this && registry[index].type == eventObject.type) {
                    registry[index].call(this, eventObject);
                }
            }
        }
    });
})();