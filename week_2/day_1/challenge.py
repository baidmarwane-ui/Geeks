class Pagination:
    def __init__(self, items=None, page_size=10):
        if items is None:
            self.items = []
        else:
            self.items = items
        self.page_size = page_size
        self.current_idx = 0
        self.total_pages = (len(items) + page_size - 1) // page_size

    def get_visible_items(self):
        end = self.page_size * (self.current_idx + 1)
        if self.current_idx == 0:
            start = 0
        else:
            start = end - self.page_size
        return self.items[start:end]

    def go_to_page(self, page_num):
        if page_num > self.total_pages or page_num <= 0:
            print(f"you are out of range, please enter a num between 1 and {self.total_pages}")
        else:
            self.current_idx = page_num - 1

    def first_page(self):
        self.current_idx = 1
        return self

    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx < self.total_pages:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 1:
            self.current_idx -= 1
        return self

    def display_current_page(self):
        for item in self.get_visible_items():
            print(item)


alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(items=alphabetList, page_size=4)

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

p.go_to_page(7)
print(p.current_idx + 1)
# Output: 7

p.go_to_page(0)
# Expected behavior:
# Prints an invalid page message and keeps the current page unchanged.