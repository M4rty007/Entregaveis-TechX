def fun(*prices):
    total = sum(prices)
    average = sum(prices) / len(prices)
    expensive = max(prices)
    return total, average, expensive

print(fun(1,4,5,2,3))