function extract(content) {
    let textElement = document.getElementById(content);
    let pattern = /\(([^\(\)]+)\)/g;
    let text = textElement.textContent;
    let matches = text.matchAll(pattern);
    let result = Array.from(matches)
        .map(match => match[1])
        .join('; ');

    return result;
}