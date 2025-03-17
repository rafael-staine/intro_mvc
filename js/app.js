const alunos = [
    {
      _id: 0,
      nome: "chico melato",
      notas: {
        backend_1: [7, 8.5, 9, 6.5],
        frontend_2: [2, 2, 2, 2],
        bancodados: [2, 2, 3, 3],
        ferramentas: [3, 3, 3, 3],
      },
    },
    {
      _id: 1,
      nome: "talita lima",
      notas: {
        backend_1: [4, 4, 4, 4],
        frontend_2: [4, 4, 5, 5],
        bancodados: [5, 5, 6, 6],
        ferramentas: [7, 7, 8, 9],
      },
    },
    {
      _id: 1,
      nome: "Fulano da Silva",
      notas: {
        backend_1: [4, 4, 4, 4],
        frontend_2: [4, 4, 5, 5],
        bancodados: [5, 5, 6, 6],
        ferramentas: [7, 7, 8, 9],
      },
    },
  ];

  const AlunoService = AlunoService()

alunos.forEach(aluno => {
    AlunoService.add(new AlunoModel(aluno))
})

// Inserir no thead da table a lista de matérias
const hmtlHeader = document.createElement('tr')
hmtlHeader.innerHTML = '<td>Nome</td>'

const hmtlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => {
    return `<td>${materia}</td>`
}).join('')

hmtlHeader.innerHTML += hmtlHeaderMaterias
document.querySelector('[data-table-alunos] thead').appendChild(hmtlHeader)

// Inserir no tbody da table a lista de alunos e suas médias
function render() {
    document.querySelector('[data-table-alunos] tbody').innerHTML = ''
    alunos.forEach(aluno => {
        let htmlRow = document.createElement('tr')
        htmlRow.innerHTML = `<td>${aluno.nome}</td>`
        let htmlRowMaterias = Object.keys(aluno.media).map(materia => {
            return `<td>${aluno.media[materia]}</td>`
        }).join('')
        htmlRow.innerHTML += htmlRowMaterias
        document.querySelector('[data-table-alunos] tbody').appendChild(htmlRow)
    })
}
render()

// Inserir aluno
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()
    const nome = document.getElementById('first_name').value
    const newAluno = {
        _id: 0,
        nome,
        notas: {
            backend_1: [6, 6, 6, 6],
            frontend_2: [7, 7, 7, 7],
            bancodados: [6, 6, 6, 6],
            ferramentas: [7, 7, 7, 7],
        },
    }
    newAluno.media = {}
    for (let materia in newAluno.notas) {
        newAluno.media[materia] = average(...newAluno.notas[materia])
    }
    alunos.push(newAluno)    
    render()
})