original_price = int(input("valor do produto: "))
discount = int(input("valor do desconto em %: "))

if 0 < discount < 101:
    discount_value = original_price * (discount / 100)
    final_price = original_price - discount_value
    print(final_price)
else:
    print("isso é possivel??")