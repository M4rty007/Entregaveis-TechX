correct_passw = "1234"
attempts = 0

while attempts < 3:
    passw = input("Digite a senha: ")
    attempts += 1

    if passw == correct_passw:
        print("Acesso permitido!")
        break
    else:
        print("Senha incorreta!")

if attempts == 3 and passw != correct_passw:
    print("Acesso bloqueado!")