function matchFullName(text) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let matches = text.match(pattern);

    console.log(matches.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");
