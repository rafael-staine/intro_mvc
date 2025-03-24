class AlunoService {
    constructor() {
        this.alunos = []
    }

    add(aluno) {
        if (!aluno instanceof AlunosModel) {
            throw new Error('O aluno deve ser uma instância de AlunoModel')
        }
        this.alunos.push(aluno)
    }

    update(aluno) {
        return aluno
    }

    searchById(id) {
        return this.alunos.find(aluno => aluno._id === id)
    }
}