# Challenge 1
number =int(input('give me a number?:'))
length=int(input('give me a length?:'))
list=[number]
for i in range(1, length):

    list.append(number + list[-1])
print(f'number: {number} - length {length} ➞ {list}')


# Challenge 2
word = input("Enter a word: ")
result = ""

for i in range(len(word)):
    if word[i] != word[i - 1]:
        result += word[i]

print(result)