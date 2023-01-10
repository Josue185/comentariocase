//criando a data
var hoje = new Date();
var dataFormatada = hoje.toLocaleDateString("pt-BR");
document.getElementById("dataAtual").innerHTML = dataFormatada;

//ocultando a string da div usada para chamar a data.
document.getElementById("dataAtual").style.display = "none";

//manipulando os botões de task
const btn = document.querySelectorAll('button')[0];
const btn1 = document.querySelectorAll('button')[1];
const btn2 = document.querySelectorAll('button')[2];
const btn3 = document.querySelectorAll('button')[3];
const btn4 = document.querySelectorAll('button')[4];
const btn5 = document.querySelectorAll('button')[5];
const btn6 = document.querySelectorAll('button')[6];
const btn7 = document.querySelectorAll('button')[7];
const btn8 = document.querySelectorAll('button')[8];
const btn9 = document.querySelectorAll('button')[9];
const btn10 = document.querySelectorAll('button')[10];
const btn11 = document.querySelectorAll('button')[11];
const btn12 = document.querySelectorAll('button')[12];
const btn13 = document.querySelectorAll('button')[13];


//manipulando os botões de task
const modCase = document.querySelector('botaomodelo');

//const que manda o texto ao resultado
const resultado = document.querySelector('#resultado');


//função de clique que retorna a string

function converTrackGTM() {
  resultado.innerHTML = 'Data: ' + (dataFormatada) + '\n' + 'Speakeasy ID: ' + '\n' + 'Substatus: SO-verified' + '\n' + '\n' + 'On call Comments: O Anunciante criou uma conta no Google Tag Manager e inseriu o código na plataforma do site do cliente. A plataforma que o cliente usa é um [“Insert cms name”]. Ativamos o vinculador de conversão no Google Tag Manager.' + '\n' + 'Criamos e ativamos o ID de rastreamento do Google Ads no Google Tag Manager para as conversões: “Clique no botão do WhatsApp” "Formulário de Contato" “Clique no botão do telefone” Definimos as metas no Google Ads e inserimos o modelo de atribuição ""Time Decay"", conforme solicitação do gerente de contas.' + '\n' + 'A AutoTagging estava ativa no Google Ads.' + '\n' + 'O Backup do site foi feito antes da chamada.' + '\n' + 'Publicamos o contêiner no Google Tag Manager.' + '\n' + 'Realizamos os testes de conversões no site e elas estavam sendo acionadas e contabilizadas no Tag Assistant e GTM Preview.' + '\n' + 'O cliente não teve dúvidas sobre a implementação.'+ '\n' + 'O caso será encerrado como SO - Verified porque o Status da tag foi alterado para Nenhuma conversão recente OU Registrando Conversões'+ '\n' + '\n' + 'Tags Implemented:' + '\n';
}

function converTrackCode() {
  resultado.innerHTML = 'Data: ' + (dataFormatada) + '\n' + 'Speakeasy ID: ' + '\n' + 'Substatus: SO-verified' + '\n' + '\n' + 'On call Comments: "Criamos as conversões dentro do Google Ads, depois criamos os códigos para capturar cada uma dessas conversões no padrão Gtag.' + '\n' + 'As conversões que foram criadas foram:“Clique no botão do WhatsApp”“Clique no botão do telefone”""Formulário de Contato""* *Definimos as metas no Google Ads e inserimos o modelo de atribuição “Time Decay”, conforme solicitação do gerente de contas. A Auto Tagging estava ativa no Google Ads. O Backup do site foi feito antes da chamada. Realizamos os testes de conversões no site e elas estavam sendo acionadas e contabilizadas no Tag Assistant e DevTools. O cliente não teve dúvidas sobre a implementação. Acompanharei o caso durante 2 dias para garantir que a implementação esteja funcionando corretamente (o status da tag não mudou, mas a assistência da tag está mostrando o disparo da tag)'+ '\n' + 'Tags Implemented:' + '\n';
}

