async function dadosEstadosIBGE(){
    const estados = await (await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')).json();
    const listarEstados = document.getElementById('estados-ul');
    estados.forEach(estado =>{

        const newItem = document.createElement('li')
        const a = document.createElement('a')
        const uf = estado.sigla
        newItem.appendChild(a)
        a.href = `municipios/index.html?uf=${uf}`
        a.innerHTML = estado.nome;
        a.className = 'list-link';
        listarEstados.appendChild(newItem)
    })
}


dadosEstadosIBGE();