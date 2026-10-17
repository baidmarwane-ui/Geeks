# Ex 1
class PrintList():

    def __init__(self, my_list):
        self.my_list = my_list

    def __repr__(self):
        return str(self.my_list)


print_list_instance = PrintList(["a", "b", "c"])
print(print_list_instance.__repr__())

# Output
# ["a", "b", "c"]


# Ex 2



my_list = [2, 3, 1, 2, "four", 42, 1, 5, 3, "imanumber"]

total = 0

for item in my_list:
    try:
        item = int(item)
        total += item
    except:
        pass

print(f"Total: {total}")
    



# Ex 3



    import sys
sys.path.insert(0, r'C:\Users\LENOVO\repos\geeks-institute\Week2\Day1\Exercises\ExercisesXp')
from Exercise2 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *other_dogs):
        dog_names = ", ".join(other_dogs)
        print(f"{dog_names} all play together.")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead",
            ]
            return random.choice(tricks)
        else:
            print("this dog is not trained yet.")

dog = PetDog("Rex", 3, 30)
dog.train()
print(dog.trained)
dog.play("Max", "Alex", "Linda")
print(dog.do_a_trick())