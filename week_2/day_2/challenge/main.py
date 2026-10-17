from text_analyzer import TextAnalyzer

text = "Python is fun and Python is powerful"

analyzer = TextAnalyzer(text)

print(analyzer)
print(len(analyzer))
print(analyzer.word_count())
print(analyzer.count_word("Python"))

# test exceptions
# print(analyzer.count_word(""))
# analyzer = TextAnalyzer("")