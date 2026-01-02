# 1) მოცემულია რიცხვების სია: nums = [1, 2, 3, 4, 5, 6]. იპოვე ყველა უნიკალური წყვილი (a, b), სადაც: a + b == 7

# 2) მოცემულია სეტი და text ცვლადი: banned = {"bad", "ugly", "stupid"}, text = "This is a bad and ugly example". შეამოწმე: შეიცავს თუ არა ტექსტი აკრძალულ სიტყვებს, დაბეჭდე რომელი აკრძალული სიტყვაა ნაპოვნი

print("-----------------------------------")

banned = {"bad", "ugly", "stupid"}
text = "This is a bad and ugly example"

def checkBanned(arr):
  for item in arr:
    if item in text:
      return "Forbidden text found!"
    else:
      return "Everyting Clear!"

print(checkBanned(banned))

print("-----------------------------------")

# 3) მოცემულია ორი სეტი: yesterday = {"Ana", "Nika", "Luka"}, today = {"Nika", "Saba", "Luka"}. იპოვე: ვინ დაემატა დღეს, ვინ დარჩა სიაში და ვინ ამოვარდა სიიდან

print("-----------------------------------")

yesterday = {"Ana", "Nika", "Luka"}

today = {"Nika", "Saba", "Luka"}

added = set()

stayed = yesterday.intersection(today)

for i in today:
   if i in stayed:
      pass
   else:
      added = {i}

popped = yesterday.difference(today)

print(f"Added: {added}")
print(f"Stayed: {stayed}")
print(f"Popped: {popped}")

print("-----------------------------------")

# 4) მოცემულია სამი სეტი: required = {"python", "sql"}, forbidden = {"java"}, candidate = {"python", "java", "git"}. დაადგინე: აკმაყოფილებს თუ არა კანდიდატი მოთხოვნილებებს, რომელი წესები ირღვევა ან თუ ირღვევა საერთოდ.

print("-----------------------------------")

required = {"python", "sql"}
forbidden = {"java"}
candidate = {"python", "java", "git"}

missing = set()
forbid = set()

for i in required:
   if i in candidate:
      pass
   else:
      missing.add(i)

for i in candidate:
   if i in forbidden:
      forbid.add(i)
   else:
      pass

if not missing and not forbid:
   print("Clear, Everyting Perfect!")
else:
   if missing:
      print(f"Missing! {missing}")
   if forbidden:
      print(f"forbidden! {forbid}")

print("-----------------------------------")

# 5) მოცემულია სტრინგი "abccdefee" მოაშორე ის ასოები რომლებიც არის უნიკალური სტრინგში

print("-----------------------------------")

full_str = "abccdefee"
new_str = ""

for char in full_str:
   count = full_str.count(char)

   if count == 1:
      pass
   else:
      new_str += char

print(new_str)

print("-----------------------------------")

# 6) დაწერე ფუნქცია is_unique(s), რომელიც აბრუნებს True-ს თუ სტრინგში ყველა სიმბოლო უნიკალურია.

print("-----------------------------------")

string = "Hello world!"
uniques = "abcd"

def is_unique(s):
    seen = set()

    for let in s:
        if let in seen:
            return False
        else:
           seen.add(let)
    return True

print(is_unique(string))
print(is_unique(uniques))

print("-----------------------------------")

# 7) დაწერე ფუნქცია pair_sum(nums, target), რომელიც აბრუნებს ყველა უნიკალურ წყვილს (a, b) სადაც a + b == target. pair_sum([1,2,3,4,5,6], 7) დააბრუნე სეტში ტუპლების წყვილები რომლის დროსაც პირობა შესრულდება

print("-----------------------------------")

def pair_nums(nums, target):
   res = set()

   for one in nums:
      for two in nums:
         if one + two == target:
            res.add((one, two))

   return res