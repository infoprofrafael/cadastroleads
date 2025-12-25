const API_URL = 'http://localhost:3000/leads';

//Por usar um banco de dados temos que usar funções assincronas

async function carregarLeads() {
    const response = await fetch(API_URL);

    const leads = await response.json();

    const tabela = document.getElementById('tabela-leads');

    tabela.innerHTML = '';
    leads.forEach(func => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${func.id}</td>
        <td>${func.namelead}</td>
        <td>${func.profission}</td>
        <td>${func.email}</td>
        <td>${func.numberwhatsapp}</td>
        
        `;
    });



}
