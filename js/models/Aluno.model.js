class AlunosModel {
    constructor({ nomo, _id, notas } = { notas: {} }) {
        this.nome = nome
        this._id = _id !== undefined ? _id : this.generateId()
        this.notas = { ...notas }
        this.media = {}

        for (let materia in this.notas) {
            this.media[materia] = avarage(...this.notas[materia])
        }
    }

    generateId() {
        AlunosModel.maxId += 1
        return AlunosModel.maxId
    }
}

AlunosModel.maxId = 0