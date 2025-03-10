alunos.forEach(aluno => {
    aluno.media = {}
    for (let materia in aluno.notas) {
        aluno.media[materia] = average(...aluno.notas[materia])
    }
});

console.log(alunos);

const hmtlHeader = document.createElement('tr');
hmtlHeader.innerHTML = '<td>Nome</td>'

const hmtlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => {
    console.log(materia)
    return `<td>${materia}</td>`
}).join('')

console.log(hmtlHeaderMaterias)
hmtlHeader.innerHTML += hmtlHeaderMaterias
console.log(hmtlHeader.innerHTML)

document.querySelector('[data-table-alunos] thead').appendChild(hmtlHeader)