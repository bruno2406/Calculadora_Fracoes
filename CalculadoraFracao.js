function calFracoes(fracao) {

    let allFracoes = fracao.split(' ')
    let resultado 
    let operadores = []
    let fracoes = []
    
    // Identificando os operadores e as frações
   for (let i = 0; i <= allFracoes.length; i += 2) {
        fracoes.push(allFracoes[i])
        allFracoes[i + 1] !== undefined ? operadores.push(allFracoes[i + 1]) : ''
    }
    
    resultado = fracoes.reduce(function(acumulador, atual, i){
        if(operadores[i - 1] == '+'){
            return SomaF(acumulador, atual)
        } else if(operadores[i - 1] == '-'){
            return SubtracaoF(acumulador, atual)
        } else if(operadores[i - 1] == '/'){
            return DivisaoF(acumulador, atual)
        } else if(operadores[i - 1] == '*'){
            return MultiplicacaoF(acumulador, atual)
        }
    })

    return resultado

}

function SomaF(...fracoes) {

    let allFracoes = []
    let numerador = 0
    let denominador = 1

    let numeradores = []

    //Inserindo todas as frações em allFracoes, já numericos
    fracoes.forEach(element  => {
        fracao = element.split('/')
        allFracoes.push(fracao.map(function (x) { 
            return parseInt(x, 10); 
        }))
    });

    // Calculando o denominador e colocando todos os numeradores em um array
    allFracoes.forEach(element => {
        denominador *= element[1]
        numeradores.push(element[0])
    })

    let dnmndrs_Dvs = []
    let nmrdrs_Mltplcc = []

    // Dividindo o denominador pelos denominadores 
    allFracoes.forEach(element => {
        dnmndrs_Dvs.push(denominador / element[1])
    })
    // Multiplicando os denominadores pelos numeradores
    for (let i = 0; i < dnmndrs_Dvs.length; i++ ) {
        nmrdrs_Mltplcc.push(dnmndrs_Dvs[i] * numeradores[i])
    }
    // Somando os numeradores 
    numerador = nmrdrs_Mltplcc.reduce(function(acumulador, atual){
        return acumulador + atual
    })
   
    return `${numerador}/${denominador}`
    
}

function SubtracaoF(...fracoes) {

    let allFracoes = []
    let numerador = 0
    let denominador = 1

    let numeradores = []

    //Inserindo todas as frações em allFracoes, já numéricos
    fracoes.forEach(element  => {
        fracao = element.split('/')
        allFracoes.push(fracao.map(function (x) { 
            return parseInt(x, 10); 
        }))
    });

    // Calculando o denominador e colocando todos os numeradores em um array
    allFracoes.forEach(element => {
        denominador *= element[1]
        numeradores.push(element[0])
    })

    let dnmndrs_Dvs = []
    let nmrdrs_Mltplcc = []

    // Dividindo o denominador pelos denominadores 
    allFracoes.forEach(element => {
        dnmndrs_Dvs.push(denominador / element[1])
    })
    // Multiplicando os denominadores pelos numeradores
    for (let i = 0; i < dnmndrs_Dvs.length; i++ ) {
        nmrdrs_Mltplcc.push(dnmndrs_Dvs[i] * numeradores[i])
    }

    // Subtraindo os numeradores 
    numerador = nmrdrs_Mltplcc.reduce(function(acumulador, atual){
        return acumulador - atual
    })
   
    return `${numerador}/${denominador}`

}

function MultiplicacaoF(...fracoes) {

    allFracoes = []
    let numeradores = []
    let denominadores = []

    //Inserindo todas as frações em allFracoes, já numericos
    fracoes.forEach(element  => {
        fracao = element.split('/')
        allFracoes.push(fracao.map(function (x) { 
            return parseInt(x, 10); 
        }))
    });

    // Colocando todos os numeradores e denominadores em seus respectivos arrays
    allFracoes.forEach(element => {
        denominadores.push(element[1])
        numeradores.push(element[0])
    })

    let denominador = denominadores.reduce(function(acumulador, atual){
        return acumulador * atual
    })

    let numerador = numeradores.reduce(function(acumulador, atual){
        return acumulador * atual
    })

    let result = `${numerador}/${denominador}`
    return result

}

function DivisaoF(...fracoes) {

    allFracoes = []
    let numeradores = []
    let denominadores = []

    //Inserindo todas as frações em allFracoes, já numericos
    fracoes.forEach(element  => {
        fracao = element.split('/')
        allFracoes.push(fracao.map(function (x) { 
            return parseInt(x, 10); 
        }))
    });

    let divisao = allFracoes.reduce(function(acumulador, atual){ 

        atual.reverse()
        denominadores.push(acumulador[1], atual[1])
        numeradores.push(acumulador[0], atual[0])
    
        let denominador = denominadores.reduce(function(acumulador, atual){
            return acumulador * atual
        })
    
        let numerador = numeradores.reduce(function(acumulador, atual){
            return acumulador * atual
        })

        let result = [numerador, denominador]
        return result

    })

    return `${divisao[0]}/${divisao[1]}`
}

function cal(operacao) {
    let allNum = operacao.split(' ')
    let resultado 
    let operadores = []
    let numeros = []

    
    // Identificando os operadores e as frações
   for (let i = 0; i <= allNum.length; i += 2) {
        numeros.push(allNum[i])
        allNum[i + 1] !== undefined ? operadores.push(allNum[i + 1]) : ''
    }
    
    resultado = numeros.reduce(function(acumulador, atual, i){
        if(operadores[i - 1] == '+'){
            return Soma(acumulador, atual)
        } else if(operadores[i - 1] == '-'){
            return Subtracao(acumulador, atual)
        } else if(operadores[i - 1] == '/'){
            return Divisao(acumulador, atual)
        } else if(operadores[i - 1] == '*'){
            return Multiplicacao(acumulador, atual)
        }
    })

    return resultado

}

function Soma(...operacoes) {
    
    let allNum = []

    //Inserindo todas os numeros em allNum, já numericos
    operacoes.forEach(element => {allNum.push(parseInt(element, 10))});

    // Somando os números 
    result = allNum.reduce((acumulador, atual) => acumulador + atual)
   
    return result
}

function Subtracao(...operacoes) {

    let allNum = []

    //Inserindo todas os numeros em allNum, já numericos
    operacoes.forEach(element  => {
        allNum.push(parseInt(element, 10))
    });

    // Somando os números 
    result = allNum.reduce(function(acumulador, atual){
        return acumulador - atual
    })
   
    return result
    
}

function Divisao(...operacoes) {

    let allNum = []

    //Inserindo todas os numeros em allNum, já numericos
    operacoes.forEach(element  => {
        allNum.push(parseInt(element, 10))
    });

    // Somando os números 
    result = allNum.reduce(function(acumulador, atual){
        return acumulador / atual
    })
   
    return result
    
}

function Multiplicacao(...operacoes) {

    let allNum = []

    //Inserindo todas os numeros em allNum, já numericos
    operacoes.forEach(element  => {
        allNum.push(parseInt(element, 10))
    });

    // Somando os números 
    result = allNum.reduce(function(acumulador, atual){
        return acumulador * atual
    })
   
    return result
    
}

// "18/15 + 95/62 - 65/12"
//console.log(calFracoes("18/15 + 95/62 - 65/12")) // OK
console.log(cal('1 + 2 - 3 * 4 / 5'))

