age = int(input("Idade: "))
income = int(input("Renda média: "))

if age >= 30 and income >= 15000:
    print("Diamante")

elif age >= 20 and income >= 10000:
    print("Ouro")

elif age >= 20 and income >= 5000:
    print("Prata")

elif age >= 18 and income >= 1000:
    print("Bronze")

elif age < 18:
    print("Menor de Idade")