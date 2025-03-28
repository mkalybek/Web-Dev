def make_chocolate(small, big, goal):
    ulken_kerek = goal // 5
   
    if ulken_kerek <= big:
        if goal - ulken_kerek * 5 <= small:
            return goal - ulken_kerek * 5
    else:
        if goal - big * 5 <= small:
            return goal - big * 5
    return -1