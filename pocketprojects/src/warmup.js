
const partyHeader = document.getElementById('party');
export const htmlGenerator = (string, htmlElement) => {
    let p = document.createElement("p");
    let textnode = document.createTextNode(string)
    p.appendChild(textnode);
    if (htmlElement.hasChildNodes()){
        removeAllChildNodes(htmlElement);
    }
    htmlElement.appendChild(p);
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

htmlGenerator('Party Time.', partyHeader);

htmlGenerator('I <3 Vanilla DOM manipulation.', partyHeader)