# My actual solution at the live interview. Reading and coding this problem took ~50 minutes (1 hour time limit), with 2 interviewers.

# Suppose that you are part of a team that breaks electric locks. The way the team
# operates is that there is a spy that overlooks what pin is introduced into the lock’s
# keyboard and reports it to you. Unfortunately he is not completely sure that he saw
# the correct combination and all adjacent (vertical and horizontal) keys of a key could
# be the correct key.

# Given a keyboard and a reported pin, your task is to generate all possible variations
# of the observed pin. The pin can have any length.

# Example:

# Keyboard = [
# 	[1, 2, 3]
# 	[4, 5, 6]
# 	[7, 8, 9]
# 	[*, 0, #]
# ]

# Reported_pin = “13”

# Possible variations = [“13”, “23”, “43”, “12”, “22”, “42”, “16”, “26”, “46”]

# Explanation:

# Adjacent keys of 1 are 2 and 4 and adjacent keys of 3 are 2 and 6

from typing import List

"""
5 => 2,4,6,8,5
6 => 3,5,9,6
"""

Keyboard = [
	['1', '2', '3'],
	['4', '5', '6'],
	['7', '8', '9'],
	['*', '0', '#']
]

Keyboard2 = [
	['q', 'w', 'e'],
	['a', 's', 'd'],
	['z', 'x', 'c'],
	['*', '0', '#']
]

"""

[56]

"""

def getNeighbours(keyboardLayout:List[List[str]]):
    charsDict = {}
    length1 = len(keyboardLayout)
    length2 = len(keyboardLayout[0])
    for i in range(length1):
        for j in range(length2):
            currentChar = keyboardLayout[i][j]
            charsDict[currentChar] = [currentChar]
            neighboursPositions = [(i+1, j), (i-1, j), (i, j+1), (i, j-1)]
            for pos in neighboursPositions:
                x, y = pos
                if (0 <= x < length1) and (0 <= y < length2):
                    charsDict[currentChar].append(keyboardLayout[x][y])

    return  charsDict



def convertPinToList(pin: str, keyboardLayout):
    charSets = []
    charsDict = getNeighbours(keyboardLayout) # get all disc
    for char in pin:
        neighbours = charsDict[char]
        charSets.append(neighbours)

    return charSets

print(convertPinToList('12', Keyboard))

# This was my first working solution. 

def cartezianProduct(listOfChars: List[List[str]]):

    outPut = [""]
    for chars in listOfChars:
        temp = []
        for combination in outPut:
            for char in chars:
                temp.append(combination + char)

        outPut = temp[:]

    return outPut

# They asked to compute this algorithm's complexity. In this case, assuming that the number of neighbours for each character in the list of characters is n1, n2, ... n then the time complexity is Theta(n1+1 * n2+1 * ... * n+1)

# In terms of memory, at each iteration temp list is built over the outPut list. This raises the question if the cartezian product could be done without the temp list. During the interview, they asked for a solution that optimizez memory, and I came up with the following algorithm:

def cartezianProductQueue(listOfChars:  List[List[str]]):

    output = [""]
    currentElement = ""
    while(len(output[0]) < len(listOfChars)):
        currentElement = output.pop(0)
        currentLenght = len(currentElement)
        toAdd = listOfChars[currentLenght]
        for char in toAdd:
            output.append(currentElement + char)

    return output

print(cartezianProductQueue(convertPinToList('12', Keyboard)))

