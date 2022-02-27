var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        console.log(coll);
        this.classList.toggle("active");
        let content = document.getElementsByClassName('content');
        // console.log(content);
        // console.log(content.item(i));
        let content2 = this.nextElementSibling;
        console.log(content2);
        if (this.classList.contains('active')) {
            console.log(content[i]);
            content[i].style.display = 'block';
        } else {
            console.log(content[i]);
            content[i].style.display = 'none';
        }
    });
}

// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         if (this.classList.contains('active')) {
//             content.style.display = 'block';
//         } else {
//             content.style.display = 'none';
//         }
//     });
// }