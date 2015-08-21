// JavaScript source code
var haveMoney = 0;
var click_pointer_x;
var click_pointer_y;

function initMoney() {
    if (haveMoney = Cookies.get('Money')) { } else { haveMoney = 0; }
    document.getElementById("totalMoney").innerHTML = ("TotalMoney:<br />$"  + haveMoney);
}

// when moneytree is clicked 
function clickTree() {
    haveMoney++;
    Cookies.set('Money', haveMoney, { expires: 7 });
    document.getElementById("totalMoney").innerHTML = ("TotalMoney:<br />$" + haveMoney);
}

// ìΩñºä÷êî
(function () {
    function MouseDownFunc(e) {
        click_pointer_x = e.click_pointer_x;
        click_pointer_y = e.click_pointer_y;
    }
} )