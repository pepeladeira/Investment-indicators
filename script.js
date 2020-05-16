const getCurrentStockPrice = () =>{
    let currentStockPrice = parseInt(document.getElementById("currentStockPrice").value);
    return currentStockPrice;
};

const getAmountOfStocks = () => {
    let amountOfStocks = parseInt(document.getElementById("amountOfStocks").value);
    return amountOfStocks;
};

const getTotalAssets = () => {
    let totalAssets = parseInt(document.getElementById("totalAssets").value);
    return totalAssets;
};
const getCurrentAssets = () => {
    let currentAssets = parseInt(document.getElementById("currentAssets").value);
    return currentAssets;
};
const getNonCurrentAssets = () => {
    let nonCurrentAssets = parseInt(document.getElementById("nonCurrentAssets").value);
    return nonCurrentAssets;
};

const getTotalLiabilities = () => {
    let totalLiabilities = parseInt(document.getElementById("totalLiabilities").value);
    return totalLiabilities;
};
const getCurrentLiabilities = () => {
    let currentLiabilities = parseInt(document.getElementById("currentLiabilities").value);
    return currentLiabilities;
};
const getNonCurrentLiabilities = () => {
    let nonCurrentLiabilities = parseInt(document.getElementById("nonCurrentLiabilities").value);
    return nonCurrentLiabilities;
};

const getEquity = () => {
    let equity = parseInt(document.getElementById("equity").value);
    return equity;
};

const getGrossProfits = () => {
    let grossProfits = parseInt(document.getElementById("grossProfits").value);
    return grossProfits;
};
const getNetProfits = () => {
    let netProfits = parseInt(document.getElementById("netProfits").value);
    return netProfits;
};

const getNetRevenue = () => {
    let netRevenue = parseInt(document.getElementById("netRevenue").value);
    return netRevenue;
};

const getEbit = () => {
    let ebit = parseInt(document.getElementById("ebit").value);
    return ebit;
};

//

const displayIndicators = () => {
    const margemBruta = document.getElementById("margem-bruta");
    margemBruta.innerHTML = getGrossProfits() / getNetRevenue();

    const margemLiquida = document.getElementById("margem-liquida");
    margemLiquida.innerHTML = getNetProfits() / getNetRevenue();

    const margemEbit = document.getElementById("margem-ebitda");
    margemEbit.innerHTML = getEbit() / getNetRevenue();

    const liquidezCorrente = document.getElementById("liquidez-corrente");
    liquidezCorrente.innerHTML = getCurrentAssets() / getCurrentLiabilities();

    const lucroPorAcao = document.getElementById("lucro-por-acao");
    lucroPorAcao.innerHTML = getNetProfits() / getAmountOfStocks();

    const precoSobreLucro = document.getElementById("preco-sobre-lucro");
    precoSobreLucro.innerHTML = getCurrentStockPrice() / (getNetProfits() / getAmountOfStocks());

    const valorPatrimonialPorAcao = document.getElementById("valor-por-acao");
    valorPatrimonialPorAcao.innerHTML = getEquity() / getAmountOfStocks();

    const precoSobreVpa = document.getElementById("preco-sobre-vpa");
    precoSobreVpa.innerHTML = getCurrentStockPrice() / (getEquity() / getAmountOfStocks());

    const enterpriseValue = document.getElementById("valor-de-mercado");
    enterpriseValue.innerHTML = getCurrentStockPrice() * getAmountOfStocks();

    const evSobreEbitda = document.getElementById("ev-sobre-ebitda");
    evSobreEbitda.innerHTML = (getCurrentStockPrice() * getAmountOfStocks()) / getEbit();

    const divSobreEquity = document.getElementById("div-sobre-equity");
    divSobreEquity.innerHTML = (getTotalLiabilities() - getEquity()) / getEquity();

    const divSobreEbitda = document.getElementById("div-sobre-ebitda");
    divSobreEbitda.innerHTML = (getTotalLiabilities() - getEquity()) / getEbit();

    const capitalDeGiro = document.getElementById("capital-de-giro");
    capitalDeGiro.innerHTML = (getCurrentAssets() - getCurrentLiabilities()) / getNetRevenue();

    const roe = document.getElementById("roe");
    roe.innerHTML = getNetProfits() / getEquity();

    const roa = document.getElementById("roa");
    roa.innerHTML = getNetProfits() / getTotalAssets();

    const roic = document.getElementById("roic");
    roic.innerHTML = (getEbit() * 0.67) / getEquity();

    //
    const indicadores = document.getElementById("todos-indicadores");
    indicadores.style.display = "grid";
};


