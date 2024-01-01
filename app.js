//  Main working
function f() {
    let a = document.getElementById("cgpa").value;
    let b = (a - 0.75) * 10;
    if (a >= 0.75 && a < 10)
        document.getElementById("changeable").innerHTML = b + "%";
    else if (a == 10)
        document.getElementById("changeable").innerHTML = "100" + "%";
    else
        document.getElementById("changeable").innerHTML = "null";
}
//percentage to cgpa
function f1() {
    setTimeout(function f111() {
        document.getElementsByClassName("card")[2].style.display = "block";
        document.getElementById("view").style.display = "none";
        document.getElementById("hide").style.display = "block";
        document.getElementById("gap").style.display = "block";
    }, 500);
}
function f11() {
    setTimeout(function f112() {
        document.getElementsByClassName("card")[2].style.display = "none";
        document.getElementById("view").style.display = "block";
        document.getElementById("hide").style.display = "none";
        document.getElementById("gap").style.display = "none";
    }, 500);
}
//calculator function

function f3() {
    let a = document.getElementById("percentage").value;
    let b = (a / 10) + 0.75;
    if (a > 0 && a <= 92.5)
        document.getElementById("changeable1").innerHTML = b;
    else if (a > 92.5 && a <= 100)
        document.getElementById("changeable1").innerHTML = "10";
    else
        document.getElementById("changeable1").innerHTML = "null";
}
//scholarship view/hide first one
function f2() {
    setTimeout(function f222() {
        document.getElementsByClassName("card")[4].style.display = "block";
        document.getElementById("view1").style.display = "none";
        document.getElementById("hide1").style.display = "block";
        document.getElementById("gap1").style.display = "block";
    }, 500);
}
function f22() {
    setTimeout(function f2222() {
        document.getElementsByClassName("card")[4].style.display = "none";
        document.getElementById("view1").style.display = "block";
        document.getElementById("hide1").style.display = "none";
        document.getElementById("gap1").style.display = "none";
    }, 500);
}

// first one sholarship calculator
function f4() {
    let a = document.getElementById("odd").value;
    let b = document.getElementById("even").value;
    if (a >= 0.75 && a <= 10 && b >= 0.75 && b <= 10) {
        let c = (a * 0.5) + (b * 0.5);
        let d = (c - 0.75) * 10;

        if (d >= 60 && d <= 100) {
            document.getElementById("changeable2").innerHTML = d + "%";
            document.getElementById("changeable3").innerHTML = "eligible";
        }
        else {
            document.getElementById("changeable2").innerHTML = d + "%";
            document.getElementById("changeable3").innerHTML = "not eligible";
        }
    }
}
//second one scholarship tool calculator
function f6() {
    setTimeout(function f666() {
        document.getElementsByClassName("card")[6].style.display = "block";
        document.getElementById("view2").style.display = "none";
        document.getElementById("hide2").style.display = "block";
        document.getElementById("gap2").style.display = "block";
    }, 500);
}

function f66() {
    setTimeout(function f6666() {
        document.getElementsByClassName("card")[6].style.display = "none";
        document.getElementById("view2").style.display = "block";
        document.getElementById("hide2").style.display = "none";
        document.getElementById("gap2").style.display = "none";
    }, 500);
}
// calculate even sem targeted cgpa

function f5() {
    let a = document.getElementById("oddsem").value;
    if (a >= 0.75 && a <= 10) {
        let b = (a - 0.75) * 10;
        let c = 120 - b;
        let d = (c / 10) + 0.75;
        document.getElementById("changeable4").innerHTML = d;
    }
}

function F1() {

    window.location.href = "https://my-info-2bzhegoy0-pritam071102.vercel.app";
}
function F2() {
    window.location.href = "https://pritam071102.github.io/MusicPlayer/";
}
function F3() {
    window.location.href = "https://pritam071102.github.io/Bolg-on-stock-market-crash/";
}