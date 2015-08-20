// JavaScript source code
var haveMoney = 0;

function initMoney() {
    document.getElementById("totalMoney").innerHTML = ("TotalMoney:<br />$"  + haveMoney);
}

function clickTree() {
    haveMoney++;
    document.getElementById("totalMoney").innerHTML = ("TotalMoney:<br />$" + haveMoney);
}
