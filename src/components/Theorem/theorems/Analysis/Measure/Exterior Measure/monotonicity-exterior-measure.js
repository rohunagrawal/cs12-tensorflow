import Theorem from '../../../../theorem'

import { MathJax } from "better-react-mathjax";

const id =  "monotonicity-exterior-measure"
const title = "Monotonicity of Exterior Measure"
const theorem = <span>
    If <MathJax inline>{"$E_1 \\subset E_2$"}</MathJax> then <MathJax inline>{"$m_*(E_1) \\leq m_*(E_2)$"}</MathJax>

</span>

const proof = <span></span>

const MonotonicityExteriorMeasure = new Theorem(id, title, theorem, proof)

export default MonotonicityExteriorMeasure;