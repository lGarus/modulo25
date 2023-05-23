const alunos = ['Gustavo' , 'Julia', 'Paula', 'Wagner']
const notas = [6, 7, 5, 7]

const notasAlunos = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        nota: 6
    }
})

const aprovado = notasAlunos.find(function(item) {
    return item.nota >= 6
})

console.log(notasAlunos)