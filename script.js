
function dototal(unit, load, fan, ac, fanvalue, acvalue, dom, com) {
    var sum = 0, fnv = 0, acv = 0, d = 0;
    sum = sum + parseFloat(unit.value) * 10 + parseFloat(load.value) * 100;
    if (fan.checked == true) {
        fnv = parseFloat(fanvalue.value) * 50;
        sum = sum + fnv;
    }
    if (ac.checked == true) {
        acv = parseFloat(acvalue.value) * 100;
        sum = sum + acv;
    }
    document.getElementById("unitscost").value = unit.value * 10;
    document.getElementById("loadcost").value = load.value * 100;
    document.getElementById("fancost").value = fnv;
    document.getElementById("accost").value = acv;
    document.getElementById("totalbill").value = sum;

    if (dom.checked == true) {
        d = sum * 10 / 100;
    }
    else if (com.checked == true) {
        d = sum * 5 / 100;
    }
    document.getElementById("discount").value = d;
    document.getElementById("net").value = sum - d;
}