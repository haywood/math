# Introductory Real Analysis

## Metric Spaces

### Basic Concepts

#### Notes

- **Metric Space**
A set \(X\) and a function \(X \to \mathbb{R}\) such that
    1. \(\rho(x,y) = 0 \iff x = y\)
    2. Symmetry: \(\rho(x,y) = \rho(y,x)\)
    3. Triangle inequality: \(\rho(x,z) \leq \rho(x,y) + \rho(y,z)\)

- **Cauchy-Schwarz Inequality**
$$\left(\sum_{k=1}^n a_k b_k\right)^2 \leq \sum_{k=1}^n a_k^2 \sum_{k=1}^n b_k^2$$


- **Schwarz's Inequality**
$$
\left(\int_a^b x(t)y(t)\right)^2 \leq \int_a^b x^2(t)dt \int_a^b y^2(t)dt
$$

- **Minkowski's Inequality**
$$
\left(\sum_{k=1}^n|a_k + b_k|^p\right)^{1/p} \leq \left(\sum_{k=1}^n|a_k|^p\right)^{1/p} + \left(\sum_{k=1}^n|b_k|^p\right)^{1/p}
\quad
\forall n, p \in \mathbb{Z_+},\ a_k, b_k \in \mathbb{R}
$$

- **H&ouml;lder's Inequality**
$$
\sum_{k=1}^n|a_k b_k| \leq \left(\sum_{k=1}^n|a_k|^p\right)^{1/p} \left(\sum_{k=1}^n|b_k|^q\right)^{1/q}
\quad
\forall n, p, q \in \mathbb{Z_+},\ a_k, b_k \in \mathbb{R} \mid {1 \over p} + {1 \over q} = 1
$$

- **Continuous Function**
Let \(f: X \to Y\), where \(X\) and \(Y\) are metric spaces.
\(f\) is *continuous* at \(x_0 \in X\) if
$$
\forall \epsilon > 0, \exists \delta > 0 \mid \forall x \in X, \rho_X(x,x_0) < \delta \implies \rho_Y(f(x),f(x_0)) < \epsilon
$$
\(f\) is *continuous on \(X\)* if it is continuous at every point of \(X\).
Intuitively, continuity preserves relative metric relationships.

- **Homeomorphism**
A *one-to-one*, *onto*, *continuous* function between two metric spaces, with a *continuous* inverse.

- **Isometry**
A function \(f: X \to Y\), where \(X\) and \(Y\) are metric spaces, such that
$$
\rho_X(x,y) = \rho_Y(f(x),f(y)) \quad \forall x,y \in X
$$

#### Problems

1. Given a metric space \((X, \rho)\), prove that

    1. \(|\rho(x,z) - \rho(y,u)| \leq \rho(x,y) + \rho(z,u) \qquad (x,y,z,u \in X);\)
    Proof by cases:

        1.
        \(\rho(x,z) \leq \rho(x,y) + \rho(y,z)\) triangle inequality
        \(\rho(x,z) \leq \rho(x,y) + \rho(y,u) + \rho(u,z)\) applying triangle inequality to \(\rho(y,z)\)
        \(\rho(x,z) - \rho(y,u) \leq \rho(x,y) + \rho(u,z)\) subtracting \(\rho(y,u)\)

        2.
        \(\rho(y,u) \leq \rho(y,z) + \rho(z,u)\) triangle inequality
        \(\rho(y,u) \leq \rho(y,x) + \rho(x,z) + \rho(z,u)\) applying triangle inequality to \(\rho(y,z)\)
        \(\rho(y,u) - \rho(x,z) \leq \rho(y,x) + \rho(z,u)\) subtracting \(\rho(x,z)\)

    2. \(|\rho(x,z) - \rho(y,z)| \leq \rho(x,y) \qquad (x,y,z \in X);\)
    Proof by cases:

        1.
        \(\rho(x,z) \leq \rho(x,y) + \rho(y,z)\) triangle inequality
        \(\rho(x,z) - \rho(y,z) \leq \rho(x,y)\) subtracting \(\rho(y,z)\)

        2.
        \(\rho(y,z) \leq \rho(x,y) + \rho(x,z)\) triangle inequality
        \(\rho(y,z) - \rho(x,z) \leq \rho(x,y)\) subtracting \(\rho(x,z)\)
