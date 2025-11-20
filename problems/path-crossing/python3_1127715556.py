class Solution:
    def isPathCrossing(self, path: str) -> bool:
        points_set = {(0,0)} ## set wherein we keep visited points
        letter_values = {'N':1, 'S': -1, 'E': 1, 'W': -1}
        starting_point = [0,0]

        for letter in path:
            if letter == 'N' or letter == 'S':
                starting_point[0] += letter_values.get(letter)
            elif letter == 'E' or  letter == 'W':
                starting_point[1] += letter_values.get(letter)
            if (starting_point[0],starting_point[1]) in points_set:
                return True
            else:
                points_set.add((starting_point[0],starting_point[1]))
        return False
            