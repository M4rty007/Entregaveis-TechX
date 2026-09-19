product_value = int(input("preço do produto: "))
paid_value = int(input("valor pago: "))

if product_value < paid_value:
    new_value = paid_value - product_value
    print(f"seu troco é {new_value}")
elif product_value > paid_value:
    new_value1 = product_value - paid_value
    print(f"falta pagar {new_value1}")