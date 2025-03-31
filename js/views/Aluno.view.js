class AlunoView {
    constructor(table, materias) {
        this.tableList = table
        this.tableHeader = this.tableList.querySelector('thead')
        this.tableBody = this.tableList.querySelector('tbody')
        this.materias = materias

        this.renderHeader()
    }

    renderHeader() {
        const htmlHeader = document.createElement('tr')
        htmlHeader.innerHTML = '<td>Nome</td>'
        const hmtlHeaderMaterias = this.materias.map(materia => {
            return `<td>${materia.nome}</td>`
        }).join('')
        htmlHeader.innerHTML += hmtlHeaderMaterias
        this.tableHeader.appendChild(htmlHeader)
    }

    render(alunos) {
        this.tableBody.innerHTML = ''
        alunos.forEach(aluno => {
            let htmlRow = document.createElement('tr')
            htmlRow.innerHTML = `<td>${aluno.nome}</td>`
            let encontrado = false
            this.materias.forEach(materia => {
                if (materia._id in aluno.notas) {
                    encontrado = true
                }
            })

            if (encontrado) {
                this.materias.forEach(materia => {
                    htmlRow.innerHTML += `<td>
                    ${aluno.media[materia._id] !== undefined ? aluno.media[materia] :
                            `<a href="edit.html?id=${aluno._id}Incluir Nota</a>`}
                    </td>`
                })
            } else {
                htmlRow.innerHTML += `<td colspan="${this.materias.length}">
                    <a href="edit.html?id=${aluno._id}">
                         Incluir Notas
                    </a>
                </td>`
            }

            this.tableBody.appendChild(htmlRow)
        })
    }
}