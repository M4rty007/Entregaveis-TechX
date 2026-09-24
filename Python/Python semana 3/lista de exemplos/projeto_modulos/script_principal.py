# script_principal.py
import calculadora

s = calculadora.somar(10, 5)
m = calculadora.multiplicar(4, 3)

print(f"Soma: {s}")
print(f"Mult: {m}")

# Saida: Soma: 15
# Mult: 12

#___Erros_comuns___#

#import calculadoraa
## ModuleNotFoundError:
## erro de digitacao no nome
#
## Proteja o teste do modulo:
#if __name__ == "__main__":
#    print(somar(2, 3))
#
## math.py na sua pasta
## esconde o modulo padrao