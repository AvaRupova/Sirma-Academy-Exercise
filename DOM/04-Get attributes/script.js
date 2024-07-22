function getAttributes() {
    const aElement = document.getElementById('someId')

    console.log('type = ' + aElement.getAttribute('type'));
    console.log('hreflang = ' + aElement.getAttribute('hreflang'));
    console.log('rel = ' + aElement.getAttribute('rel'));
    console.log('target = ' + aElement.getAttribute('target'));
    console.log('href = ' + aElement.getAttribute('href'));
}