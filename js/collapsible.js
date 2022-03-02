function show() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    var content = document.getElementsByClassName("content");

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.firstElementChild;
            console.log('content')
            if (this.classList.contains('active')) {

                content.style.display = 'block';
            } else {

                content.style.display = 'none';
            }
        });
    }
    console.log(content.length);
}