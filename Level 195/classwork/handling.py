inp = int(input("Enter number: "))
inp_2 = int(input("Enter nmumber 2: "))

try:
  print(inp / inp_2)
except TypeError:
  print("Type Error Found!")
except ZeroDivisionError:
  print("Division with 0!")
except ValueError:
  print("Value Error Found!")
finally:
  print("Programm End!")


