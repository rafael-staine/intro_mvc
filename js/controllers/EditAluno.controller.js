class EditAlunoController {
    constructor(model, view, service) {
        this.alumo = model;
        this.view = view;
        this.service = service;
        this.view.render(model)
    }

    updadte(id, nome, notas) {
        let aluno = {}
        aluno.nome = nome
        aluno._id = id
        aluno.notas = notas
        this.service.update(new AlunoModel(aluno))
    }
}