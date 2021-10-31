import clc from 'cli-color';
import readline from 'readline-sync';

import { Project } from './projects';
import { renderScreen } from './ui';

export function getConfirmProjectCreation(project: Project): boolean {
    return renderScreen(
        '\nVerifique se as informacoes estão corretas.\n',
        () => {
            printProject(project);
            return readline.keyInYNStrict(
                'Voce confirma a criacao deste projeto?',
            );
        },
    );
}

export function getExitConfirmation(): boolean {
    return readline.keyInYNStrict('Deseja realmente sair?');
}

export function getMenuOption(): number {
    return renderScreen(`Bem vindo ao ${clc.yellow('Scopify')}!`, () => {
        const options = [
            'Listar todos os projetos',
            'Criar novo projeto',
            'Editar projeto',
            'Excluir projeto',
        ];

        const selectedOption = readline.keyInSelect(
            options,
            'O que deseja fazer?',
            { cancel: 'Sair' },
        );

        return selectedOption;
    });
}

export function getProject(): Project {
    return renderScreen(`\n${clc.magenta('Novo Projeto')}\n`, () => {
        console.log(clc.cyan('Preencha as informações sobre o novo projeto.'));
        const name = readline.question(clc.cyanBright('Nome: '));
        const description = readline.question(clc.cyanBright('Descricao: '));
        const assigneesString = readline.question(
            clc.cyanBright('Responsaveis (Separe os nomes por virgula): '),
        );

        const assignees = assigneesString
            .split(',')
            .map(assignee => assignee.trim());

        return {
            name,
            description,
            assignees,
        };
    });
}

export function getProjectToView(projects: Project[]): number {
    const projectOptions = projects.map(project => project.name);

    return renderScreen(clc.magenta('Projetos cadastrados\n'), () => {
        return readline.keyInSelect(
            projectOptions,
            clc.cyan('Selecione um projeto para visualizar'),
            {
                cancel: 'Voltar',
            },
        );
    });
}

export function getViewAnotherProject(): boolean {
    return readline.keyInYNStrict('Ver outro projeto?');
}

export function printBreak() {
    readline.question('(Aperte Enter para continuar)', {
        hideEchoBack: true,
        mask: '',
    });
}

export function printNoProjects() {
    renderScreen(clc.red('\nNao ha projetos cadastrados.\n'));
}

export function printProject(project: Project) {
    console.log(`${clc.cyan('Projeto:')} ${project.name}`);
    console.log('--------------------');
    console.log(project.description);
    console.log(clc.cyan('Responsaveis'));
    console.log('\n--------------------');
    console.log(project.assignees.join('\n'), '\n');
}

export function printSelectedProject(project: Project) {
    renderScreen(clc.magenta('Informacoes\n'), () => {
        printProject(project);
    });
}

export function printEditScreen() {
    renderScreen(clc.red('Nao e possivel editar um projeto.\n'));
}

export function printDeleteScreen() {
    renderScreen(clc.red('Nao e possivel remover um projeto.\n'));
}
