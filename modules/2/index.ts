import clc from 'cli-color';
import readline from 'readline-sync';

type Project = {
    name: string;
    description: string;
    assignees: Array<string>;
};

const projects: Array<Project> = [];

function add() {
    console.log(`\n${clc.magenta('Novo Projeto')}\n`);
    console.log(clc.cyan('Preencha as informações sobre o novo projeto.'));
    const name = readline.question(clc.cyanBright('Nome: '));
    const description = readline.question(clc.cyanBright('Descricao: '));
    const assigneesString = readline.question(
        clc.cyanBright('Responsaveis (Separe os nomes por virgula): '),
    );

    const assignees = assigneesString
        .split(',')
        .map(assignee => assignee.trim());

    const newProject: Project = { name, description, assignees };

    projects.push(newProject);
}

function list() {
    if (projects.length === 0) {
        console.log(clc.red('\nNao ha projetos cadastrados.\n'));
        return;
    }

    let listing = true;
    while (listing) {
        const projectOptions: string[] = [];
        for (let i = 0; i < projects.length; i++) {
            projectOptions.push(projects[i].name);
        }

        console.log('Projetos cadastrados\n');

        const selectedProject = readline.keyInSelect(
            projectOptions,
            clc.cyan('Selecione um projeto para visualizar'),
            {
                cancel: 'Voltar',
            },
        );

        if (selectedProject < 0) return;

        let assignees = '';
        for (let i = 0; i < projects[selectedProject].assignees.length; i++) {
            assignees += `${projects[selectedProject].assignees[i]}\n`;
        }

        console.log(clc.magenta('Informacoes\n'));
        console.log(
            `${clc.cyan('Projeto:')} ${projects[selectedProject].name}`,
        );
        console.log('--------------------');
        console.log(projects[selectedProject].description);
        console.log('\n', clc.cyan('Responsaveis'));
        console.log('--------------------');
        console.log(assignees);
        listing = readline.keyInYNStrict('Ver outro projeto?');
    }
}

while (true) {
    console.log(`Bem vindo ao ${clc.yellow('Scopify')}!`);

    const options = ['Listar todos os projetos', 'Criar novo projeto'];

    const option = readline.keyInSelect(options, 'O que deseja fazer?', {
        cancel: 'Sair',
    });

    switch (option) {
        case 0:
            list();
            break;
        case 1:
            add();
            break;
        default:
            if (readline.keyInYNStrict('Deseja realmente sair?'))
                process.exit();
    }

    readline.question('(Aperte Enter para continuar)', {
        hideEchoBack: true,
        mask: '',
    });
}
