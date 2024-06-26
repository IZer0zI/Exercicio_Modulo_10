$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true,
            },
            email: {
                required: true,
                email: true, 
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            enderecoCompleto: { 
                required: true,
            },
            cep: {
                required: true,
            },
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});
