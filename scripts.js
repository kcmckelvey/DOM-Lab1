document.addEventListener("DOMContentLoaded" , function() {
    let body = document.body;
    let div = document.createElement("header-container");


    let header1 = document.createElement('h1');
    let text = document.createTextNode('this is a H1');
    
    header1.appendChild(text);
    div.appendChild(header1);
    body.appendChild(div);


    let header2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is a h2');

    header2.appendChild(h2Text);
    div.appendChild(header2);
    body.appendChild(div);


    let header3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is a h3');

    header3.appendChild(h3Text);
    div.appendChild(header3);
    body.appendChild(div);


    let header4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is a h4');

    header4.appendChild(h4Text);
    div.appendChild(header4);
    body.appendChild(div);


    let header5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is a h5');

    header5.appendChild(h5Text);
    div.appendChild(header5);
    body.appendChild(div);


    let header6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is a h6');

    header6.appendChild(h6Text);
    div.appendChild(header6);
    body.appendChild(div);


    header1.className = "h1";
    header2.className = "h2";
    header3.className = "h3";
    header4.className = "h4";
    header5.className = "h5";
    header6.className = "h6";
});
