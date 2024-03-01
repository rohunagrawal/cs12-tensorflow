import Theorem from '../../../../theorem'

import { MathJax } from "better-react-mathjax";

const id =  "smallest-covering-exterior-measure"
const title = "Exterior measure measures the smallest covering"
const theorem = <span>
    If <MathJax inline>{"$E \\subset \\mathbb{R}^d$"}</MathJax>, then <MathJax inline>{"$m_*(E) = \\inf m_*(\\mathcal{O})$"}</MathJax> with <MathJax inline>{"$E \\subset \\mathcal{O}$"}</MathJax> and <MathJax inline>{"$\\mathcal{O}$"}</MathJax> <a href="../definition/open-and-closed">open</a>.

</span>

const proof = <span></span>

const SmallestCoveringExteriorMeasure = new Theorem(id, title, theorem, proof)

export default SmallestCoveringExteriorMeasure;