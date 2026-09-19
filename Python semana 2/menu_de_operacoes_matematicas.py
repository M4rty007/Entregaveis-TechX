print("""+ = 1
- = 2
* = 3
/ = 4""")

operation = int(input("Selecione o operador: "))
a = int(input("valor a: "))
b = int(input("valor 2: "))

match operation:
    case 1:
        result = a + b
        print(result)
    case 2:
        result = a - b
        print(result)
    case 3:
        result = a * b
        print(result)
    case 4:
        result = a / b
        print(result)
