class AlunoViews {
    constructor(table) {
        this.tableList = table
        this.tableHeader = this.tableList.querySelector('thead')
        this.tableBody = this.tableList.querySelector('tbody')
        this.matertias = ["backend_1", "frontend_2", "bancodados", "ferramentas"]

        this.tableHeader()
    }

    renderHeader() {
        const header = document.createElement('tr')
        hmtlHeader.innerHTML = '<td>Nome</td>'
        const hmtlHeaderMaterias = this.matertias.map(materia => {
            return `<td>${materia}</td>`
        }).join('')
        hmtlHeader.innerHTML += hmtlHeaderMaterias
        this.tableHeader.appendChild(hmtlHeader)
    }

    render(alunos) {
        alunos.forEach(aluno => {
            let htmlRow = document.createElement('tr')
            htmlRow.innerHTML = `<td>${aluno.nome}</td>`
            this.matertias.forEach(materia => {
                htmlRow.innerHTML += `<td>${aluno.media[materia]}</td>`
            })
            this.tableBody.appendChild(htmlRow)
        })
    }
}