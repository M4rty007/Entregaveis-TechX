# COM retorno
def somar(a, b):
    return a + b # devolve o valor

# SEM retorno
def mostrar(x):
    print(x) # devolve None

r = somar(10, 5) # r vale 15

print(mostrar(7)) # imprime None

#___Casos_Especiais___#

# retorno antecipado
def dividir(a, b):
    if b == 0:
        return None # sai antes
    return a / b

# devolver varios valores
def dividir2(a, b):
    return a // b, a % b

q, r = dividir2(7, 2) # 3 e 1
print(q)
print(r)