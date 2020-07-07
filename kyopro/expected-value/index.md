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



- [ABC 149 F - Surrounded Nodes](https://atcoder.jp/contests/abc149/tasks/abc149_f)

<div>
$
E[(\texttt{Sに含まれる白頂点の個数})] = \sum_{v} P((\texttt{vがSに含まれる}) \wedge (\texttt{vが白頂点}))
$
</div>

- [dwacon6th-prelims B - Fusing Slimes](https://atcoder.jp/contests/dwacon6th-prelims/tasks/dwacon6th_prelims_b)

<div>
$
\begin{eqnarray}
E[\texttt{(移動距離の総和)}] &=& \sum_i E[|x_i - x_{i+1}| * \texttt{(区間i~i+1をスライムが通過する回数)}] \\
&=& \sum_i (|x_i - x_{i+1}| * \sum_j P(\texttt{スライムjが区間i~i+1を通過する}))
\end{eqnarray}
$
</div>

- [AGC 028 B - Removing Blocks](https://atcoder.jp/contests/agc028/tasks/agc028_b)

<div>
$
\begin{eqnarray}
E[\texttt{(N回の操作のコストの合計)}] &=& \sum_i A_i * E[\texttt{(i番目のブロックと連結しているブロックが取り除かれる回数)}] \\
&=& \sum_i A_i * \sum_j P(\texttt{j番目のブロックが取り除かれるときに、j番目のブロックとi番目のブロックが連結している})
\end{eqnarray}
$
</div>


- [ABC 008 C - コイン](https://atcoder.jp/contests/abc008/tasks/abc008_3)

<div>
$
E[\texttt{(表を向いている枚数)}] = \sum_i P(\texttt{i番目のコインが表を向く})
$
</div>


- [soundhound2018-summer-qual C - Ordinary Beauty](https://atcoder.jp/contests/soundhound2018-summer-qual/tasks/soundhound2018_summer_qual_c)

<div>
$
E[\texttt{(隣合う2項の組であり、差の絶対値がdの個数)}] = \sum_i P(|A_i - A_{i+1}| = d)
$
</div>



- [Educational Codeforces Round 78 F. Cards](https://codeforces.com/contest/1278/problem/F)

<div>
$
\begin{eqnarray}
\displaystyle
E[x ^ k] &=& E[(x_1 + x_2 + \ldots + x_n) ^ k] \\
&=& \sum_{(i_1, i_2, \ldots, i_k) \in \{1, 2, \ldots, n\} ^ k} E[\prod_{p \in (i_1, i_2, \ldots, i_k)} x_{p}] \\
&=& \sum_{1 \le c \le k} \sum_{(i_1, i_2, \ldots, i_k) \in \{1, 2, \ldots, n\} ^ k, |\{i_1, i_2, \ldots, i_k\}| = c} E[\prod_{p \in (i_1, i_2, \ldots, i_k)} x_{p}] \\
&=& \sum_{1 \le c \le k} \sum_{(i_1, i_2, \ldots, i_k) \in \{1, 2, \ldots, n\} ^ k, |\{i_1, i_2, \ldots, i_k\}| = c} \left( \frac{1}{m} \right) ^ c\ & (異なるi同士でx_iは独立、かつ、E[x_i^a] (a \ge 1) は \frac{1}{m}) \\
&=& \sum_{1 \le c \le k} \binom{n}{c} * S(k, c) * c! * \left( \frac{1}{m} \right) ^ c \\
\end{eqnarray}
$
</div>


- [いろはちゃんコンテスト Day1 K - ルーレット](https://atcoder.jp/contests/iroha2019-day1/tasks/iroha2019_day1_k)

<div>
$
\begin{eqnarray}
E[(\texttt{得られる整数})] &=& E[A_1 * 10 ^ {(A_1\texttt{より下位の桁数})} + A_2 * 10 ^ {(A_2\texttt{より下位の桁数})} + \ldots + A_N * 10 ^ {(A_N\texttt{より下位の桁数})}] \\
&=& E[A_1 * 10 ^ {(A_1\texttt{より下位の桁数})}] + E[A_2 * 10 ^ {(A_2\texttt{より下位の桁数})}] + \ldots + E[A_N * 10 ^ {(A_N\texttt{より下位の桁数})}] & (期待値の線形性) \\
&=& \sum_{1 \le i \le N} E[A_i * 10 ^ {(A_i\texttt{より下位の桁数})}] \\
&=& \sum_{1 \le i \le N} E[A_i] * E[10 ^ {(A_i\texttt{より下位の桁数})}] & (A_iとA_iより下位の桁数は独立) \\
\end{eqnarray}
$
</div>



- [Codeforces Round #157 (Div. 1) D. Little Elephant and Broken Sorting](https://codeforces.com/contest/258/problem/D)
- [AGC 030 D - Inversion Sum](https://atcoder.jp/contests/agc030/tasks/agc030_d)

<div>
$
x_{i,j} =
\begin{cases}
1 & (A_i > A_j) \\
0 & (otherwise) \\
\end{cases}
$<br>
$
\begin{eqnarray}
E[(\texttt{転倒数})] &=& E[\sum_{1 \le i \lt j \le N} x_{i,j}] \\
&=& \sum_{1 \le i \lt j \le N} E[x_{i,j}] \\
&=& \sum_{1 \le i \lt j \le N} P(A_i > A_j)
\end{eqnarray}
$
</div>
