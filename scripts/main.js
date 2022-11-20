window.onload = function() {
    let textarea = document.getElementById("text");
    textarea.addEventListener("input", update_stats);
}

function update_stats() {
    let textarea = document.getElementById("text");
    let words_info = document.getElementById("words_info");
    let symbols_info = document.getElementById("symbols_info");
    let symbols_s_info = document.getElementById("symbols_s_info")

    let text = textarea.value;
    let symbols = text.length;
    let symbols_without_spaces = text.replace(/\s/g, '').length;
    // count number of words
    let words = text.split(/\s+/).filter(function(word) {
        return word.length > 0 && word.match(/[a-zA-Zа-яА-Я]/);
    }).length;

    words_info.innerHTML = `Words: ${words}`;
    symbols_info.innerHTML = `Symbols: ${symbols}`;
    symbols_s_info.innerHTML = `Symbols without spaces: ${symbols_without_spaces}`;
}
