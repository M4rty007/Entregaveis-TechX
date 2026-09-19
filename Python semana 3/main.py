import calculadora as c
a = int(input("value a: "))           
o = input("operator: ")                   
b = int(input("value b: "))              

if o == "+":                             
    print(c.add(a, b))
elif o == "-":                             
    print(c.subtarct(a, b))
elif o == "*":                           
    print(c.multiply(a, b))
elif o == "/":                             
    print(c.devide(a, b))
else:                                      
    print("an valid operator please!!!")
