var popup = document.getElementById("popup");

var span = document.getElementsByClassName("close")[0];

var learnMoreLinks = document.getElementsByClassName("learn-more");

for (var i = 0; i < learnMoreLinks.length; i++) {
    learnMoreLinks[i].onclick = function() {
        var img = this.getAttribute("data-img");
        var name = this.getAttribute("data-name");
        var desc = this.getAttribute("data-desc");
        var price = this.getAttribute("data-price");
        
        document.getElementById("popup-img").src = img;
        document.getElementById("popup-name").innerText = name;
        document.getElementById("popup-desc").innerText = desc;
        document.getElementById("popup-price").innerText = "Price: " + price;
        popup.style.display = "block";
        
        document.body.style.overflow = "hidden";
    }
}

span.onclick = function() {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
