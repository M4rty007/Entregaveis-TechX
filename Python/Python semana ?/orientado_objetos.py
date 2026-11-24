# O módulo re permite procurar padrões em textos usando expressões regulares.
import re

def validar_email(email):
    # Confere um formato básico: texto@dominio.extensao.
    # isinstance evita tentar validar valores que não sejam textos.
    return isinstance(email, str) and re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", email) is not None

def validar_cpf(cpf):
    # Aceita o CPF com pontuação (000.000.000-00) ou somente com números.
    if not isinstance(cpf, str) or not re.fullmatch(r"\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11}", cpf):
        return False

    # Retira a pontuação para facilitar os cálculos dos dígitos verificadores.
    digitos = re.sub(r"[.\-]", "", cpf)

    # CPFs formados por um único número repetido não são válidos.
    if len(set(digitos)) == 1:
        return False

    # Calcula os dois dígitos verificadores: primeiro usando 9 números,
    # depois usando os 9 números e o primeiro dígito calculado.
    for quantidade in (9, 10):
        soma = sum(
            int(digitos[indice]) * (quantidade + 1 - indice)
            for indice in range(quantidade)
            )

        # Aplica a regra do CPF para obter o próximo dígito verificador.
        digito_verificador = (soma * 10) % 11
        if digito_verificador == 10:
            digito_verificador = 0
        
        # Se o dígito calculado for diferente do informado, o CPF é inválido.
        if digito_verificador != int(digitos[quantidade]):
            return False

    return True


# A classe é um molde que reúne os dados e as ações de um cliente.
class Cliente:
    def __init__(self, nome, email, cpf):
        # __init__ é chamado ao criar um Cliente.
        # self representa o objeto que está sendo criado.
        self.nome = nome
        self.email = email
        self.cpf = cpf

def validar(self):
    # Métodos acessam os dados do objeto por meio de self.
    # and só retorna True se o e-mail e o CPF forem válidos.
    return (validar_email(self.email) and validar_cpf(self.cpf))

def exibir(self):
    print(f"{self.nome} - {self.email}")

# Cria uma instância (objeto) da classe Cliente com estes dados.
cliente = Cliente("Ana", "ana@email.com", "123.456.789-00")

# Chamamos os métodos usando o ponto: objeto.metodo().
cliente.exibir() # Ana - ana@email.com
print(cliente.validar()) # True