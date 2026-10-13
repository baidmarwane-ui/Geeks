# Exercise 1: 

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


cat1 = Cat("Milo", 3)
cat2 = Cat("Luna", 7)
cat3 = Cat("Oliver", 5)

def find_oldest_cat(cats):
    oldest_cat = cats[0]

    for cat in cats:
        if cat.age > oldest_cat.age:
            oldest_cat = cat

    return oldest_cat


cats = [cat1, cat2, cat3]

oldest = find_oldest_cat(cats)
print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")


# Exercise 2:


class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")


davids_dog = Dog("Rex", 50)

print("David's dog:")
print("Name:", davids_dog.name)
print("Height:", davids_dog.height, "cm")
davids_dog.bark()
davids_dog.jump()


sarahs_dog = Dog("Teacup", 20)

print("Sarah's dog:")
print("Name:", sarahs_dog.name)
print("Height:", sarahs_dog.height, "cm")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(davids_dog.name, "is the bigger dog.")
elif sarahs_dog.height > davids_dog.height:
    print(sarahs_dog.name, "is the bigger dog.")
else:
    print("Both dogs are the same height.")


# Exercise 3: 


class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song([
    "There's a lady who's sure",
    "all that glitters is gold",
    "and she's buying a stairway to heaven"
])

stairway.sing_me_a_song()

# Exercise 4: 



class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} was added to the zoo.")
        else:
            print(f"{new_animal} is already in the zoo.")

    def get_animals(self):
        print(f"Animals in {self.name}:")
        for animal in self.animals:
            print(animal)
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} was sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")
    def sort_animals(self):
        groups = {}

        for animal in sorted(self.animals, key=str.lower):
            first_letter = animal[0].upper()

            if first_letter not in groups:
                groups[first_letter] = []

            groups[first_letter].append(animal)

        return groups
    def get_groups(self):
        groups = self.sort_animals()

        print("\nAnimal groups:")

        for letter, animals in groups.items():
            print(f"{letter}: {animals}")


new_york_zoo = Zoo("New York Zoo")
new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Eel")
new_york_zoo.add_animal("Emu")
new_york_zoo.add_animal("Bear")

new_york_zoo.get_animals()

new_york_zoo.sell_animal("Giraffe")
new_york_zoo.get_animals()

new_york_zoo.get_groups()
