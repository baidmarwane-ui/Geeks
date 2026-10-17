class TextAnalyzer:
    def __init__(self, text):
        if text == "":
            raise ValueError("Text can not be empty!")
        else:
            self.text = text

    def __str__(self):
        length = len(self.text.split())
        return f"{self.__class__.__name__} object with {length} words"

    def __len__(self):
        length = len(self.text)
        return length

    def word_count(self):
        return len(self.text.split())

    def count_word(self, word):
        if word != "":
            word_list = self.text.split()
            count = 0
            for value in word_list:
                if value == word:
                    count += 1

            return count
        else:
            raise ValueError("you can't search for an empty string")

# analyzer = TextAnalyzer("Python is fun.")
# print(analyzer)

# analyzer = TextAnalyzer("Python")
# print(len(analyzer))

# analyzer = TextAnalyzer("Python is fun")
# print(analyzer.word_count())

# analyzer = TextAnalyzer("Python is fun and Python is powerful")
# print(analyzer.count_word("Python"))

# analyzer = TextAnalyzer("Python is fun.")
# print(analyzer.count_word(""))