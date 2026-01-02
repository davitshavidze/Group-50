

# 1) მოცემულია სია: nums = [10, 20, 30], მომხმარებელს შეაყვანინე ინდექსი და დაბეჭდე შესაბამისი ელემენტი. თუ ინდექსი არ არის რიცხვი გამოიტანე ერორი, თუ ინდექსი სცდება სიის ზომას გამოიტანე ერორი, თუ ყველაფერი სწორია დაბეჭდე ელემენტი, ნებისმიერ შემთხვევაში დაბეჭდე "შემოწმება დასრულდა"

nums = [10, 20, 30]

try:
    ind = int(input("Enter an index: "))
    print(nums[ind])
except ValueError:
    print("Value must be Integer type value!")
except IndexError:
    print("Index must be in range of indexing!")
finally:
    print("Programm End!")


# 2) მომხმარებელს შეაყვანინე ასაკი. თუ ასაკი არ არის რიცხვი გამოიტანე ერორი, თუ ასაკი უარყოფითია გამოიტანე შეცდომა (ValueError), თუ ყველაფერი სწორია დაბეჭდე "ასაკი მიღებულია".

try:
    age = int(input("Enter your age: "))

    if age < 0:
        raise ValueError

    print("Age Accepted!")
except ValueError:
    print("Age must be not negative number!")
finally:
    print("Programm End!")


#3) მომხმარებელს შემოაყვანინე პაროლი, პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს, უნდა შეიცავდეს რიცხვს, არ უნდა შეიცავდეს space,წესის დარღვევა -> valueError, წარმატება -> "პაროლი მიღებულია", საბოლოოდ გამოიტანე "შემოწმება დასრულებულია"

try:
  password = input("Enter password:")

  if len(password) < 8:
      raise ValueError
  
  if " " in password:
      raise ValueError

  print(f"{password} accepted")
except ValueError:
    print("Value Error Occured! Length myst be 8 charachtrers or not include spaces")
finally:
    print("Programm End!")


# 4) მომხმარებელს შემოაყვანინე 5 მნიშვნელობა, რომელსაც დაამატებ სიაში. თუ შემოყვანილი მნიშვნელობა არ არის რიცხვი დაბეჭდე ერორი, თუ რიცხვი უარყოფითია -> valueError, თუ ყველაფერი კარგადაა გამოითვალე სიაში მყოფი რიცხვების საშუალო არითმეტიკული, საბოლოოდ დაბეჭდე "რიცხვების დამუშავება დასრულებულია"

try:
  arr = []

  for i in range(5):
      inp = int(input("Enter a value: "))
      
      if inp < 0:
          raise ValueError

      arr.append(inp)

  print(sum(arr) / len(arr))
except ValueError:
    print("Value Must be Integer and more than 0!")
finally:
    print("Programm End!")
