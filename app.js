const goalElement = document.getElementById('goal');
const buttonElement = document.getElementById('submit');
const listElement = document.getElementById('list');

// function addGoal() {
//     const goal = goalElement.value.trim();
//     if (goal === '') {
//         alert('Please enter a  goal.');
//         return;
//     }
//     const liElement = document.createElement('li');
//     liElement.textContent = goal;
//     listElement.appendChild(liElement);
// }

// function removeeGoal(event) {
//     const liElement = event.target;
//     listElement.removeChild(liElement);
// }

// listElement.addEventListener('click', removeeGoal);
// function markGoalDone(event) {
//     const liElement = event.target;
//     liElement.classList.toggle('done');
// }
// listElement.addEventListener('click', markGoalDone);
// // buttonElement.addEventListener('click', addGoal);
listElement.addEventListener('click', (event) => {
    const liElement = event.target;
    liElement.classList.toggle('done');
});
 
    buttonElement.addEventListener('click', () =>{
        const goal = goalElement.value.trim();
        if (goal === '') {
            alert('Please enter a goal.');
            return;
        }
        const liElement = document.createElement('li');
        liElement.textContent = goal;
        listElement.appendChild(liElement);
    });
