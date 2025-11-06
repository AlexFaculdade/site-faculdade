document.addEventListener('DOMContentLoaded', () => {
    // --- DADOS FIXOS (para este carro específico) ---
    const PRECO_CARRO = Database.anuncioClicado ? Database.anuncioClicado.car.valor : 65000; // Usa o preço do carro do anúncio
    const ENTRADA_MINIMA = PRECO_CARRO * 0.10; // 10%
    const TAXA_JUROS_MENSAL = 0.018; // 1.8% ao mês (Exemplo)

    // --- Seleciona os elementos do DOM ---
    const entradaRange = document.getElementById('entrada-range');
    const entradaValor = document.getElementById('entrada-valor');
    const parcelasSelect = document.getElementById('parcelas-select');
    const valorParcelaDisplay = document.getElementById('valor-parcela');
    const simuladorForm = document.getElementById('simulador-form');

    function formatarMoeda(valor) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        }).format(valor);
    }

    // Desformata o valor de volta para número
    function parseMoeda(valor) {
        return Number(valor.replace(/\R\$\s?|(\.)/g, '').replace(',', '.'));
    }

    // Calcula o valor da parcela (Tabela Price)
    function calcularParcela() {
        // Pega os valores dos inputs
        const valorEntrada = parseMoeda(entradaValor.value);
        const numParcelas = parseInt(parcelasSelect.value, 10);
        
        const valorFinanciado = PRECO_CARRO - valorEntrada;

        // Se financiado for 0 ou menos, parcela é 0
        if (valorFinanciado <= 0) {
            valorParcelaDisplay.textContent = formatarMoeda(0);
            return;
        }

        // Fórmula do Financiamento (Tabela Price)
        const i = TAXA_JUROS_MENSAL;
        const n = numParcelas;
        
        const coeficiente = (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
        const parcela = valorFinanciado * coeficiente;

        // Exibe o resultado formatado
        valorParcelaDisplay.textContent = formatarMoeda(parcela);
    }

    // --- CONFIG INICIAL ---
    
    // Configura o range slider
    entradaRange.min = ENTRADA_MINIMA;
    entradaRange.max = PRECO_CARRO;
    entradaRange.value = ENTRADA_MINIMA;

    // Formata o valor de entrada inicial
    entradaValor.value = formatarMoeda(ENTRADA_MINIMA);

    // Calcula a parcela inicial
    calcularParcela();

    // --- EVENT LISTENERS ---

    // Sincroniza o SLIDER com o CAMPO DE TEXTO
    entradaRange.addEventListener('input', (e) => {
        const valor = parseFloat(e.target.value);
        entradaValor.value = formatarMoeda(valor);
        calcularParcela();
    });

    // Sincroniza o CAMPO DE TEXTO com o SLIDER
    entradaValor.addEventListener('change', (e) => {
        let valor = parseMoeda(e.target.value);

        // Validação de limites
        if (valor < ENTRADA_MINIMA) {
            valor = ENTRADA_MINIMA;
        }
        if (valor > PRECO_CARRO) {
            valor = PRECO_CARRO;
        }

        e.target.value = formatarMoeda(valor); // Reformata o campo
        entradaRange.value = valor; // Atualiza o slider
        calcularParcela();
    });

    // Recalcula ao mudar o número de parcelas
    parcelasSelect.addEventListener('change', calcularParcela);

    // Previne o envio padrão do formulário (que recarregaria a página)
    simuladorForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });
});
