def solution(absolutes, signs):
    total = 0
    for i in range(len(signs)):
        if signs[i] == True:
            total += absolutes[i] *  1
        else:
            total += absolutes[i] * -1
    return total



# zip을 사용한 풀이
def solution(absolutes, signs):
    return sum(absolutes if sign else -absolutes for absolutes, sign in zip(absolutes, signs))