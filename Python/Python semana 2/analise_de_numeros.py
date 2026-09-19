add = 0
major = None
minor = None

for i in range(5):
    number = float(input("Digite um número: "))

    add += number

    if major is None or number > major:
        major = number

    if minor is None or number < minor:
        minor = number

average = add / 5

print("Soma:", add)
print("Média:", average)
print("Maior valor:", major)
print("Menor valor:", minor)