# Ex 1

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

bengal = Bengal("lina", 3)
chartreux = Chartreux("alex", 3)
siamese = Siamese("mimi", 3)

all_cats = [bengal, chartreux, siamese]

sara_pets = Pets(all_cats)
sara_pets.walk()



# Ex 2





class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 2

    def fight(self, other_dog):
        winner = None
        if (self.run_speed() * self.weight) > (other_dog.run_speed() * other_dog.weight):
            return f"Winner is {self.name}"
        else:
            return f"Winner is {other_dog.name}"

if __name__ == "__main__":
    dog1 = Dog("Alex", 4, 40)
    dog2 = Dog("Tom", 3, 20)
    dog3 = Dog("Rex", 2, 35)

    print(dog1.bark())
    print(dog2.bark())
    print(dog3.bark())

    print(dog1.run_speed())
    print(dog2.run_speed())
    print(dog3.run_speed())

    print(dog1.fight(dog2))
    print(dog2.fight(dog3))
    print(dog3.fight(dog1))



# Ex 3





class Family:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print("Congratulations! new baby joined the family!!")

    def is_18(self, name):
        for member in self.members:
            if member["name"] == name:
                if member["age"] > 18:
                    return True
        return False

    def family_presentation(self):
        print(f"{self.last_name}'s family members:")
        for member in self.members:
            print("-------------------")
            for key, detail in member.items():
                print(f"{key}: {detail}")


if __name__ == "__main__":
    members = [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ]

    family = Family(members, "Amraoui")

    family.born(name="Tom", age=0, gender="male", is_child=True)

    print(family.is_18("Tom"))
    print(family.is_18("Sarah"))

    family.family_presentation()


# Ex 4



    from Exercise3 import Family

class TheIncredibles(Family):
    def __init__(self, members, last_name):
        super().__init__(members, last_name)

    def use_power(self, name):
        if self.is_18(name):
            for member in self.members:
                if member["name"] == name:
                    print(f"{name}'s power: {member["power"]}")
                else:
                    print("you are not old enough to use your power.")

    def incredible_presentation(self):
        print("\n\n******Here is our powerful family******")
        super().family_presentation()

superMembers = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]

superFamily = TheIncredibles(superMembers, "fistjerald")
superFamily.incredible_presentation()
superFamily.born(name="Tom", age=0, gender="male", is_child=True, power="Unknown Power", incredible_name="Unknown")
superFamily.incredible_presentation()