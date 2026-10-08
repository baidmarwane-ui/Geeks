# Exercise 1: 
print("Hello world " * 4)
# Exercise 2:
result = (99**3) * 8
print(result)

# Exercise 3: 
my_name = "Marwane"
user_name = input("What's your name? ")

if user_name == my_name:
    print("We have same name")
else:
    print(
        f"Nice to meet you {user_name} my name is better than yours"
    )

# Exercise 4: 
height = int(input("Please enter your height in cm: "))

if height > 145:
    print("You are tall enough to ride")
else:
    print(
        "You need to grow more "
    )

# Exercise 5: 
my_fav_numbers = {7, 13, 42}
my_fav_numbers.add(99)
my_fav_numbers.add(100)
my_fav_numbers.remove(list(my_fav_numbers)[-1])

friend_fav_numbers = {3, 7, 21}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

# Exercise 6: Tuple (Concept)
# responseeis  Tuples are immutable in Python so values cannot be added directly to an existing tuple.

# Exercise 7: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
apple_count = basket.count("Apples")
print(f"Number of apples: {apple_count}")
basket.clear()
print(basket)

# Exercise 8: 
sandwich_orders = [
    "Tuna sandwich",
    "Pastrami sandwich",
    "Avocado sandwich",
    "Pastrami sandwich",
    "Egg sandwich",
    "Chicken sandwich",
    "Pastrami sandwich",
]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)
    print(f"I made your {current_sandwich.lower()}")

print("All orders completed!")

