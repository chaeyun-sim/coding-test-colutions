def solution(A, B):
    return (B * 2).find(A)
    # B를 두번 등장시켰을 때, A가 중간에 몇번 나오는지가 답이 된다.
    # 만약 apple의 반대인 elppa를 두번 사용한 elppaelppa 같은 경우에는 내부에 apple의 값이 없기 때문에 -1를 반환한다.