function GTMSetup() {
  resultado.innerHTML = 'Data: ' + (dataFormatada) + '\n' + 'Speakeasy ID: ' + '\n' + 'Substatus: SO-Verified'+ '\n' + '\n' + 'Reason/Comments: ' + '\n' + 'On call Comments: O Anunciante criou uma conta no Google Tag Manager e inseriu o código na plataforma do site do cliente. A plataforma que o cliente usa é um [“Insert cms name”].Ativamos o vinculador de conversão no Google Tag Manager, criamos e ativamos o ID de rastreamento do Google Ads no Gerenciador de tags do Google para a tag de remarketing. A Auto Tagging estava ativa no Google Ads. O Backup do site foi feito antes da chamada. Publicamos o contêiner no Google Tag Manager.Realizamos os testes de acionamento de tags no site e eles estavam sendo acionados e contados no Tag Assistant e GTM Preview. O cliente não teve dúvidas sobre a implementação.Aguardaremos impressões e/ou conversões no/no Google Ads.'+ '\n' + 'Tags Implemented:' + '\n';
}

function webcallGTM() {
  resultado.innerHTML ='Data: ' + (dataFormatada) + '\n' + 'Speakeasy ID: ' + '\n' + 'Substatus: SO-Verified'+ '\n' + '\n' + 'Reason/Comments: ' + '\n' + 'On call Commentes: "O Anunciante criou uma conta no Google Tag Manager e inseriu o código na plataforma do site do cliente. A plataforma que o cliente usa é um [“Inserir nome cms”]. Então ativamos o vinculador de conversão no Google Tag Manager, criamos e ativamos o ID de rastreamento do Google Ads no Google Tag Manager para as conversões [COLOCAR NOME DA CONVERSÃO] O caso será encerrado como SO - Verified porque o Status da tag mudou para Nenhuma conversão recente OU Conversões registradas"' + '\n' + 'Tags Implemented:' + '\n';
}

function webcallGtag() {
  resultado.innerHTML = 'Data: ' + (dataFormatada) + '\n' + 'Speakeasy ID: ' + '\n' + 'Substatus: SO-Verified'+ '\n' + '\n' + 'Reason/Comments: ' + '\n' + 'On call Comments: "Definimos as metas no Google Ads e inserimos o modelo de atribuição [""Time Decay""], conforme solicitado pelo gerente da conta, a Auto tagging estava ativa no Google Ads, o Backup do site foi feito antes da chamada. Publicamos o contêiner no Google Tag Manager. Realizamos os testes de conversões no site e elas estavam sendo acionadas e contadas no Tag Assistant, GTM Preview e adicionando #google-wcc-debug na URL do site. O número alterado para “9999999” foi exibido no site e está tudo OK, O caso será encerrado como SO - Verified porque o Status da tag mudou para Nenhuma conversão recente OU Conversões registradas"".' + '\n' + 'Tags Implemented:' + '\n';
}

function gAeventGtm() {
  resultado.innerHTML = 'Data: ' + (dataFormatada) + '\n' + 'Speakeasy ID: ' + '\n' + 'Substatus: SO-Verified'+ '\n' + '\n' + 'Reason/Comments: ' + '\n' + 'On call Comments: "O Anunciante criou uma conta no Google Tag Manager e inseriu o código na plataforma do site do cliente. A plataforma que o cliente usa é um [“Inserir nome cms”], criamos metas dentro do Google Analytics e ativamos o vinculador de conversão no Google Tag Manager. Criamos e ativamos a tag de rastreamento do Google Analytics no Google Tag Manager para todas as páginas do site. Criamos as seguintes tags de conversão no GTM. (Defina as tags). Importamos as metas para o Google Ads e inserimos o modelo de atribuição “Time Decay”, conforme solicitação do gerente de contas.  A Auto tagging estava ativa no Google Ads. O Backup do site foi feito antes da chamada, publicamos o contêiner no Google Tag Manager e Realizamos os testes de conversões no site e elas estavam sendo acionadas e contabilizadas em **Analytics em tempo real, GTM Preview e Tag Assistant. O cliente não teve dúvidas sobre a implementação."' + '\n' + 'Tags Implemented:' + '\n';
}

