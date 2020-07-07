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


- Cayley's formula
  - n個のラベル付き頂点からなる木の個数は$n^{n-2}$個
  - n個のラベル付き頂点からなる、k個の連結成分からなる森の個数は$kn^{n-k-1}$個
  - [Cayley's formula](https://en.wikipedia.org/wiki/Cayley%27s_formula)
  - [Codeforces Round #539 (Div. 2) F. Sasha and Interesting Fact from Graph Theory](https://codeforces.com/contest/1113/problem/F)
  
  
- 森の木の個数(連結成分の個数) = (頂点数) - (辺数)
  - [AGC015 C - Nuske vs Phantom Thnook](https://atcoder.jp/contests/agc015/tasks/agc015_c)
  - [Codeforces Round #553 (Div. 2) E. Number of Components](https://codeforces.com/contest/1151/problem/E)
  - [ABC173 F - Intervals on Tree](https://atcoder.jp/contests/abc173/tasks/abc173_f)


- [Widest path problem](https://en.wikipedia.org/wiki/Widest_path_problem) / Minimax path problem
  - Widest path problem : パスに含まれる辺の重みの最小値を最大化する問題
  - Minimax path problem : パスに含まれる辺の重みの最大値を最小化する問題
  - [Codeforces Round #600 F - Cheap Robot](https://codeforces.com/contest/1253/problem/F) (Minimax path problem)
  
  
