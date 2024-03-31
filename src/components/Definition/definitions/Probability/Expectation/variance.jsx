import Definition from '../../../definition'

import { MathJax } from "better-react-mathjax";

const id =  "variance"
const title = "Variance"
const body =
    <div>
        The variance of a random variable <MathJax inline>{"$X$"}</MathJax>, denoted <MathJax inline>{"$\\mathbb{V}(X)$"}</MathJax>, is how much the random variable tends to deviate from the expectation. Formally, variance is defined as <MathJax>{"$$\\mathbb{V}(X) = \\mathbb{E}\\left[\\left(X - \\mathbb{E}(X)\\right)^2\\right]$$"}</MathJax>
        where <MathJax inline>{"$\\mathbb{E}(X)$"}</MathJax> is the <a href = "./expectation">expectation</a>. This formula can also be simplified to
        <MathJax>{"$$\\displaylines{\\mathbb{V}(X) = \\mathbb{E}\\left[\\left(X - \\mathbb{E}(X)\\right)^2\\right] = \\\\ \\mathbb{E}\\left[X^2 - 2X\\mathbb{E}(X) + \\mathbb{E}(X)^2\\right] = \\\\ \\mathbb{E}(X^2) - 2\\mathbb{E}[X\\mathbb{E}(X)] + \\mathbb{E}(X)^2 = \\\\ \\mathbb{E}(X^2) + \\mathbb{E}(X)^2 - 2\\mathbb{E}(X)^2 = \\\\ \\mathbb{E}(X^2) - \\mathbb{E}(X)^2}$$"}</MathJax>
        In the discrete case, one uses the sample variance. Given samples <MathJax inline>{"$x_1, \\dots, x_N$"}</MathJax>, and their average <MathJax inline>{"$\\bar{x}$"}</MathJax>, sample variance is given by
        <MathJax>{"$$S^2 = \\frac{\\sum_{i=1}^N(x_i - \\bar{x})^2}{N-1}$$"}</MathJax>
        For <a href = "./gaussian-distribution">normal distributions</a>, it is often helpful to calculate the standard deviation which is the square root of the varaince. Formally, the standard deviation is <MathJax inline>{"$\\sigma(X) = \\sqrt{\\mathbb{V}(X)}$"}</MathJax> in the continuous case and <MathJax inline>{"$\\sigma = \\sqrt{S^2}$"}</MathJax> in the discrete case. 
    </div>

const Variance = new Definition(id, title, body)

export default Variance;