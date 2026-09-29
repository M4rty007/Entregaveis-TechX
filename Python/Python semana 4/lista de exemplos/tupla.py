# declaracao da tupla (parenteses)
ponto = (10, 20, 30)
# acesso pelo indice (inicia em 0)
print(ponto[0]) # imprime 10
# imprime a tupla inteira
print(ponto) # (10, 20, 30)
# percorrendo a tupla
for valor in ponto:
    print(valor)

#_______________________#
# tupla com latitude e longitude (imutavel)
local = (12.45, -32.12)
# acesso pelos indices 0 e 1
print(f"Latitude: {local[0]}, Longitude: {local[1]}")