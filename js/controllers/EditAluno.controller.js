class EditAlunoController {
    constructor(model, view, service) {
        this.aluno = model;
        this.view = view;
        this.service = service;
        this.view.render(aluno);
    }

    update(id, nome, notas) {
        let aluno = {};
        aluno.nome = nome;
        aluno._id = id;
        aluno.notas = notas;
        this.service.update(new AlunoModel(aluno));
    }
}