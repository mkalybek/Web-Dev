import itertools

text = input()

result = []

for k, g in itertools.groupby(text):
    result.append(list(g))

for res in result:
    print(f'({len(res)}, {res[0]})', end=' ')