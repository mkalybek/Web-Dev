if __name__ == '__main__':
    N = int(input())
    list = []
   
    for i in range(N):
        temp = input().split()
       
        if temp[0] == 'append':
            list.append(int(temp[1]))
        elif temp[0] == 'insert':
            list.insert(int(temp[1]), int(temp[2]))
        elif temp[0] == 'remove':
            list.remove(int(temp[1]))
        elif temp[0] == 'sort':
            list.sort()
        elif temp[0] == 'print':
            print(list)
        elif temp[0] == 'pop':
            list.pop()
        elif temp[0] == 'reverse':
            list.reverse()