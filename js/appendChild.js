const button = document.getElementById('button');
const main = document.getElementById('main');
button.addEventListener('click', function() {
    const upperDiv = document.createElement('div');
    upperDiv.classList.add('panel');
    upperDiv.classList.add('collapsible');
    const descriptionDiv = document.createElement('div');
    descriptionDiv.innerText = 'Descripcion';
    descriptionDiv.classList.add('content');
    const numTareas = document.querySelectorAll('.panel');
    if (numTareas.length === 0) {
        upperDiv.innerText = 'Nueva tarea';
        main.appendChild(upperDiv);
        upperDiv.appendChild(descriptionDiv);
    } else {
        upperDiv.innerText = 'Nueva tarea' + " " + numTareas.length;
        main.insertBefore(upperDiv, numTareas[0])
        upperDiv.appendChild(descriptionDiv);
    }

    console.log(upperDiv);
    show();
});