function gAeventGtag() {
  resultado.innerHTML = 'Data: ' + (dataFormatada) + '\n' + 'Speakeasy ID: ' + '\n' + 'Substatus: SO-Verified'+ '\n' + '\n' + 'Reason/Comments: ' + '\n' + 'On call Comments: ""Inserimos o código gtag do Google Analytics para poder monitorar todas as páginas do site. A plataforma que o cliente usa é um [“Inserir nome cms”], então criamos as seguintes metas no Google Analytics (Defina as metas), colocamos os códigos para capturar a conversão criada, Importamos as metas do Google Analytics para o Google Ads e inserimos o modelo de atribuição [“Time Decay”], conforme solicitado pelo gerente da conta. A codificação automática estava ativa no Google Ads, foi feito backup do site antes da chamada e realizamos testes de conversão no site e eles estavam sendo acionados e contabilizados no Tag Assistant e DevTools, o cliente não teve dúvidas sobre a implementação e as impressões/conversões estão acionando corretamente."' + '\n' + 'Tags Implemented:' + '\n';
}

function analyticEcomGtm() {
  resultado.innerHTML = 'Data: ' + (dataFormatada) + '\n' + 'Speakeasy ID: ' + '\n' + 'Substatus: Awaiting Validation'+ '\n' + 'Reason/Comments: ' + '\n' + 'On call Comments: Nas configurações de visualização do Analytics, alteramos o modelo de moeda para ["Euro"], Habilitamos a opção Ecommerce nas configurações do Google Analytics, vinculamos o Google Analytics ao Google Ads,Importamos a meta da transação para o Google Ads e alteramos o modelo de atribuição para [“Time Decay”]. No Google Tag Manager criamos a tag de transação, aconselhamos o desenvolvedor a colocar o código na página de agradecimento, para capturar os dados do DataLayer, fizemos uma compra de teste e validamos a implementação da conversão com sucesso, capturamos os valores de compra no assistente de tags.Acompanharei o caso durante 2 dias para garantir que a implementação esteja funcionando corretamente (o status da tag não mudou, mas a assistência da tag está mostrando o disparo da tag). Além disso, precisamos confirmar que a conversão do Google Ads também está rastreando corretamente.' + '\n' + 'Tags Implemented:' + '\n';
}

function analyticEcomGtag() {
  resultado.innerHTML = 'Data: ' + (dataFormatada) + '\n' + 'Speakeasy ID: ' + '\n' + 'Substatus: Awaiting Validation'+ '\n' + 'Reason/Comments: ' + '\n' + 'On call Comments: Nas configurações de visualização do Analytics, alteramos o modelo de moeda para [“Euro”]. Habilitamos a opção Ecommerce nas configurações do Google Analytics, vinculamos o Google Analytics ao Google Ads então importamos a meta da transação para o Google Ads e alteramos o modelo de atribuição para [“Time Decay”]. Colocamos o código de comércio eletrônico do Analytics na página de agradecimento para capturar a conversão da compra. Fizemos uma compra de teste para poder validar a implementação da tag, validamos com sucesso os testes, capturamos a conversão da compra no assistente de tags. Acompanharei o caso durante 2 dias para garantir que a implementação esteja funcionando corretamente (o status da tag não mudou, mas a assistência da tag está mostrando o disparo da tag). Além disso, precisamos confirmar que a conversão do Google Ads também está rastreando corretamente.' + '\n' + 'Tags Implemented:' + '\n';
}

function RemGtm() {
  resultado.innerHTML = 'Data: ' + (dataFormatada) + '\n' + 'Speakeasy ID: ' + '\n' + 'Substatus: Awaiting Validation'+ '\n' + 'Reason/Comments: ' + '\n' + 'On call Comments: "O Anunciante criou uma conta no Google Tag Manager e inseriu o código na plataforma do site do cliente. A plataforma que o cliente usa é um [“Inserir nome cms”]. Ativamos o vinculador de conversão no Google Tag Manager.Criamos e ativamos o ID de rastreamento do Google Ads no Gerenciador de tags do Google para a tag de remarketing, a Auto tagging estava ativa no Google Ads. O Backup do site foi feito antes da chamada, publicamos o contêiner no Google Tag Manager. Realizamos os testes de acionamento de tags no site e eles estavam sendo acionados e contados no Tag Assistant e GTM Preview, e como cliente não teve dúvidas sobre a implementação. Aguardaremos impressões e/ou conversões no/no Google Ads."' + '\n' + 'Tags Implemented:' + '\n';
}

