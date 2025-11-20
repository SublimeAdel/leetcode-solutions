#include <set>
#include <unordered_map>
using namespace std;

struct Point {
    int x;
    int y;

    bool operator<(const Point& other) const {
        return (x < other.x) || ((x == other.x) && (y < other.y));
    }
};

class Solution {
public:
    bool isPathCrossing(string path) {
        set<Point> point_set;
        Point Start = {0, 0};
        point_set.insert(Start);
        int i = 0;
        while (path[i] != '\0') {
            switch (path[i]) {
            case 'N':
                Start.y++;
                break;
            case 'S':
                Start.y--;
                break;
            case 'E':
                Start.x++;
                break;
            case 'W':
                Start.x--;
                break;
            }
            if (point_set.find(Start) != point_set.end()) {
                return true;
            }
            point_set.insert(Start);
            i++;
        }
        return false;
    }
};