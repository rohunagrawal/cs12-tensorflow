import Definition from '../../../definition'
import TheoremBlock from '../../../../utils/theorem-block';

import { MathJax } from "better-react-mathjax";

const id =  "metric-space"
const title = "Metric Space"
const body =
    <div>
        A Metric Space is a set <MathJax inline>{"$X$"}</MathJax> with an associated metric <MathJax inline>{"$\\rho: X \\times X \\to \\mathbb{R}$"}</MathJax> that informally defines the distance between points in <MathJax inline>{"$X$"}</MathJax>. Given two points <MathJax inline>{"$p, q \\in X$"}</MathJax>. The metric <MathJax inline>{"$\\rho$"}</MathJax> must hold the following properties:
        <ol>
            <li>Distance from a point to itself is zero: <MathJax inline>{"$\\rho(p, p) = 0$"}</MathJax></li>
            <li>(Nonnegativity) Distance between two points is positive: <MathJax inline>{"$p \\neq q$"}</MathJax>, <MathJax inline>{"$\\rho(p, q) > 0$"}</MathJax></li>
            <li>(Symmetric) Distance between from one point to another is the same back to the first point: <MathJax inline>{"$\\rho(p, q) = \\rho(q, p)$"}</MathJax></li>
            <li>(<a href = "../theorem/triangle-ineqality">Triangle Inequality</a>): <MathJax inline>{"$\\rho(p, r) \\leq \\rho(p, q) + \\rho(q, r), \\forall r \\in X$"}</MathJax></li>
        </ol> 

        <TheoremBlock title="Example">The most common metric space is a Euclidean space with the Euclidean norm (also known as the <a href="./l2-norm"><MathJax inline>{"$L^2$"}</MathJax> norm</a>). Formally a Euclidean space is a metric space of set <MathJax inline>{"$X \\subseteq \\mathbb{R}^d$"}</MathJax> with metric <MathJax inline>{"$\\rho(x, y) = ||x - y||_2 = \\sqrt{(x_1 - y_1)^2 + (x_2 - y_2)^2 + \\dots + (x_d - y_d)^2}$"}</MathJax></TheoremBlock>
    </div>

const MetricSpace = new Definition(id, title, body)

export default MetricSpace;