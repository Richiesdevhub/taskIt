function show() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let child = this.firstElementChild;
            console.log(child);
            console.log(i);
            if (this.classList.contains('active')) {

                child.style.display = 'block';
            }
            if (!this.classList.contains('active')) {

                child.style.display = 'none';
            }
            console.log(!this.classList.contains('active'))
        });
    }

}