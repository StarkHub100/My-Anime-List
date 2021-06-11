function searchName() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByClassName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
            } else {
                    li[i].style.display = "none";
            }
    }
}
function searchGenre() {
    var input2, filter2, ul, li, p, i, txtValue;
    input2 = document.getElementById("Genre");
    filter2 = input2.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
            p = li[i].getElementsByClassName("genre")[0];
            txtValue = p.textContent || p.innerText;
            if (txtValue.toUpperCase().indexOf(filter2) > -1) {
                    li[i].style.display = "";
            } else {
                    li[i].style.display = "none";
            }
    }
}
function searchMovies() {
    var input3, filter3, ul, li, b, i, txtValue;
    input3 = document.getElementById("Type");
    filter3 = input3.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
            b = li[i].getElementsByClassName("type")[0];
            txtValue = b.textContent || b.innerText;
            if (txtValue.toUpperCase().indexOf(filter3) > -1) {
                    li[i].style.display = "";
            } else {
                    li[i].style.display = "none";
            }
    }
}
function searchSeasons() {
    var input4, filter4, ul, li, b, i, txtValue;
    input4 = document.getElementById("Seasons");
    filter4 = input4.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
            b = li[i].getElementsByClassName("Seasons")[0];
            txtValue = b.textContent || b.innerText;
            if (txtValue.toUpperCase().indexOf(filter4) > -1) {
                    li[i].style.display = "";
            } else {
                    li[i].style.display = "none";
            }
    }
}
function searchStatus() {
    var input5, filter5, ul, li, b, i, txtValue;
    input5 = document.getElementById("Status");
    filter5 = input5.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
            b = li[i].getElementsByClassName("Status")[0];
            txtValue = b.textContent || b.innerText;
            if (txtValue.toUpperCase().indexOf(filter5) > -1) {
                    li[i].style.display = "";
            } else {
                    li[i].style.display = "none";
            }
    }
}