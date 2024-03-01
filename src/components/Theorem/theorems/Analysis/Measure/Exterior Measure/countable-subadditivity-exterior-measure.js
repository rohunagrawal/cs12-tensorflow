import Theorem from '../../../../theorem'

import { MathJax } from "better-react-mathjax";

const id =  "countable-subadditivity-exterior-measure"
const title = "Countable Sub-Additivity of Exterior Measure"
const theorem = <span>
    If <MathJax inline>{"$E = \\bigcup_{j=1}^\\infty E_j$"}</MathJax>, then <MathJax inline>{"$m_*(E) \\leq \\sum_{j = 1}^N m_*(E_j)$"}</MathJax>

</span>

const proof = <span></span>

const CountableSubadditivityExteriorMeasure = new Theorem(id, title, theorem, proof)

export default CountableSubadditivityExteriorMeasure;