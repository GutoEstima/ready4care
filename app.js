  // Dados de exemplo para os carrinhos
        const cartData = {
            'Carrinho 001': {
                sector: 'UTI',
                status: 'expiring',
                signalStrength: 85, // Simulado
                onlineStatus: true, // Simulado
                reportPeriodicity: 'daily', // Simulado
                items: [
                    { name: 'Soro Fisiológico 0.9%', standardQuantity: 10, currentQuantity: 10, validity: '2025-09-15' }, // A vencer
                    { name: 'Adrenalina', standardQuantity: 5, currentQuantity: 5, validity: '2026-10-15' },
                    { name: 'Luvas Estéreis', standardQuantity: 20, currentQuantity: 20, validity: '2026-09-01' }
                ],
                reports: [
                    { date: '2025-07-10 14:00', hash: 'a1b2c3d4e5f6', content: 'Relatório de 10/07/2025 para Carrinho 001. Status: OK.' },
                    { date: '2025-07-15 09:00', hash: 'f6e5d4c3b2a1', content: 'Relatório de 15/07/2025 para Carrinho 001. Status: Atropina vencida.' }
                ]
            },
            'Carrinho 004': {
                sector: 'Pediatria',
                status: 'missing',
                signalStrength: 70,
                onlineStatus: true,
                reportPeriodicity: 'weekly',
                items: [
                    { name: 'Dipirona', standardQuantity: 10, currentQuantity: 9, validity: '2026-08-15' }, // Faltando
                    { name: 'Paracetamol', standardQuantity: 10, currentQuantity: 10, validity: '2026-01-01' },
                    { name: 'Seringas 3ml', standardQuantity: 30, currentQuantity: 30, validity: '2027-03-20' }
                ],
                reports: []
            },
            'Carrinho 005': {
                sector: 'Pronto Socorro',
                status: 'missing',
                signalStrength: 95,
                onlineStatus: true,
                reportPeriodicity: 'daily',
                items: [
                    { name: 'Luvas Estéreis', standardQuantity: 20, currentQuantity: 19, validity: '2026-09-01' }, // Faltando
                    { name: 'Fentanil', standardQuantity: 5, currentQuantity: 5, validity: '2026-08-20' }
                ],
                reports: []
            },
            'Carrinho 006': {
                sector: 'Centro Cirúrgico',
                status: 'conformity',
                signalStrength: 60,
                onlineStatus: true,
                reportPeriodicity: 'weekly',
                items: [
                    { name: 'Bisturi', standardQuantity: 5, currentQuantity: 5, validity: '2027-01-01' },
                    { name: 'Gaze Estéril', standardQuantity: 50, currentQuantity: 50, validity: '2026-06-30' }
                ],
                reports: []
            },
            'Carrinho 007': {
                sector: 'Observação',
                status: 'conformity',
                signalStrength: 0, // Simula offline
                onlineStatus: false, // Simula offline
                reportPeriodicity: 'monthly',
                items: [
                    { name: 'Termômetro', standardQuantity: 3, currentQuantity: 3, validity: '2028-01-01' },
                    { name: 'Bandagem Elástica', standardQuantity: 10, currentQuantity: 10, validity: '2026-04-01' }
                ],
                reports: []
            },
            'Carrinho 008': {
                sector: 'Internação A',
                status: 'expired',
                signalStrength: 75,
                onlineStatus: true,
                reportPeriodicity: 'daily',
                items: [
                    { name: 'Morfina', standardQuantity: 5, currentQuantity: 5, validity: '2024-01-01' }, // Vencido
                    { name: 'Seringas 5ml', standardQuantity: 20, currentQuantity: 20, validity: '2027-02-01' }
                ],
                reports: []
            },
            'Carrinho 009': {
                sector: 'Internação B',
                status: 'expiring',
                signalStrength: 80,
                onlineStatus: true,
                reportPeriodicity: 'weekly',
                items: [
                    { name: 'Cefalosporina', standardQuantity: 7, currentQuantity: 7, validity: '2025-09-01' }, // A vencer
                    { name: 'Cateter Venoso', standardQuantity: 15, currentQuantity: 15, validity: '2026-03-01' }
                ],
                reports: []
            },
            'Carrinho 010': {
                sector: 'UTI Neonatal',
                status: 'expiring',
                signalStrength: 90,
                onlineStatus: true,
                reportPeriodicity: 'daily',
                items: [
                    { name: 'Vitamina K', standardQuantity: 3, currentQuantity: 3, validity: '2025-08-25' }, // A vencer
                    { name: 'Fraldas RN', standardQuantity: 100, currentQuantity: 100, validity: '2026-12-31' }
                ],
                reports: []
            },
            'Carrinho 011': { // Novo carrinho em conformidade
                sector: 'Maternidade',
                status: 'conformity',
                signalStrength: 88,
                onlineStatus: true,
                reportPeriodicity: 'monthly',
                items: [
                    { name: 'Oxitocina', standardQuantity: 5, currentQuantity: 5, validity: '2026-07-01' },
                    { name: 'Luvas de Procedimento', standardQuantity: 50, currentQuantity: 50, validity: '2026-11-01' }
                ],
                reports: []
            },
            'Carrinho 012': { // Novo carrinho em conformidade
                sector: 'Laboratório',
                status: 'conformity',
                signalStrength: 72,
                onlineStatus: true,
                reportPeriodicity: 'weekly',
                items: [
                    { name: 'Tubos de Coleta', standardQuantity: 100, currentQuantity: 100, validity: '2027-01-01' },
                    { name: 'Álcool 70%', standardQuantity: 10, currentQuantity: 10, validity: '2026-05-01' }
                ],
                reports: []
            }
        };

        // Dados para os alertas críticos (centralizados)
        const criticalAlertsData = [
            { type: 'missing', cartId: 'Carrinho 004', item: 'Dipirona', message: 'Dipirona Faltando' },
            { type: 'expired', cartId: 'Carrinho 008', item: 'Morfina', message: 'Morfina Vencida' },
            { type: 'expiring', cartId: 'Carrinho 001', item: 'Soro Fisiológico', message: 'Soro Fisiológico a Vencer (15/09)' }
        ];

        // Dados para os formulários predefinidos
        const predefinedForms = {
            'Carrinho adulto': [
                { name: 'Soro Fisiológico 0.9%', quantity: 10 },
                { name: 'Adrenalina', quantity: 5 },
                { name: 'Atropina', quantity: 3 },
                { name: 'Luvas Estéreis', quantity: 20 }
            ],
            'Carrinho pediátrico': [
                { name: 'Dipirona Gotas', quantity: 5 },
                { name: 'Paracetamol Gotas', quantity: 5 },
                { name: 'Seringas 1ml', quantity: 15 }
            ],
            'Carrinho misto': [
                { name: 'Soro Fisiológico 0.9%', quantity: 8 },
                { name: 'Adrenalina', quantity: 3 },
                { name: 'Dipirona Gotas', quantity: 3 },
                { name: 'Luvas Estéreis', quantity: 15 }
            ]
        };

        let currentCartId = ''; // Variável para armazenar o ID do carrinho atualmente visualizado
        let currentPredefinedFormName = null; // Variável para armazenar o nome do formulário predefinido atualmente selecionado
        let selectedCartItemForEdit = null; // Variável para armazenar o item do carrinho selecionado para edição

        // Função para exibir o modal de mensagem
        function showModal(title, message, type = 'alert', onConfirm = null) {
            const modal = document.getElementById('message-modal');
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-body').innerText = message;
            const okBtn = document.getElementById('modal-ok-btn');
            const confirmBtn = document.getElementById('modal-confirm-btn');
            const cancelBtn = document.getElementById('modal-cancel-btn');

            okBtn.classList.add('hidden');
            confirmBtn.classList.add('hidden');
            cancelBtn.classList.add('hidden');

            if (type === 'confirm') {
                confirmBtn.classList.remove('hidden');
                cancelBtn.classList.remove('hidden');
                confirmBtn.onclick = () => {
                    if (onConfirm) onConfirm(true);
                    closeModal();
                };
                cancelBtn.onclick = () => {
                    if (onConfirm) onConfirm(false);
                    closeModal();
                };
            } else {
                okBtn.classList.remove('hidden');
                okBtn.onclick = closeModal;
            }
            modal.style.display = 'flex'; // Exibe o modal
        }

        // Função para fechar o modal
        function closeModal() {
            document.getElementById('message-modal').style.display = 'none';
        }

        // Simulação de login
        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita o recarregamento da página
            document.getElementById('login-screen').classList.add('hidden');
            document.getElementById('main-app').classList.remove('hidden');
            showModal('Bem-vindo, José!', 'Login realizado com sucesso. Você está no Dashboard do SmartCart.', 'alert');
            renderAlerts('dashboard-alerts-content', criticalAlertsData); // Renderiza alertas no dashboard
        });

        // Função para mostrar uma página e esconder as outras
        function showPage(pageId) {
            document.querySelectorAll('.page-content').forEach(page => {
                page.classList.add('hidden');
            });
            document.getElementById(pageId).classList.remove('hidden');
        }

        // Funções para abrir e fechar a barra lateral
        function openNav() {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main-content-area").style.marginLeft = "250px";
        }

        function closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main-content-area").style.marginLeft= "0";
        }

        // Navegação da barra de tarefas
        document.getElementById('profile-settings-btn-icon').addEventListener('click', () => showPage('profile-settings-page'));
        document.getElementById('alerts-btn-icon').addEventListener('click', () => {
            renderAlerts('alerts-page-content', criticalAlertsData); // Popula a página de alertas
            showPage('alerts-page');
        });
        document.getElementById('sidebar-dashboard-btn').addEventListener('click', () => showDashboard());
        document.getElementById('sidebar-standard-form-btn').addEventListener('click', () => showStandardFormPage());
        document.getElementById('sidebar-cart-status-btn').addEventListener('click', () => {
            renderGeneralCartStatus(); // Renderiza a lista de status geral dos carrinhos
            showPage('cart-status-page');
        });
        document.getElementById('sidebar-cart-settings-btn').addEventListener('click', () => showCartSettingsPage());
        document.getElementById('sidebar-logout-btn').addEventListener('click', () => showLogoutConfirmation());

        // Função para mostrar a confirmação de logout
        function showLogoutConfirmation() {
            showModal('Sair da Aplicação', 'Você tem certeza que deseja sair?', 'confirm', (confirmed) => {
                if (confirmed) {
                    document.getElementById('main-app').classList.add('hidden');
                    document.getElementById('login-screen').classList.remove('hidden');
                }
            });
        }

        // Função para exibir detalhes do carrinho com base no tipo (dashboard)
        function showCartDetails(type) {
            const titleElement = document.getElementById('cart-details-title');
            const contentElement = document.getElementById('cart-details-content');
            let detailsHtml = '';

            switch (type) {
                case 'conformity':
                    titleElement.innerText = 'Carrinhos em Conformidade';
                    detailsHtml = `<p class="mb-4">Estes são os carrinhos que estão 100% em conformidade com o inventário esperado:</p><ul class="list-disc pl-5 space-y-2">`;
                    for (const cartId in cartData) {
                        if (cartData[cartId].status === 'conformity') {
                            detailsHtml += `<li><a href="#" class="text-success hover:underline" onclick="showIndividualCartDetails('${cartId}')"><strong>${cartId}</strong> - Setor: ${cartData[cartId].sector}</a></li>`;
                        }
                    }
                    detailsHtml += `</ul>`;
                    break;
                case 'missing':
                    titleElement.innerText = 'Carrinhos com Itens Faltando';
                    detailsHtml = `<p class="mb-4">Estes carrinhos possuem itens que deveriam estar presentes, mas não foram detectados:</p><ul class="list-disc pl-5 space-y-2">`;
                    for (const cartId in cartData) {
                        if (cartData[cartId].status === 'missing') {
                            detailsHtml += `<li><a href="#" class="text-danger hover:underline" onclick="showIndividualCartDetails('${cartId}')"><strong>${cartId}</strong> - Setor: ${cartData[cartId].sector}</a></li>`;
                        }
                    }
                    detailsHtml += `</ul>`;
                    break;
                case 'expired':
                    titleElement.innerText = 'Carrinhos com Itens Vencidos';
                    detailsHtml = `<p class="mb-4">Estes carrinhos contêm itens cuja data de validade já expirou:</p><ul class="list-disc pl-5 space-y-2">`;
                    for (const cartId in cartData) {
                        if (cartData[cartId].status === 'expired') {
                            detailsHtml += `<li><a href="#" class="text-danger hover:underline" onclick="showIndividualCartDetails('${cartId}')"><strong>${cartId}</strong> - Setor: ${cartData[cartId].sector}</a></li>`;
                        }
                    }
                    detailsHtml += `</ul>`;
                    break;
                case 'expiring':
                    titleElement.innerText = 'Carrinhos com Itens a Vencer';
                    detailsHtml = `<p class="mb-4">Estes carrinhos possuem itens que estão próximos da data de validade (próximos 30 dias):</p><ul class="list-disc pl-5 space-y-2">`;
                    for (const cartId in cartData) {
                        if (cartData[cartId].status === 'expiring') {
                            detailsHtml += `<li><a href="#" class="text-warning hover:underline" onclick="showIndividualCartDetails('${cartId}')"><strong>${cartId}</strong> - Setor: ${cartData[cartId].sector}</a></li>`;
                        }
                    }
                    detailsHtml += `</ul>`;
                    break;
                default:
                    titleElement.innerText = 'Detalhes do Carrinho';
                    detailsHtml = '<p>Selecione uma categoria no dashboard para ver os detalhes.</p>';
            }
            contentElement.innerHTML = detailsHtml;
            showPage('cart-details-page');
        }

        // Função para exibir detalhes de um carrinho individual
        function showIndividualCartDetails(cartId) {
            currentCartId = cartId; // Armazena o ID do carrinho atual
            const titleElement = document.getElementById('individual-cart-title');
            const contentElement = document.getElementById('individual-cart-content');
            const cart = cartData[cartId];
            let detailsHtml = '';

            if (cart) {
                titleElement.innerText = `Detalhes do ${cartId} - ${cart.sector}`;
                detailsHtml += `<p class="mb-4">Lista de itens e seus status de quantidade e validade:</p>`;
                detailsHtml += `<ul class="space-y-3">`;

                const today = new Date();
                today.setHours(0, 0, 0, 0); // Para comparar apenas a data

                cart.items.forEach(item => {
                    // Lógica para cor da quantidade
                    let quantityColorClass = '';
                    if (item.currentQuantity < item.standardQuantity) {
                        quantityColorClass = 'text-danger'; // Quantidade menor que o padrão
                    } else {
                        quantityColorClass = 'text-success'; // Quantidade conforme
                    }

                    // Lógica para cor da validade
                    let validityColorClass = '';
                    const validityDate = new Date(item.validity);
                    validityDate.setHours(0, 0, 0, 0); // Para comparar apenas a data

                    const threeMonthsFromNow = new Date();
                    threeMonthsFromNow.setMonth(today.getMonth() + 3);
                    threeMonthsFromNow.setHours(0, 0, 0, 0);

                    if (validityDate < today) {
                        validityColorClass = 'text-danger'; // Vencido
                    } else if (validityDate < threeMonthsFromNow) {
                        validityColorClass = 'text-warning'; // A menos de 3 meses
                    } else {
                        validityColorClass = 'text-success'; // Mais de 3 meses
                    }

                    detailsHtml += `
                        <li class="flex flex-col md:flex-row md:justify-between md:items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-text-primary w-full md:w-1/2">${item.name}</span>
                            <div class="flex flex-col md:flex-row md:items-center md:space-x-4 w-full md:w-1/2 mt-2 md:mt-0">
                                <span class="${quantityColorClass} font-semibold w-full md:w-1/2">
                                    Qtd: ${item.currentQuantity} / ${item.standardQuantity}
                                </span>
                                <span class="${validityColorClass} font-semibold w-full md:w-1/2">
                                    Validade: ${new Date(item.validity).toLocaleDateString('pt-BR')}
                                </span>
                            </div>
                        </li>
                    `;
                });
                detailsHtml += `</ul>`;
            } else {
                titleElement.innerText = 'Carrinho Não Encontrado';
                detailsHtml = '<p>Os detalhes para este carrinho não foram encontrados.</p>';
            }

            contentElement.innerHTML = detailsHtml;
            renderReportsList(cartId); // Renderiza a lista de relatórios
            showPage('cart-individual-page');
        }

        // Função para renderizar a lista de relatórios
        function renderReportsList(cartId) {
            const reportsListElement = document.getElementById('reports-list');
            const cart = cartData[cartId];
            let reportsHtml = '';

            if (cart && cart.reports.length > 0) {
                cart.reports.forEach((report, index) => {
                    reportsHtml += `
                        <div class="flex flex-col md:flex-row md:justify-between md:items-center p-3 rounded-md border border-gray-200 bg-gray-50">
                            <div class="flex-1 mb-2 md:mb-0">
                                <p class="text-text-primary font-medium">Data/Hora: ${report.date}</p>
                                <p class="text-text-secondary text-sm">Hash: ${report.hash}</p>
                            </div>
                            <button class="btn-primary px-4 py-2 text-sm" onclick="viewReport('${cartId}', ${index})">Visualizar Documento</button>
                        </div>
                    `;
                });
            } else {
                reportsHtml = '<p class="text-text-secondary">Nenhum relatório gerado para este carrinho ainda.</p>';
            }
            reportsListElement.innerHTML = reportsHtml;
        }

        // Função para renderizar a lista de status geral dos carrinhos
        function renderGeneralCartStatus() {
            const listElement = document.getElementById('general-cart-status-list');
            let listHtml = '';
            for (const cartId in cartData) {
                const cart = cartData[cartId];
                let statusClass = '';
                let statusText = '';
                if (cart.status === 'conformity') {
                    statusClass = 'text-success';
                    statusText = 'Em Conformidade';
                } else if (cart.status === 'missing') {
                    statusClass = 'text-danger';
                    statusText = 'Itens Faltando';
                } else if (cart.status === 'expired') {
                    statusClass = 'text-danger';
                    statusText = 'Itens Vencidos';
                } else if (cart.status === 'expiring') {
                    statusClass = 'text-warning';
                    statusText = 'Itens a Vencer';
                }

                listHtml += `
                    <li class="flex justify-between items-center py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors duration-200" onclick="showIndividualCartDetails('${cartId}')">
                        <span class="font-medium text-text-primary">${cartId} - ${cart.sector}</span>
                        <span class="${statusClass} font-semibold">${statusText}</span>
                    </li>
                `;
            }
            listElement.innerHTML = listHtml;
        }

        // Função para renderizar alertas em um contêiner específico
        function renderAlerts(containerId, alertsData) {
            const container = document.getElementById(containerId);
            if (!container) return;

            let alertsHtml = `<ul class="space-y-3 text-text-secondary">`;
            if (alertsData.length > 0) {
                alertsData.forEach(alert => {
                    let iconClass = '';
                    let bgColorClass = '';
                    let borderColorClass = '';
                    if (alert.type === 'missing') {
                        iconClass = 'fas fa-times-circle text-danger';
                        bgColorClass = 'bg-red-50';
                        borderColorClass = 'border-red-200';
                    } else if (alert.type === 'expired') {
                        iconClass = 'fas fa-calendar-times text-danger';
                        bgColorClass = 'bg-red-50';
                        borderColorClass = 'border-red-200';
                    } else if (alert.type === 'expiring') {
                        iconClass = 'fas fa-hourglass-half text-warning';
                        bgColorClass = 'bg-yellow-50';
                        borderColorClass = 'border-yellow-200';
                    }

                    alertsHtml += `
                        <li class="flex justify-between items-center ${bgColorClass} p-3 rounded-md border ${borderColorClass}">
                            <span class="flex items-center">
                                <i class="${iconClass} mr-2"></i>
                                <strong class="text-text-primary">${alert.cartId}:</strong> ${alert.message}
                            </span>
                            <button class="text-primary-custom hover:underline text-sm" onclick="showIndividualCartDetails('${alert.cartId}')">Ver Detalhes</button>
                        </li>
                    `;
                });
            } else {
                alertsHtml = '<p class="text-text-secondary">Nenhum alerta crítico no momento.</p>';
            }
            alertsHtml += `</ul>`;
            container.innerHTML = alertsHtml;
        }

        // Função para gerar um novo relatório (simulado)
        document.getElementById('generate-report-btn').addEventListener('click', () => {
            if (currentCartId) {
                const now = new Date();
                const dateTime = now.toLocaleString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
                const newHash = Math.random().toString(36).substring(2, 10); // Hash simples
                const reportContent = `Relatório gerado em ${dateTime} para ${currentCartId}. \n\nStatus atual dos itens: \n${cartData[currentCartId].items.map(item => `${item.name}: ${item.currentQuantity}/${item.standardQuantity} (Val: ${new Date(item.validity).toLocaleDateString('pt-BR')})`).join('\n')}`;

                const newReport = {
                    date: dateTime,
                    hash: newHash,
                    content: reportContent
                };

                cartData[currentCartId].reports.push(newReport);
                renderReportsList(currentCartId); // Atualiza a lista de relatórios
                showModal('Relatório Gerado!', `Um novo relatório foi gerado para ${currentCartId}.`, 'alert');
            } else {
                showModal('Erro', 'Nenhum carrinho selecionado para gerar relatório.', 'alert');
            }
        });

        // Função para visualizar um relatório
        function viewReport(cartId, reportIndex) {
            const report = cartData[cartId].reports[reportIndex];
            if (report) {
                showModal(`Relatório - ${cartId} (${report.date})`, report.content, 'alert');
            } else {
                showModal('Erro', 'Relatório não encontrado.', 'alert');
            }
        }

        // Função para voltar ao dashboard
        function showDashboard() {
            renderAlerts('dashboard-alerts-content', criticalAlertsData); // Garante que os alertas sejam renderizados no dashboard
            showPage('dashboard-page');
        }

        /* Lógica para Formulários Predefinidos */
        function showStandardFormPage() {
            renderPredefinedFormsList();
            document.getElementById('selected-predefined-form-details').classList.add('hidden'); // Esconde detalhes ao voltar para a lista
            showPage('standard-form-page');
        }

        function renderPredefinedFormsList() {
            const listElement = document.getElementById('predefined-forms-list');
            let listHtml = '';
            for (const formName in predefinedForms) {
                listHtml += `
                    <li class="flex justify-between items-center py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors duration-200" onclick="selectPredefinedForm('${formName}')">
                        <span class="font-medium text-text-primary">${formName}</span>
                        <button class="text-primary-custom hover:underline text-sm">Ver/Editar</button>
                    </li>
                `;
            }
            listElement.innerHTML = listHtml;
        }

        function selectPredefinedForm(formName) {
            currentPredefinedFormName = formName;
            const titleElement = document.getElementById('selected-predefined-form-title');
            const itemsListElement = document.getElementById('predefined-items-list');
            const formDetailsSection = document.getElementById('selected-predefined-form-details');

            titleElement.innerText = `Predefinição: ${formName}`;
            let itemsHtml = '';
            if (predefinedForms[formName] && predefinedForms[formName].length > 0) {
                predefinedForms[formName].forEach(item => {
                    itemsHtml += `
                        <li class="flex justify-between items-center py-1">
                            <span class="text-text-primary">${item.name}</span>
                            <span class="text-text-secondary">Qtd: ${item.quantity}</span>
                        </li>
                    `;
                });
            } else {
                itemsHtml = '<p class="text-text-secondary">Nenhum item nesta predefinição ainda.</p>';
            }
            itemsListElement.innerHTML = itemsHtml;
            formDetailsSection.classList.remove('hidden');
        }

        // Modais para Formulários Predefinidos
        function showNewPredefinedFormModal() {
            document.getElementById('new-predefined-form-modal').style.display = 'flex';
            document.getElementById('new-predefined-form-name').value = ''; // Limpa o campo
        }

        function closeNewPredefinedFormModal() {
            document.getElementById('new-predefined-form-modal').style.display = 'none';
        }

        document.getElementById('new-predefined-form-creation-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const newFormName = document.getElementById('new-predefined-form-name').value;
            if (newFormName && !predefinedForms[newFormName]) {
                predefinedForms[newFormName] = []; // Cria uma nova predefinição vazia
                renderPredefinedFormsList();
                closeNewPredefinedFormModal();
                showModal('Sucesso', `Predefinição "${newFormName}" criada com sucesso!`, 'alert');
                selectPredefinedForm(newFormName); // Opcional: selecionar a nova predefinição
            } else if (predefinedForms[newFormName]) {
                showModal('Erro', `Já existe uma predefinição com o nome "${newFormName}".`, 'alert');
            } else {
                showModal('Erro', 'Por favor, insira um nome para a nova predefinição.', 'alert');
            }
        });

        function showAddItemToPredefinedFormModal() {
            if (!currentPredefinedFormName) {
                showModal('Erro', 'Por favor, selecione uma predefinição primeiro.', 'alert');
                return;
            }
            document.getElementById('add-item-predefined-modal').style.display = 'flex';
            // Limpa os campos do formulário do modal
            document.getElementById('predefined-item-name').value = '';
            document.getElementById('predefined-item-quantity').value = '';
        }

        function closeAddItemPredefinedModal() {
            document.getElementById('add-item-predefined-modal').style.display = 'none';
        }

        document.getElementById('add-item-predefined-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const itemName = document.getElementById('predefined-item-name').value;
            const itemQuantity = parseInt(document.getElementById('predefined-item-quantity').value);

            if (itemName && !isNaN(itemQuantity) && itemQuantity > 0) {
                const currentFormItems = predefinedForms[currentPredefinedFormName];
                const existingItemIndex = currentFormItems.findIndex(item => item.name === itemName);

                if (existingItemIndex > -1) {
                    // Altera item existente
                    currentFormItems[existingItemIndex].quantity = itemQuantity;
                    showModal('Item Alterado', `Quantidade de "${itemName}" alterada para ${itemQuantity}.`, 'alert');
                } else {
                    // Adiciona novo item
                    currentFormItems.push({ name: itemName, quantity: itemQuantity });
                    showModal('Item Adicionado', `"${itemName}" com quantidade ${itemQuantity} adicionado.`, 'alert');
                }
                selectPredefinedForm(currentPredefinedFormName); // Re-renderiza a lista de itens
                closeAddItemPredefinedModal();
            } else {
                showModal('Erro', 'Por favor, preencha todos os campos corretamente (quantidade deve ser um número positivo).', 'alert');
            }
        });

        /* Lógica para Configurações dos Carrinhos */
        function showCartSettingsPage() {
            renderConnectedCartsList();
            showPage('cart-settings-page');
        }

        function renderConnectedCartsList() {
            const listElement = document.getElementById('connected-carts-list');
            let listHtml = '';
            for (const cartId in cartData) {
                const cart = cartData[cartId];
                const statusColor = cart.onlineStatus ? 'text-success' : 'text-danger';
                const statusText = cart.onlineStatus ? 'Online' : 'Offline';
                listHtml += `
                    <li class="flex justify-between items-center py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors duration-200" onclick="showEditIndividualCartSettings('${cartId}')">
                        <span class="font-medium text-text-primary">${cartId} - ${cart.sector}</span>
                        <span class="${statusColor} font-semibold">${statusText}</span>
                    </li>
                `;
            }
            listElement.innerHTML = listHtml;
        }

        function showConnectNewCartModal() {
            document.getElementById('connect-new-cart-modal').style.display = 'flex';
            document.getElementById('new-cart-id').value = '';
            document.getElementById('new-cart-sector').value = '';
        }

        function closeConnectNewCartModal() {
            document.getElementById('connect-new-cart-modal').style.display = 'none';
        }

        document.getElementById('new-cart-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const newCartId = document.getElementById('new-cart-id').value;
            const newCartSector = document.getElementById('new-cart-sector').value;

            if (newCartId && newCartSector && !cartData[newCartId]) {
                cartData[newCartId] = {
                    sector: newCartSector,
                    status: 'conformity', // Novo carrinho começa em conformidade
                    signalStrength: 100, // Sinal cheio
                    onlineStatus: true,
                    reportPeriodicity: 'daily',
                    items: [], // Começa com itens vazios
                    reports: []
                };
                renderConnectedCartsList();
                closeConnectNewCartModal();
                showModal('Sucesso', `Carrinho "${newCartId}" conectado com sucesso!`, 'alert');
            } else if (cartData[newCartId]) {
                showModal('Erro', `Já existe um carrinho com o ID "${newCartId}".`, 'alert');
            } else {
                showModal('Erro', 'Por favor, preencha todos os campos do novo carrinho.', 'alert');
            }
        });

        function showEditIndividualCartSettings(cartId) {
            currentCartId = cartId;
            const cart = cartData[cartId];
            if (!cart) {
                showModal('Erro', 'Carrinho não encontrado para edição.', 'alert');
                return;
            }

            document.getElementById('edit-cart-settings-title').innerText = `Editar Carrinho: ${cartId}`;
            document.getElementById('edit-cart-sector').value = cart.sector;
            document.getElementById('edit-cart-online-status').innerText = cart.onlineStatus ? 'Online' : 'Offline';
            document.getElementById('edit-cart-online-status').className = cart.onlineStatus ? 'font-semibold text-success' : 'font-semibold text-danger';
            document.getElementById('edit-cart-signal-strength').innerText = `${cart.signalStrength}%`;
            document.getElementById('edit-cart-report-periodicity').value = cart.reportPeriodicity;

            // Popula o dropdown de predefinições
            const predefinedFormSelect = document.getElementById('apply-predefined-form');
            predefinedFormSelect.innerHTML = '<option value="">Selecione uma predefinição</option>';
            for (const formName in predefinedForms) {
                const option = document.createElement('option');
                option.value = formName;
                option.innerText = formName;
                predefinedFormSelect.appendChild(option);
            }

            renderCartItemsForEditing(cartId);
            showPage('edit-cart-settings-page');
        }

        function renderCartItemsForEditing(cartId) {
            const itemsListElement = document.getElementById('edit-cart-items-list');
            const cart = cartData[cartId];
            let itemsHtml = '';

            if (cart && cart.items.length > 0) {
                cart.items.forEach((item, index) => {
                    itemsHtml += `
                        <li class="flex justify-between items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-text-primary flex-1">${item.name}</span>
                            <span class="text-text-secondary mx-4">Qtd Padrão: ${item.standardQuantity}</span>
                            <span class="text-text-secondary mx-4">Qtd Atual: ${item.currentQuantity}</span>
                            <span class="text-text-secondary mx-4">Validade: ${new Date(item.validity).toLocaleDateString('pt-BR')}</span>
                            <button class="text-primary-custom hover:underline text-sm ml-4" onclick="showAddEditCartItemModal('${item.name}')">Editar</button>
                            <button class="text-accent hover:underline text-sm ml-2" onclick="confirmDeleteItemFromCart('${item.name}')">Excluir</button>
                        </li>
                    `;
                });
            } else {
                itemsHtml = '<p class="text-text-secondary">Nenhum item configurado para este carrinho ainda.</p>';
            }
            itemsListElement.innerHTML = itemsHtml;
            selectedCartItemForEdit = null; // Reseta a seleção após renderizar
        }

        function applyPredefinedFormToCart() {
            const selectedFormName = document.getElementById('apply-predefined-form').value;
            if (!selectedFormName) {
                showModal('Atenção', 'Por favor, selecione uma predefinição para aplicar.', 'alert');
                return;
            }

            showModal('Confirmar Aplicação', `Tem certeza que deseja aplicar a predefinição "${selectedFormName}" ao ${currentCartId}? Isso substituirá os itens atuais do carrinho.`, 'confirm', (confirmed) => {
                if (confirmed) {
                    const predefinedItems = predefinedForms[selectedFormName];
                    const newCartItems = predefinedItems.map(item => ({
                        name: item.name,
                        standardQuantity: item.quantity,
                        currentQuantity: item.quantity, // Assume que a quantidade atual é igual à padrão ao aplicar
                        validity: new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString().split('T')[0] // Validade padrão de 2 anos
                    }));
                    cartData[currentCartId].items = newCartItems;
                    renderCartItemsForEditing(currentCartId);
                    showModal('Sucesso', `Predefinição "${selectedFormName}" aplicada ao ${currentCartId}.`, 'alert');
                }
            });
        }

        function showAddEditCartItemModal(itemName = null) {
            const modal = document.getElementById('add-edit-cart-item-modal');
            const form = document.getElementById('add-edit-cart-item-form');
            const itemInput = document.getElementById('cart-item-name');
            const standardQuantityInput = document.getElementById('cart-item-standard-quantity');
            const currentQuantityInput = document.getElementById('cart-item-current-quantity');
            const validityInput = document.getElementById('cart-item-validity');

            selectedCartItemForEdit = null; // Reseta a seleção

            if (itemName) {
                const cart = cartData[currentCartId];
                const itemToEdit = cart.items.find(item => item.name === itemName);
                if (itemToEdit) {
                    selectedCartItemForEdit = itemToEdit;
                    itemInput.value = itemToEdit.name;
                    itemInput.readOnly = true; // Não permite alterar o nome do item ao editar
                    standardQuantityInput.value = itemToEdit.standardQuantity;
                    currentQuantityInput.value = itemToEdit.currentQuantity;
                    validityInput.value = itemToEdit.validity;
                }
            } else {
                itemInput.value = '';
                itemInput.readOnly = false;
                standardQuantityInput.value = '';
                currentQuantityInput.value = '';
                validityInput.value = '';
            }
            modal.style.display = 'flex';
        }

        function closeAddEditCartItemModal() {
            document.getElementById('add-edit-cart-item-modal').style.display = 'none';
        }

        document.getElementById('add-edit-cart-item-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const itemName = document.getElementById('cart-item-name').value;
            const standardQuantity = parseInt(document.getElementById('cart-item-standard-quantity').value);
            const currentQuantity = parseInt(document.getElementById('cart-item-current-quantity').value);
            const validity = document.getElementById('cart-item-validity').value;

            if (itemName && !isNaN(standardQuantity) && standardQuantity > 0 && !isNaN(currentQuantity) && currentQuantity >= 0 && validity) {
                const cart = cartData[currentCartId];
                const existingItemIndex = cart.items.findIndex(item => item.name === itemName);

                if (existingItemIndex > -1) {
                    // Altera item existente
                    cart.items[existingItemIndex] = { name: itemName, standardQuantity, currentQuantity, validity };
                    showModal('Item Alterado', `Item "${itemName}" atualizado no ${currentCartId}.`, 'alert');
                } else {
                    // Adiciona novo item
                    cart.items.push({ name: itemName, standardQuantity, currentQuantity, validity });
                    showModal('Item Adicionado', `Item "${itemName}" adicionado ao ${currentCartId}.`, 'alert');
                }
                renderCartItemsForEditing(currentCartId);
                closeAddEditCartItemModal();
            } else {
                showModal('Erro', 'Por favor, preencha todos os campos corretamente.', 'alert');
            }
        });

        function confirmDeleteItemFromCart(itemName = null) {
            let itemToDeleteName = itemName;
            if (!itemToDeleteName) {
                // If no specific item name is passed, check if one was selected for editing
                if (selectedCartItemForEdit) {
                    itemToDeleteName = selectedCartItemForEdit.name;
                } else {
                    showModal('Erro', 'Nenhum item selecionado para exclusão.', 'alert');
                    return;
                }
            }

            showModal('Confirmar Exclusão', `Tem certeza que deseja excluir o item "${itemToDeleteName}" do ${currentCartId}?`, 'confirm', (confirmed) => {
                if (confirmed) {
                    deleteItemFromCart(itemToDeleteName);
                }
            });
        }

        function deleteItemFromCart(itemName) {
            const cart = cartData[currentCartId];
            cart.items = cart.items.filter(item => item.name !== itemName);
            renderCartItemsForEditing(currentCartId);
            showModal('Item Excluído', `Item "${itemName}" excluído do ${currentCartId}.`, 'alert');
        }

        function saveCartSettings() {
            const cart = cartData[currentCartId];
            if (!cart) {
                showModal('Erro', 'Carrinho não encontrado.', 'alert');
                return;
            }

            cart.sector = document.getElementById('edit-cart-sector').value;
            cart.reportPeriodicity = document.getElementById('edit-cart-report-periodicity').value;

            // Em um ambiente real, você enviaria esses dados para o backend
            showModal('Sucesso', `Configurações do ${currentCartId} salvas com sucesso!`, 'alert');
            showCartSettingsPage(); // Volta para a lista de configurações de carrinhos
        }


        // Inicializa a página no dashboard após o login (simulado)
        document.addEventListener('DOMContentLoaded', () => {
            // Inicialmente, apenas a tela de login é visível
            document.getElementById('login-screen').classList.remove('hidden');
            document.getElementById('main-app').classList.add('hidden');
        });