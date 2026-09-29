#___Filtragem___#
# lista original de valores
lista = [10, 5, 20, 3, 42, 7]
# filtragem com list comprehension
maiores = [x for x in lista if x > 10]
print(maiores) # [20, 42]
# mesma filtragem com filter()
pares = list(filter(lambda x: x % 2 == 0, lista))
print(pares) # [10, 20, 42]

#___Ordenação___#
# lista fora de ordem
lista = [10, 5, 20, 3]
# sort() ordena a propria lista
lista.sort()
print(lista) # [3, 5, 10, 20]
# ordem decrescente
lista.sort(reverse=True)
print(lista) # [20, 10, 5, 3]
# sorted() devolve uma nova lista
nova = sorted(lista)