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


- $\displaystyle \sum_{0 \le j \le i} j \binom{i}{j} = i * 2 ^ {i-1}$
  - [OEIS A001787](https://oeis.org/A001787)


- $\displaystyle \sum_{0 \le j \le i} (j+1) \binom{i}{j} = (i+2) * 2 ^ {i-1}$  
  $\displaystyle \sum_{1 \le j \le i} j \binom{i-1}{j-1} = (i+1) * 2 ^ {i-2}$
  - [OEIS A001792](https://oeis.org/A001792)
  - [ABC150 E - Change a Little Bit](https://atcoder.jp/contests/abc150/tasks/abc150_e)
  
