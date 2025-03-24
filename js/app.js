const alunos = [
  {
    nome: "Chico Melato",
    notas: {
      backend_1: [7, 8.5, 9, 6.5],
      frontend_2: [2, 2, 2, 2],
      bancodados: [2, 2, 3, 3],
      ferramentas: [3, 3, 3, 3],
    },
  },
  {
    nome: "Talita Lima",
    notas: {
      backend_1: [4, 4, 4, 4],
      frontend_2: [4, 4, 5, 5],
      bancodados: [5, 5, 6, 6],
      ferramentas: [7, 7, 8, 9],
    },
  },
  {
    nome: "Fulano da Silva",
    notas: {
      backend_1: [4, 4, 4, 4],
      frontend_2: [4, 4, 5, 5],
      bancodados: [5, 5, 6, 6],
      ferramentas: [7, 7, 8, 9],
    },
  },
];

const AlunoService = new AlunoService()

alunos.forEach(aluno => {
  AlunoService.add(new AlunoModel(aluno))
})

const AlunoViews = new AlunoView(document.querySelector('[data-table-alunos]'))
const alunoController = new AlunoController(AlunoService, AlunoViews)