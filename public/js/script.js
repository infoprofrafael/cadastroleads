//Máscara do telefone, para só aceitar números
document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('floating_phone');

    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número


        // Limita a 11 dígitos (padrão celular brasileiro)
        if (value.length > 11) value = value.slice(0, 11);

        // Aplica a máscara dinamicamente
        if (value.length > 10) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
        } else if (value.length > 5) {
            value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{0,5}).*/, '($1) $2');
        } else if (value.length > 0) {
            value = value.replace(/^(\d*)/, '($1');
        }

        e.target.value = value;
    });
});


