def front_back(str):
  if len(str) <= 1:
    return str
   
  middle = len(str) - 1
  return (str[-1] + str[1:middle] + str[0])