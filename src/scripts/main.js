$(document).ready(function() {
    // Dados fictícios para os gráficos
    const vendasMensaisData = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'Vendas Mensais',
            data: [1200, 1900, 3000, 5000, 2000, 3000, 4500, 2200, 3800, 4200, 4800, 5200],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const clientesMensaisData = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'Clientes Mensais',
            data: [200, 300, 400, 600, 500, 700, 800, 650, 900, 750, 850, 950],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    };

    // Criação dos gráficos
    const vendasMensaisChartCtx = $('#vendasMensaisChart').get(0).getContext('2d');
    const vendasMensaisChart = new Chart(vendasMensaisChartCtx, {
        type: 'line',
        data: vendasMensaisData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const clientesMensaisChartCtx = $('#clientesMensaisChart').get(0).getContext('2d');
    const clientesMensaisChart = new Chart(clientesMensaisChartCtx, {
        type: 'bar',
        data: clientesMensaisData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Dados fictícios para as tabelas
    const vendasPorFilial = [
        { filial: 'Filial 1', total: 15000 },
        { filial: 'Filial 2', total: 18000 },
        { filial: 'Filial 3', total: 12000 },
        { filial: 'Filial 4', total: 20000 }
    ];

    const finalizadorasRanking = [
        { nome: 'Finalizadora 1', total: 5000 },
        { nome: 'Finalizadora 2', total: 7000 },
        { nome: 'Finalizadora 3', total: 6000 }
    ];

    function createTable(containerId, data, columns) {
        const container = $(`#${containerId}`);
        const table = $('<table>').addClass('table table-striped');

        const thead = $('<thead>');
        const tr = $('<tr>');
        columns.forEach(col => {
            const th = $('<th>').text(col);
            tr.append(th);
        });
        thead.append(tr);
        table.append(thead);

        const tbody = $('<tbody>');
        data.forEach(row => {
            const tr = $('<tr>');
            Object.values(row).forEach(val => {
                const td = $('<td>').text(val);
                tr.append(td);
            });
            tbody.append(tr);
        });
        table.append(tbody);

        container.append(table);
    }

    createTable('totalVendasPorFilial', vendasPorFilial, ['Filial', 'Total de Vendas']);
    createTable('finalizadorasRanking', finalizadorasRanking, ['Nome', 'Total']);
});