function RemGtag() {
  resultado.innerHTML = 'Data: ' + (dataFormatada) + '\n' + 'Speakeasy ID: ' + '\n' + 'Substatus: Awaiting Validation'+ '\n' + 'Reason/Comments: ' + '\n' + 'On call Comments: Criamos as listas de remarketing dentro do Google Ads e inserimos o código gtag na plataforma do site do cliente, a Auto tagging estava ativa no Google Ads. O Backup do site foi feito antes da chamada, Realizamos os testes de conversões no site e elas estavam sendo acionadas e contabilizadas no Tag Assistant e DevTools, o cliente não teve dúvidas sobre a implementação. Aguardaremos impressões e/ou conversões no/no Google Ads.' + '\n' + 'Tags Implemented:' + '\n';
}

function adsConversionTrackGtm() {
  resultado.innerHTML = 'Data: ' + (dataFormatada) + '\n' + 'Speakeasy ID: ' + '\n' + 'Substatus: Awaiting Validation'+ '\n' + 'Reason/Comments: ' + '\n' + 'On call Comments: "O Conversion Linker já estava configurado no GTM, A Auto tagging estava ativa no Google Ads, o Gclid foi testado e funcionou bem O cookie estava armazenando informações com sucesso, O site tinha as tags Google Tag Manager, Google Analytics e Remarketing funcionando e Acompanharemos o caso em até 2 dias úteis para garantir que o Google Analytics esteja rastreando os dados corretamente."' + '\n' + 'Tags Implemented:' + '\n';
}

function adsConversionTrackGtag() {
  resultado.innerHTML = 'Data: ' + (dataFormatada) + '\n' + 'Speakeasy ID: ' + '\n' + 'Substatus: Awaiting Validation'+ '\n' + 'Reason/Comments: ' + '\n' + 'On call Comments: "O código de conversão foi implementado corretamente no site do anunciante a Auto tagging estava ativa no Google Ads, então o Gclid foi testado e funcionou bem O cookie estava armazenando informações com sucesso. O site tinha as tags Google Tag Manager, Google Analytics e Remarketing funcionando acompanharemos o caso em até 2 dias úteis para garantir que o Google Analytics esteja rastreando os dados corretamente."' + '\n' + 'Tags Implemented:' + '\n';
}

function gaMigrationGtm() {
  resultado.innerHTML = 'Data: ' + (dataFormatada) + '\n' + 'Speakeasy ID: ' + '\n' + 'Substatus: Awaiting Validation'+ '\n' + 'Reason/Comments: ' + '\n' + 'On call Comments: "O código de conversão foi implementado corretamente no site do anunciante a Auto tagging estava ativa no Google Ads, então o Gclid foi testado e funcionou bem O cookie estava armazenando informações com sucesso. O site tinha as tags Google Tag Manager, Google Analytics e Remarketing funcionando acompanharemos o caso em até 2 dias úteis para garantir que o Google Analytics esteja rastreando os dados corretamente."' + '\n' + 'Tags Implemented:' + '\n';
}

//Escutando o Clique no botão

btn.addEventListener('click', converTrackGTM)
btn1.addEventListener('click', converTrackCode)
btn2.addEventListener('click', GTMSetup)
btn3.addEventListener('click', webcallGTM)
btn4.addEventListener('click', webcallGtag)
btn5.addEventListener('click', gAeventGtm)
btn6.addEventListener('click', gAeventGtag)
btn7.addEventListener('click', analyticEcomGtm)
btn8.addEventListener('click', analyticEcomGtag)
btn9.addEventListener('click', RemGtm)
btn10.addEventListener('click', RemGtag)
btn11.addEventListener('click', adsConversionTrackGtm)
btn12.addEventListener('click', adsConversionTrackGtag)
btn13.addEventListener('click', gaMigrationGtm)

//funçao do Mod Case
modCase.addEventListener('click', botaomodelo)

async function copyResult() {
  try {
    const element = document.querySelector('#resultado');
    const textToCopy = element.textContent;
    await navigator.clipboard.writeText(textToCopy);
    console.log('Texto copiado com sucesso!');
    alert('Texto copiado com sucesso!');
  } catch (err) {
    console.error('Erro ao copiar o texto: ', err);
  }
}