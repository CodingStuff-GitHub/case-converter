function toProperCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

function toSentenceCase(str) {
    str = str.toLowerCase().split(' ');
    str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
    return str.join(' ');
}

function downloadFile(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("upper-case").addEventListener("click", function () {
    if (document.getElementById("text-input").value !== '') {
        const x = document.getElementById("text-input").value;
        document.getElementById("text-input").value = x.toUpperCase();
    }
})
document.getElementById("lower-case").addEventListener("click", function () {
    if (document.getElementById("text-input").value !== '') {
        const x = document.getElementById("text-input").value;
        document.getElementById("text-input").value = x.toLowerCase();
    }
})
document.getElementById("proper-case").addEventListener("click", function () {
    if (document.getElementById("text-input").value !== '') {
        const x = document.getElementById("text-input").value;
        document.getElementById("text-input").value = toProperCase(x);
    }
})
document.getElementById("sentence-case").addEventListener("click", function () {
    if (document.getElementById("text-input").value !== '') {
        const x = document.getElementById("text-input").value;
        document.getElementById("text-input").value = toSentenceCase(x);
    }
})

document.getElementById("save-text-file").addEventListener("click", function () {
    if (document.getElementById("text-input").value !== '') {
        const x = document.getElementById("text-input").value;
        downloadFile("cases.txt", x);
    }
})