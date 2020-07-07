
- N個の要素からK個を選ぶ組み合わせの全列挙
  - [CPSCO2019 Session1 C - Coins](https://atcoder.jp/contests/cpsco2019-s1/tasks/cpsco2019_s1_c)

```
for(int i = N-K; i < N; ++i) a[i] = 1; // 0を(N-K)個、1をK個並べる。
do{
    // 処理
}while(next_permutation(a.begin(), a.end()));
```

