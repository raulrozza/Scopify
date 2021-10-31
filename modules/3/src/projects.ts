import {
    getConfirmProjectCreation,
    getProject,
    getProjectToView,
    getViewAnotherProject,
    printDeleteScreen,
    printEditScreen,
    printNoProjects,
    printSelectedProject,
} from './view';

export type Project = {
    name: string;
    description: string;
    assignees: Array<string>;
};

const projects: Array<Project> = [];

export function add() {
    let confirm = false;

    while (!confirm) {
        const newProject = getProject();

        confirm = getConfirmProjectCreation(newProject);

        if (confirm) projects.push(newProject);
    }
}

export function list() {
    const amountOfProjects = projects.length;

    if (amountOfProjects === 0) return printNoProjects();

    let listing = true;

    while (listing) {
        const selectedProjectOption = getProjectToView(projects);

        if (selectedProjectOption < 0) return;

        const selectedProject = projects[selectedProjectOption];
        printSelectedProject(selectedProject);

        listing = getViewAnotherProject();
    }
}

export function edit() {
    printEditScreen();
}

export function remove() {
    printDeleteScreen();
}
