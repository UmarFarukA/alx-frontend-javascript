function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {
        income: getCurrentYear(),
        gdp: getCurrentYear(),
        capita: getCurrentYear()
    };

    budget.income = income;
    budget.gdp = gdp;
    budget.capita = capita;

    return budget;
}