document.getElementById('console').style.display = 'inline'; // show if js is enabled
consoleText('Zusier', 't1text', '#673ab7');

function consoleText(word, id, color) {
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute('style', 'color:' + color);
    window.setInterval(function() {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = word.substring(0, letterCount);
            window.setTimeout(function() {
                target.setAttribute('style', 'color:' + color);
                letterCount += 1;
                waiting = false;
            }, 1000);
        } else if (waiting === false) {
            target.innerHTML = word.substring(0, letterCount);
            letterCount += 1;
        }
    }, 160);
    window.setInterval(function() {
        if (visible === true) {
            con.className = 'consoleunderscore hidden';
            visible = false;
        } else {
            con.className = 'consoleunderscore';
            visible = true;
        }
    }, 400);
}