def solution(d, budget):
    if sum(d) == budget:
        return len(d)
    else:
        d.sort()
        while budget < sum(d):
            d.remove(d[-1])
        return len(d)