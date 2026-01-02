
first_tuple = (1,2,3,4,5)
second_tuple = (6,7,8,9,10)

third_element = first_tuple[2]

print(first_tuple)
print(first_tuple[0])
print(first_tuple[4])
print(third_element)

print(first_tuple + second_tuple)
print(type(first_tuple))
print(len(second_tuple))

try:
  print(first_tuple + (5)) # Error | int + tuple
except:
  print("Error! Not valuable adding")



work_tuple = ("Davit", "Gabrieli", "Aleqsandre", "Nikolozi", "Luka", "Devi")

# Classwork 1

def change_value(workness):
  for i in list(workness):
    if i.lower()[0] == "d":
      ind = workness.index(i)
      list(workness)[ind] = "Change"
  
  return tuple(workness)

print(change_value(work_tuple))

# Classwork 2

def getSort(tuples):
  moment = 0
  prev = 0
  new_tuple = []
  for i in tuples:
    moment = len(i)

  return 0

print(getSort(work_tuple))