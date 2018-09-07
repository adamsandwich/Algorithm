/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0,
        minPrice = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > profit) {
            profit = prices[i] - minPrice;
        }
    }
    return profit;
};