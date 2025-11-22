
const DADOS_LOCALIZACAO = {
    'AC': ['Rio Branco', 'Cruzeiro do Sul'],
    'AL': ['Maceió', 'Arapiraca', 'Rio Largo'],
    'AM': ['Manaus', 'Parintins', 'Itacoatiara'],
    'AP': ['Macapá', 'Santana'],
    'BA': ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Camaçari', 'Juazeiro', 'Lauro de Freitas', 'Itabuna', 'Ilhéus', 'Porto Seguro', 'Barreiras'],
    'CE': ['Fortaleza', 'Caucaia', 'Juazeiro do Norte', 'Maracanaú', 'Sobral', 'Crato'],
    'DF': ['Brasília', 'Ceilândia', 'Taguatinga', 'Gama', 'Samambaia', 'Santa Maria'],
    'ES': ['Vitória', 'Vila Velha', 'Serra', 'Cariacica', 'Cachoeiro de Itapemirim'],
    'GO': ['Goiânia', 'Aparecida de Goiânia', 'Anápolis', 'Rio Verde', 'Luziânia'],
    'MA': ['São Luís', 'Imperatriz', 'São José de Ribamar', 'Timon'],
    'MG': ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora', 'Betim', 'Montes Claros', 'Ribeirão das Neves', 'Uberaba', 'Governador Valadares', 'Sete Lagoas'],
    'MS': ['Campo Grande', 'Dourados', 'Três Lagoas', 'Corumbá'],
    'MT': ['Cuiabá', 'Várzea Grande', 'Rondonópolis', 'Sinop'],
    'PA': ['Belém', 'Ananindeua', 'Santarém', 'Marabá'],
    'PB': ['João Pessoa', 'Campina Grande', 'Santa Rita', 'Patos'],
    'PE': ['Recife', 'Jaboatão dos Guararapes', 'Olinda', 'Caruaru', 'Paulista', 'Petrolina', 'Cabo de Santo Agostinho', 'Vitória de Santo Antão', 'Garanhuns', 'São Lourenço da Mata'],
    'PI': ['Teresina', 'Parnaíba', 'Picos', 'Piripiri'],
    'PR': ['Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa', 'Cascavel', 'São José dos Pinhais', 'Foz do Iguaçu', 'Colombo', 'Guarapuava', 'Araucária'],
    'RJ': ['Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu', 'Belford Roxo', 'Niterói', 'São João de Meriti', 'Campos dos Goytacazes', 'Petrópolis', 'Volta Redonda'],
    'RN': ['Natal', 'Mossoró', 'Parnamirim', 'São Gonçalo do Amarante'],
    'RO': ['Porto Velho', 'Ji-Paraná', 'Ariquemes'],
    'RR': ['Boa Vista', 'Rorainópolis'],
    'RS': ['Porto Alegre', 'Caxias do Sul', 'Canoas', 'Pelotas', 'Santa Maria', 'Gravataí', 'Viamão', 'Novo Hamburgo', 'São Leopoldo', 'Rio Grande'],
    'SC': ['Joinville', 'Florianópolis', 'Blumenau', 'São José', 'Chapecó', 'Itajaí', 'Criciúma', 'Palhoça', 'Jaraguá do Sul', 'Lages'],
    'SE': ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto'],
    'SP': ['São Paulo', 'Guarulhos', 'Campinas', 'São Bernardo do Campo', 'Santo André', 'Osasco', 'Sorocaba', 'Ribeirão Preto', 'São José dos Campos', 'São José do Rio Preto'],
    'TO': ['Palmas', 'Araguaína', 'Gurupi']
};

const ESTADOS_BRASIL = [
    { sigla: 'AC', nome: 'Acre' }, { sigla: 'AL', nome: 'Alagoas' }, { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' }, { sigla: 'BA', nome: 'Bahia' }, { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' }, { sigla: 'ES', nome: 'Espírito Santo' }, { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' }, { sigla: 'MT', nome: 'Mato Grosso' }, { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' }, { sigla: 'PA', nome: 'Pará' }, { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' }, { sigla: 'PE', nome: 'Pernambuco' }, { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' }, { sigla: 'RN', nome: 'Rio Grande do Norte' }, { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' }, { sigla: 'RS', nome: 'Rio Grande do Sul' }, { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SE', nome: 'Sergipe' }, { sigla: 'SP', nome: 'São Paulo' }, { sigla: 'TO', nome: 'Tocantins' }
];

document.addEventListener('DOMContentLoaded', () => {
    const selectEstado = document.getElementById('estado');
    const selectCidade = document.getElementById('cidade');

    if (!selectEstado || !selectCidade) {
        return;
    }
    const popularEstados = () => {
        ESTADOS_BRASIL.forEach(estado => {
            const option = document.createElement('option');
            option.value = estado.sigla;
            option.textContent = estado.nome;
            selectEstado.appendChild(option);
        });
    };
    
    const handleEstadoChange = () => {
        const estadoSelecionado = selectEstado.value;


        selectCidade.innerHTML = '<option value="">Selecione a Cidade</option>';
        selectCidade.disabled = true;
        selectCidade.value = "";
        if (estadoSelecionado && DADOS_LOCALIZACAO[estadoSelecionado]) {
            const cidades = DADOS_LOCALIZACAO[estadoSelecionado].sort();
            
            cidades.forEach(cidade => {
                const option = document.createElement('option');
                option.value = cidade;
                option.textContent = cidade;
                selectCidade.appendChild(option);
            });
            

            selectCidade.disabled = false; 
        }
    };
    
    popularEstados();

    selectEstado.addEventListener('change', handleEstadoChange);
})