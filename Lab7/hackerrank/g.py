n = int(input())

words = {}

for i in range(n):
    temp = input()
   
    if words.get(temp) is None:
        words[temp] = 1
    else:
        words[temp] += 1

print(len(words))

for value in words.values():
    print(value, end=' ')