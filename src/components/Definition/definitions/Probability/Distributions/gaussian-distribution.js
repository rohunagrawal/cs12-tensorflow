import Definition from '../../../definition'

import { MathJax } from "better-react-mathjax";

const id =  "gaussian-distribution"
const title = "Gaussian Distribution"
const body =
    <div>
        A Gaussian (Normal) Distribution is a continuous probability distribution. 
        A Gaussian random variable <MathJax inline>{"$X \\sim \\mathcal{N}(\\mu, \\sigma^2)$"}</MathJax> with mean <MathJax inline>{"$\\mu$"}</MathJax> and variance <MathJax inline>{"$\\sigma^2$"}</MathJax> has the probability density function
        <MathJax>{"$$f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x - \\mu}{\\sigma}\\right)^2}$$"}</MathJax>

        Naturally, the <a href="./expectation">expectation</a> is <MathJax inline>{"$\\mathbb{E}(X) = \\mu$"}</MathJax> and the <a href="./variance">variance</a> is <MathJax inline>{"$\\mathbb{V}(X) = \\sigma^2$"}</MathJax>
    </div>

const GaussianDistribution = new Definition(id, title, body)

export default GaussianDistribution;