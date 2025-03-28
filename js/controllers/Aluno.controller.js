class AlunoController {
    constructor(service, view) {
        view.render(service.alunos)
        this.view = view
        this.service = service
    }

    add(aluno) {
        this.service.add(new AlunosModel(aluno))
        this.view.render(this.service.alunos)
    }
}