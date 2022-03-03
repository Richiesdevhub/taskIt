// const form = document.getElementById('form');
const input = document.getElementById('input');
const plus = document.getElementById('plus');
const main = document.getElementById('main');
plus.addEventListener('click', function() {
    let taskText = input.value;
    const upperDiv = document.createElement('div');
    upperDiv.classList.add('panel');
    upperDiv.classList.add('collapsible');
    const descriptionDiv = document.createElement('div');
    descriptionDiv.innerText = 'Descripcion';
    descriptionDiv.classList.add('content');
    const numTareas = document.querySelectorAll('.panel');
    if (numTareas.length === 0) {
        // upperDiv.innerText = 'Nueva tarea';
        upperDiv.innerText = taskText;
        main.appendChild(upperDiv);
        upperDiv.appendChild(descriptionDiv);
        // upperDiv.nextElementSibling.removeEventListener('click', mostrar);
    } else {
        // upperDiv.innerText = 'Nueva tarea' + " " + numTareas.length;
        upperDiv.innerText = taskText;
        main.insertBefore(upperDiv, numTareas[0])
        upperDiv.appendChild(descriptionDiv);
        // upperDiv.nextElementSibling.removeEventListener('click', mostrar);
    }
    // main.firstChild.removeEventListener('click', mostrar);
    console.log(upperDiv);
    show();
});

function show() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", activeToggle);
        console.log(i);
    }
}

function activeToggle() {
    this.classList.toggle("active");
    let child = this.firstElementChild;
    console.log(child);
    if (this.classList.contains('active')) {
        child.style.display = 'block';
    }
    if (!this.classList.contains('active')) {
        child.style.display = 'none';
    }
    console.log(!this.classList.contains('active'))
}

/****************agarrar textto de form****************************/
// const form = document.getElementById('form');
// const input = document.getElementById('input');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     addTask();
// });

// function addTask(task) {
//     let taskText = input.value;
//     console.log(taskText);
// }