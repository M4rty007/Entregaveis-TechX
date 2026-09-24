# procedimento: so executa acao
def saudar(nome):
    print(f"Ola, {nome}!") # exibe

# nao existe return aqui
saudar("Ana") # Ola, Ana!

r = saudar("Ana")

print(r) # None

#___Na_Pratica___#

# procedimento com parametros
def cabecalho(titulo, largura=30):
    print(titulo.center(largura))

print("-" * largura)

cabecalho("RELATORIO")
# erro comum:
x = cabecalho("A") + 1 # TypeError