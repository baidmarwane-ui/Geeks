
import random



# Exercise 1: 
 
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = dict(zip(keys, values))

print(result)



# Exercise 2:

family = {
    "rick": 43,
    "beth": 13,
    "morty": 5,
    "summer": 8
}

total_cost = 0

for name, age in family.items():
    if age < 3:
        price = 0
    elif age <= 12:
        price = 10
    else:
        price = 15

    print(f"{name} has to pay ${price}")
    total_cost += price

print(f"Total cost: ${total_cost}")

# Exercise 3: 
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}
brand["number_stores"] = 2
print("Zara's clients include:", ", ".join(brand["type_of_clothes"]))

brand["country_creation"] = "Spain"
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
del brand["creation_date"]
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print(brand.keys())
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}
brand.update(more_on_zara)
print(brand["number_stores"])

# Exercise 4: 


def describe_city(city, country="France"):
    print(f"{city} is in {country}")

describe_city("Paris")
describe_city("Reykjavik", "Iceland")
describe_city("Lyon")
# Exercise 5: 
number = int(input("Enter a number between 1 and 100: "))


def check_number(number):
    random_number = random.randint(1, 100)

    if number == random_number:
        print(" Both numbers are the same.")
    else:
        print("The numbers are different.")
        print(f"Your number: {number}")
        print(f"Random number: {random_number}")




# Exercise 6:


def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")
make_shirt("medium", "Hello!")
make_shirt()
make_shirt("medium")
make_shirt("small", "Keep learning Python!")
make_shirt(size="large", text="Python is awesome")
# Exercise 7: 


def get_random_temp(season):
    season = season.lower()

    if season == "winter":
        return round(random.uniform(-10, 16), 1)
    elif season == "spring":
        return round(random.uniform(0, 25), 1)
    elif season == "summer":
        return round(random.uniform(16, 40), 1)
    elif season in ("fall"):
        return round(random(0, 25), 1)
    else:
        return("Invalid season")


def main():
    month = int(input("Enter a month (1-12): "))
    if month in (12, 1, 2):
        season = "winter"
    elif month in (3, 4, 5):
        season = "spring"
    elif month in (6, 7, 8):
        season = "summer"
    else:
        season = "fall"

    
# Exercise 8: 



data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def ask_questions():
    correct = 0
    incorrect = 0
    wrong_answers = []

    for item in data:
        print(item["question"])
        user_answer = input("Your answer: ").strip()

        if user_answer == item["answer"]:
            print("Correct!")
            correct += 1
        else:
            print("Incorrect!")
            incorrect += 1

            wrong_answers.append({
                "question": item["question"],
                "your_answer": user_answer,
                "correct_answer": item["answer"]
            })

    return correct, incorrect, wrong_answers


def show_results(correct, incorrect, wrong_answers):
    print("Quiz Results ")
    print(f"Correct answers: {correct}")
    print(f"Incorrect answers: {incorrect}")

    if wrong_answers:
        print("Questions you answered incorrectly:")

        for item in wrong_answers:
            print(f"Question: {item['question']}")
            print(f"Your answer: {item['your_answer']}")
            print(f"Correct answer: {item['correct_answer']}")


def main():
    while True:
        correct, incorrect, wrong_answers = ask_questions()
        show_results(correct, incorrect, wrong_answers)

        if incorrect > 3:
            play_again = input(
                "You got more than 3 answers wrong. "
                "Would you like to play again? (yes/no): "
            ).strip()

            if play_again in ("yes", "y"):
                print("Starting a new quiz!")
            else:
                print("Thanks for playing!")
                break
        else:
            print("Well done! Thanks for playing!")
            break


main()