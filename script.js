const jogos = {
    1:{
        "A":[13, 22, 30, 42, 46, 53],
        "B":[6, 12, 30, 35, 52, 60],
        "C":[22, 35, 37, 40, 41, 52],
        "D":[10, 34, 36, 39, 48, 59],
        "E":[7, 32, 38, 42, 57, 58],
        "F":[11, 23, 24, 38, 53, 54],
        "G":[4, 9, 28, 29, 37, 52],
        "H":[1, 15, 30, 41, 53, 59],
        "I":[13, 29, 32, 36, 41, 49],
        "J":[33, 34, 37, 40, 41, 51],
    },
    2:{
        "A":[4, 15, 22, 28, 30, 49],
        "B":[23, 25, 28, 38, 39, 53],
        "C":[9, 21, 23,28,37, 56],
        "D":[14, 18, 23, 27, 33, 43],
        "E":[2, 7, 17, 28, 30, 54],
        "F":[3, 25, 32, 49, 56, 60],
        "G":[6, 15, 21, 22, 33, 34],
        "H":[3, 4, 26, 27, 42, 44],
        "I":[11, 15, 36, 41, 46, 60],
        "J":[1, 8, 11, 32, 40, 59],
    },
    3:{
        "A":[1, 12, 13, 46, 50, 56],
        "B":[1, 10, 18, 19, 21, 27],
        "C":[7, 9, 17, 30, 32, 33],
        "D":[13, 23, 30, 33, 34, 57],
        "E":[6, 15, 35, 42, 54, 58],
        "F":[27, 29, 31, 33, 39, 45],
        "G":[9, 23, 29, 44, 45, 58],
        "H":[7, 21, 39, 53, 54, 57],
        "I":[2, 3, 5, 31, 48, 60],
        "J":[7, 18, 19, 45, 46, 48],
    },
    4:{
        "A":[1, 3, 14, 37, 44, 56],
        "B":[3, 8, 40, 45, 56, 60],
        "C":[12, 19, 34, 56, 57, 59],
        "D":[1, 4, 8, 40, 48,59],
        "E":[24, 33, 35, 40, 54, 59],
        "F":[2, 5, 13, 28, 43, 55],
        "G":[2, 3, 33, 35, 39, 60],
        "H":[4, 18, 29, 30, 37, 47],
        "I":[5, 26, 34, 37, 38, 59],
        "J":[8, 14, 28, 38, 48, 49],
    },
    5:{
        "A":[1, 2, 9, 28, 46, 48],
        "B":[12, 17, 34, 44, 52, 55],
        "C":[8, 11, 12, 17, 28, 45],
        "D":[6, 30, 31, 42, 46, 60],
        "E":[1, 18, 36, 39, 42, 50],
        "F":[8, 13, 38, 43, 44, 51],
        "G":[12, 17, 20, 29, 55, 58],
        "H":[3, 8, 24, 35, 40, 54],
        "I":[3, 21, 23, 35, 39, 60],
        "J":[17, 18, 33, 37, 38, 40],
    },
    6:{
        "A":[7, 32, 33, 45, 57, 60],
        "B":[25, 28, 36, 39, 46, 56],
        "C":[21, 22, 28, 38, 40, 59],
        "D":[2, 4, 10, 35, 51, 54],
        "E":[16, 37, 39, 42, 44, 45],
        "F":[15, 16, 22, 28, 42, 58],
        "G":[1, 14, 17, 41, 51, 53],
        "H":[7, 10, 15, 38, 43, 56],
        "I":[8, 10, 39, 51, 55, 57],
        "J":[6, 11, 25, 57, 58, 59],
    },
    7:{
        "A":[1, 7, 11, 26, 42, 52],
        "B":[6, 9, 16, 19, 22, 31],
        "C":[3, 24, 28, 39, 44, 46],
        "D":[3, 23, 25, 28, 40, 60],
        "E":[5, 21, 25, 26, 31, 40],
        "F":[6, 8, 17, 40, 45, 47],
        "G":[17, 19, 24, 26, 56, 59],
        "H":[2, 9, 29, 32, 45, 50],
        "I":[12, 15, 21, 38, 45, 53],
        "J":[5, 22, 37, 43, 48, 50],
    },
    8:{
        "A":[5, 7, 22, 40, 41, 49],
        "B":[3, 6, 23, 25, 31, 57],
        "C":[9, 13, 19, 20, 32, 52],
        "D":[17, 26, 38, 47, 52, 60],
        "E":[18, 23, 31, 36, 45, 46],
        "F":[10, 28, 33, 46, 50, 52],
        "G":[13, 20, 22, 25, 34, 49],
        "H":[1, 2, 15, 17, 49, 55],
        "I":[2, 7, 11, 18, 33, 39],
        "J":[28, 35, 40, 52, 54, 59],
    }
}

const lista = [];
const jogoSorteado = [];

function criaLista() {
    for (const [cartela, letras] of Object.entries(jogos)) {
        for (const [letra, numeros] of Object.entries(letras)) {
            lista.push([...numeros, cartela, letra, 0]);
        }
    }
    console.log(lista)
}

function adicionarNumeros() {
    const inputs = document.querySelectorAll('.numero');
    const novosNumeros = [];

    jogoSorteado.length = 0;

    inputs.forEach(input => {
        const numero = parseInt(input.value);
        if (!isNaN(numero) && numero >= 1 && numero <= 60 && !novosNumeros.includes(numero)) {
            novosNumeros.push(numero);
        }
    });

    jogoSorteado.push(...novosNumeros);
    atualizaAcertos();
    exibeJogos();
}

document.querySelectorAll('.numero').forEach((input, index, inputs) => {
    input.addEventListener('input', () => {
        if (input.value.length === 2) {
            adicionarNumeros();
        }
    });
});

function atualizaAcertos() {
    
    lista.forEach(jogo => {
        const numeros = jogo.slice(0, 7);
        const acertos = numeros.filter(numero => jogoSorteado.includes(numero)).length;
        jogo[9] = acertos;
    });

    lista.sort((a, b) => b[9] - a[9]);
}

function exibeJogos() {
    const tabela = document.getElementById('tabelaJogos');
    tabela.innerHTML = '';

    lista.forEach(jogo => {
        if (jogo[9] > 0) {
            const tr = document.createElement('tr');

            const cartela = jogo.slice(0, 7)
            .map(numero => {
                const acertado = jogoSorteado.includes(numero) ? 'acertado' : '';
                return `<div class="numero-cartela ${acertado}">${numero}</div>`;
            })
            .join('');

            tr.innerHTML = `
                <td>
                    <div class="cartela">
                        ${cartela}
                    </div>
                </td>
                <td>${jogo[7]}</td>
                <td>${jogo[8]}</td>
            `;
            tabela.appendChild(tr);
        }
    });
}

function limitInput(input, maxLength) {
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}

criaLista();