def temp_converter(celsius):            # Converte uma temperatura de Celsius para Fahrenheit.
    fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit


def passw_check(passw):                 # Valida uma senha verificando se possui pelo menos 8 caracteres, uma letra e um número.
    if len(passw) < 8:
        return False

    tem_letter = any(caractere.isalpha() for caractere in passw)
    tem_number = any(caractere.isdigit() for caractere in passw)

    return tem_letter and tem_number


def box(*prices):                       # Recebe vários preços utilizando *args e retorna o total.
    return sum(prices)


def student_data(**data):               # Recebe dados de um aluno utilizando **kwargse retorna as informações organizadas.
    return data
