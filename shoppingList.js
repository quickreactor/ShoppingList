var linkDiv = document.getElementById("link-div");
var textArea = document.getElementById("shopping-list");
var cdRadio = document.getElementById("cd");
var nwRadio = document.getElementById("nw");
var mainHeading = document.getElementById("main-heading");

function generate() {
    var listArray = textArea.value.split('\n');
    linkDiv.innerHTML = "";
    listArray.forEach((e, i) => {
        
        var prefix = '';

        if (nwRadio.checked) {
            console.log("new world baby");
            prefix = "https://www.ishopnewworld.co.nz/Search?q=";
        } else if (cdRadio.checked) {
            console.log("countdown biatch!");
            prefix = "https://shop.countdown.co.nz/shop/searchproducts?search=";
        }

        var newDiv = document.createElement("div");
        newDiv.id = i;

        var linkHref = e.replace(/\s/g, "%20");

        newDiv.innerHTML = `<a href="${prefix}${linkHref}" target="_blank" class='ingredient-link'>${e}</a>`;
        
        linkDiv.appendChild(newDiv);
    });

    linkArray = document.querySelectorAll('.ingredient-link');
    var newLink = document.createElement("a");
    newLink.classList.add('open-all');
    newLink.innerHTML = 'Open ALL';
    newLink.onclick = function () {
        linkArray.forEach((a) => {
            window.open(a.href, "_blank");
        });
    };
    linkDiv.appendChild(newLink);

};

function clearArea() {
    textArea.value = "";
    console.log("hi");
}

function headingGenerate(e) {
    var shopName = e.target.value;
    mainHeading.innerHTML = `${shopName} Shopping List Link Generator`
}