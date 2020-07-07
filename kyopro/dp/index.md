<script>
    MathJax = {
         chtml: {
             matchFontHeight: false
         },
         tex: {
             inlineMath: [['$', '$']]
         }
     };
</script>

<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>


### $\displaystyle \sum_{x_1 + x_2 + \ldots + x_K = N} \prod_{1 \le i \le K} f(i, x_i)$

#### dp遷移
dp[i+1][j+x] += dp[i][j] * f(i, x) <br>
ans. dp[K][N]

#### 時間計算量
f(i, x) の計算量を$O(\alpha)$として$O(KN^2 \alpha)$

#### 類題

- [ARC059 E - キャンディーとN人の子供 / Children and Candies](https://atcoder.jp/contests/arc059/tasks/arc059_c)

<div>
    部分点解法 <a href="https://atcoder.jp/contests/arc059/submissions/7369179" target="_blank">submission</a><br>
    $\displaystyle \sum_{a_1 + a_2 + \ldots + a_N = C} \prod_{1 \le i \le N} x_i ^ {a_i}$
</div>

<div>
    満点解法 <a href="https://atcoder.jp/contests/arc059/submissions/7369310" target="_blank">submission</a><br>
    $\displaystyle \sum_{a_1 + a_2 + \ldots + a_N = C} \prod_{1 \le i \le N} \sum_{A_i \le x \le B_i} x ^ {a_i}$
</div>


- [dwacon6th-prelims C - Cookie Distribution](https://atcoder.jp/contests/dwacon6th-prelims/tasks/dwacon6th_prelims_c) [submission](https://atcoder.jp/contests/dwacon6th-prelims/submissions/9433270)

[kyopro_friendsさんの解説](https://twitter.com/kyopro_friends/status/1216010788063735808)

[けんちょんさんの解説](http://drken1215.hatenablog.com/entry/2020/01/12/011700)

$\displaystyle N! \sum_{x_1 + x_2 + \ldots + x_K = N} \prod_{1 \le i \le K} \frac{1}{x_i !} \binom{N-x_i}{a_i-x_i}$
