inicial_value = int(input("Tempo em segundos: "))

hours = inicial_value / 3600
restM = inicial_value - 5 * 3600
minutes = restM / 60
seconds = restM % 60

print(f"{round(hours, 0)} horas, {round(minutes, 0)} minutos, {round(seconds, 0)} segundos")