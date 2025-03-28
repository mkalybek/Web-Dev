n, m = map(int, input().split())

arr = list(map(int, input().split()))

set_a = set(map(int, input().split()))
set_b = set(map(int, input().split()))

cnt = 0

for num in arr:
    if set_a.intersection({num}):
        cnt += 1
    if set_b.intersection({num}):
        cnt -= 1

print(cnt)