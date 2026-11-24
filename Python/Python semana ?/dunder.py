# A classe é um molde que reúne os dados e os comportamentos de um produto.
class Produto:
    # self é o parâmetro que referencia o objeto atual.
    # O Python passa esse objeto automaticamente ao chamar um método.
    def __init__(self, nome, preco):
        # __init__ é o inicializador: prepara os atributos ao criar o objeto.
        self.nome = nome
        self.preco = preco
    
    # __str__ define o texto amigável exibido por print(objeto).
    def __str__(self):
        return f"{self.nome} (R$ {self.preco:.2f})"
    
    # __repr__ define a representação detalhada usada por repr(objeto),
    # útil para identificar o objeto durante o desenvolvimento e a depuração.
    def __repr__(self):
        return f"Produto({self.nome!r}, {self.preco!r})"
    
    # __eq__ define como comparar dois objetos com o operador de igualdade ==.
    def __eq__(self, outro):
        if not isinstance(outro, Produto):
            return False
    
    # Consideramos os produtos iguais quando nome e preço são iguais.
        return (self.nome == outro.nome and self.preco == outro.preco)
    
    # __lt__ define como comparar objetos com o operador menor que (<).
    def __lt__(self, outro):
        # Neste exemplo, um produto é "menor" quando tem preço mais baixo.
        return self.preco < outro.preco
    
# Criamos dois objetos (instâncias) usando o molde Produto.
p1, p2 = Produto("Notebook", 2500.0), Produto("Mouse", 45.9)

# As funções e operadores abaixo usam automaticamente os métodos especiais:
print(p1) # Usa __str__: Notebook (R$ 2500.00)
print(repr(p1)) # Usa __repr__: Produto('Notebook', 2500.0)
print(p1 == Produto("Notebook", 2500.0)) # Usa __eq__: True
print(p1 < p2) # Usa __lt__: False