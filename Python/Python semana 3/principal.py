import calculadora
import utilidades
from lista_segura import add_secury_item


# Testando o módulo calculadora

print("Soma:", calculadora.add(10, 5))
print("Subtração:", calculadora.subtarct(10, 5))
print("Multiplicação:", calculadora.multiply(10, 5))
print("Divisão:", calculadora.devide(10, 5))



# Testando o módulo utilidades

temperatura = utilidades.temp_converter(25)
print("25°C em Fahrenheit:", temperatura)

passw = "Senha123"
if utilidades.passw_check(passw):
    print("Senha válida.")
else:
    print("Senha inválida.")

total = utilidades.box(10.50, 20.00, 5.50)
print("Total da caixa:", total)

student = utilidades.student_data(
    nome = "João",
    idade = 20,
    curso = "Python",
    nota = 9.5
)

print("Ficha do aluno:", student)



# Testando a lista segura

original_list = ["Python", "Java", "C++"]

new_list = add_secury_item(original_list, "JavaScript")

print("Lista original:", original_list)
print("Lista nova:", new_list)
