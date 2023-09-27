

function calcularIMC() {
    const peso = $('#peso')
    const altura = $('#altura')

    const imc = peso.val() / (altura.val() ** 2)

    if (peso.val() && altura.val()) {
        const mensagemDeErro = $('#mensagemDeErro');
        mensagemDeErro.text("");

        const resultado = $('#resultado')
        resultado.text("Meu IMC é de " + imc.toFixed(2));

        const descricao = $('#descricao')
        if (imc < 17) {
            descricao.text("Muito abaixo do peso")
            descricao.addClass("text-danger")
        } else if (imc >= 17 && imc <= 18.49) {
            descricao.text("Abaixo do peso")
            descricao.addClass("text-warning")
        } else if (imc >= 18.5 && imc <= 24.99) {
            descricao.text("Peso normal")
            descricao.addClass("text-primary")
        } else if (imc >= 25 && imc <= 29.99) {
            descricao.text("Acima do peso")
            descricao.addClass("text-warning")
        } else if (imc >= 30 && imc <= 34.99) {
            descricao.text("Obesidade 1")
            descricao.addClass("text-warning")
        } else if (imc >= 35 && imc <= 39.99) {
            descricao.text("Obesidade 2 (severa)")
            descricao.addClass("text-danger")
        } else {
            descricao.text("Obesidade 3 (mórbida)")
            descricao.addClass("text-danger")
        }
    } else {
        const mensagemDeErro = $('#mensagemDeErro');
        mensagemDeErro.text("Valores Inválidos");

        const resultado = $('#resultado');
        resultado.text("")

        const altura = $('#altura')
        const peso = $('#peso')

        if (!altura.val()) {
            altura.addClass("is-invalid")
        } else {
            altura.removeClass("is-invalid")
        }

        if (!peso.val()) {
            peso.addClass("is-invalid")
        } else {
            peso.removeClass("is-invalid")
        }
        
    }
}

function limpar() {
    const peso = $('#peso')
    const altura = $('#altura')

    peso.val() = ""
    altura.val() = ""

    peso.removeClass("is-valid", "is-invalid")
    altura.removeClass("is-valid", "is-invalid")

    const resultado = $('#resultado');
    resultado.text("")

    const descricao = $('#descricao')
    descricao.text("")
}

const peso = $('#peso')
const altura = $('#altura')


peso.addEventListener('input', function() {
    if (peso.val().length > 0) {
        peso.removeClass("is-invalid")
        peso.addClass("is-valid")
    } else {
        peso.removeClass("is-valid")
    }
})

altura.addEventListener('input', function() {
    if (altura.val().length > 0) {
        altura.removeClass("is-invalid")
        altura.addClass("is-valid")
    } else {
        altura.removeClass("is-valid")
    }
})
