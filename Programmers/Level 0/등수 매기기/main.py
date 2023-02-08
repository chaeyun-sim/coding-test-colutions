def solution(score):
    result = [sum(scores) / len(scores) for scores in score]  # 각 학생마다 평균 구하기
    sorted_result = sorted(result, reverse=True) # 큰 수부터 정렬하기
    return [sorted_result.index(i) + 1 for i in result]  # 정렬된 배열의 값의 인덱스(즉 등급)을 순서대로 정렬함