class AlunoService {
    constructor() {
        this.alunos = []
    }

    add(aluno) {
        if (!aluno instanceof AlunoModel) {
            throw new Error('O aluno deve ser uma instância de AlunoModel')
        }
        this.alunos.push(aluno)
    }
    
    update(aluno) {
        return aluno
    }
}