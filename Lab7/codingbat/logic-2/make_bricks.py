def make_bricks(small, big, goal):
    ulken_kerek = goal // 5
   
    if ulken_kerek <= big:
        if goal - ulken_kerek * 5 <= small:
            return True
    else:
        if goal - big * 5 <= small:
            return True
    return False