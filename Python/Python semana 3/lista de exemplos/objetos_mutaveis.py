# int, float, str e tupla: imutaveis
def dobrar(numero):
    numero = numero * 2 # novo objeto
    return numero

valor = 10
print(dobrar(valor)) # 20
print(valor) # 10 (intacto)

# str: "abc".upper() cria outra string

# lista, dicionario e set: mutaveis
def add(lista, item):
    lista.append(item) # altera objeto

compras = ["arroz"]
add(compras, "feijao")
print(compras) # ['arroz', 'feijao']

# copia defensiva: protege o original
add(compras[:], "cafe")

#___Bugs___#

# ERRADO: lista como valor padrao
def add(item, lista=[]):
    lista.append(item)
    return lista

print(add("a")) # ['a']
print(add("b")) # ['a', 'b'] bug!
# o padrao e criado UMA unica vez