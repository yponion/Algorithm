from collections import Counter

def solution(participant, completion):
    res = Counter(participant) - Counter(completion)
    return next(iter(res))