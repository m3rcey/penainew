document.addEventListener('DOMContentLoaded', function () {
    // Adding click event listeners to edit icons
    const editIcons = document.querySelectorAll('.edit-icon');
    editIcons.forEach((editIcon) => {
        editIcon.addEventListener('click', (event) => {
            const projectItem = event.target.closest('.project-item');
            const inputField = projectItem.querySelector('input');
            inputField.removeAttribute('readonly');
            inputField.focus();
            inputField.style.borderBottom = '2px solid #000';
        });
    });

    // Adding click event listeners to delete icons
    const deleteIcons = document.querySelectorAll('.delete-icon');
    deleteIcons.forEach((deleteIcon) => {
        deleteIcon.addEventListener('click', (event) => {
            const projectItem = event.target.closest('.project-item');
            projectItem.remove();
        });
    });

    // Adding blur event listeners to input fields to save changes
    const projectInputs = document.querySelectorAll('.project-item input');
    projectInputs.forEach((input) => {
        input.addEventListener('blur', () => {
            input.setAttribute('readonly', true);
            input.style.borderBottom = 'none';
        });
    });

    // Handling the New Song button click
    const newSongButton = document.querySelector('.new-song-button');
    newSongButton.addEventListener('click', () => {
        const projectsList = document.querySelector('.projects-list');

        // Create new project item
        const newProjectItem = document.createElement('div');
        newProjectItem.classList.add('project-item');

        // Create input for new project
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.value = 'New Project';
        inputElement.setAttribute('readonly', true);

        // Create actions container
        const actionsContainer = document.createElement('div');
        actionsContainer.classList.add('project-actions');

        // Create edit and delete icons
        const editIcon = document.createElement('img');
        editIcon.src = 'edit-icon.png';
        editIcon.alt = 'Edit';
        editIcon.classList.add('edit-icon');

        const deleteIcon = document.createElement('img');
        deleteIcon.src = 'delete-icon.png';
        deleteIcon.alt = 'Delete';
        deleteIcon.classList.add('delete-icon');

        // Append icons to actions container
        actionsContainer.appendChild(editIcon);
        actionsContainer.appendChild(deleteIcon);

        // Append input and actions to new project item
        newProjectItem.appendChild(inputElement);
        newProjectItem.appendChild(actionsContainer);

        // Append new project item to projects list
        projectsList.appendChild(newProjectItem);

        // Re-add event listeners for the new icons
        editIcon.addEventListener('click', (event) => {
            inputElement.removeAttribute('readonly');
            inputElement.focus();
            inputElement.style.borderBottom = '2px solid #000';
        });

        deleteIcon.addEventListener('click', (event) => {
            newProjectItem.remove();
        });

        inputElement.addEventListener('blur', () => {
            inputElement.setAttribute('readonly', true);
            inputElement.style.borderBottom = 'none';
        });
    });
});
