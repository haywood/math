# Introduction to Analysis

## Metric Spaces

**PROBLEMS**

1. Verify that the following are metric spaces:

    1. all \(n\)-tuples of real numbers, with
    $$d((x_1,...,x_n), (y_1,...,y_n)) = \sum_{i=1}^n|x_i-y_i|$$

        **Proof**
        Let \(x,y,z\) \in \mathbb{R}^n\).
            1. \(d(x,y) = 0 \iff x = y\)
            $$\begin{align}
            d(x,y) &= \sum_{i=1}^n|x_i-y_i| \\\\
                &= \sum_{i=1} 0 \\\\
                &= 0
            \end{align}$$
            2. \(d(x,y) = d(y,x)\)
            $$\begin{align}
            d(x,y) &= \sum_{i=1}^n|x_i-y_i| \\\\
                   &= \sum_{i=1}^n|y_i-x_i| \\\\
                   &= d(y,x)
            \end{align}$$
            3. \(d(x,z) \leq d(x,y) + d(y,z)\)
            Assume that \(d(x,z) > d(x,y) + d(y,z)\)
            Then
            $$\begin{align}
            \sum_{i=1}^n|x_i-z_i| &> \sum_{i=1}^n|x_i-y_i| + \sum_{i=1}^n|y_i-z_i| \\\\
            \sum_{i=1}^n|x_i-z_i| &> \sum_{i=1}^n|x_i-y_i| + |y_i-z_i| \\\\
            0 &> \sum_{i=1}^n|x_i-y_i| + |y_i-z_i| - \sum_{i=1}^n|x_i-z_i| \\\\
            0 &> \sum_{i=1}^n|x_i-y_i| + |y_i-z_i| - |x_i-z_i|
            \end{align}$$
            By applying the triangle inequality on \(\mathbb{R}\), each term in the last summation is \(\geq 0\).
            This implies that the entire summation is \(\geq 0\), which would be a contradiction.

    2. all bounded infinite sequences \(x=(x_1,x_2,x_3,...)\) of elements of \(\mathbb{R}\), with \(d(x,y) = \sup \{|x_1-y_1|,|x_2-y_2|,|x_3-y_3|,...\}\).
