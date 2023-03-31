def solution(dots):
    x = [dots[i][0] for i in range(len(dots))]  # x 좌표의 값들만 가져와서 중복을 제거한다.
    y = [dots[i][1] for i in range(len(dots))]  # y 좌표의 값들만 가져와서 중복을 제거한다.
    x = list(set(x))
    y = list(set(y))
    return (max(x) - min(x)) * (max(y) - min(y)) 
    # 가장 큰 x좌표에서 가장 작은 x좌표를 빼서 x의 길이를 구한다.
    # 가장 큰 y좌표에서 가장 작은 y좌표를 빼서 y의 길이를 구한다.