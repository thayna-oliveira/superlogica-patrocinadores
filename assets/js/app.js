
function youtubeEmbed() {
    for (var e = document.querySelectorAll(".youtube"), a = 0; a < e.length; a++) {
        var l = "https://img.youtube.com/vi/" + e[a].dataset.embed + "/sddefault.jpg",
            t = new Image;
        t.src = l, t.addEventListener("load", void e[a].appendChild(t)), e[a].addEventListener("click", function () {
            var e = document.createElement("iframe");
            e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", ""), e.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1"), e.setAttribute("allow", "autoplay; encrypted-media;"), this.innerHTML = "", this.appendChild(e)
        })
    }
}

$(document).ready(function () {
    youtubeEmbed();
});