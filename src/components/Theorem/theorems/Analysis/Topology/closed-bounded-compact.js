import Theorem from '../../../theorem'

import { MathJax } from "better-react-mathjax";

const id =  "closed-bounded-compact"
const title = "Closed and Bounded iff Compact"
const theorem = <span>
    In a <a href="../definitions/metric-space">metric space</a> <MathJax inline>{"$X$"}</MathJax>, a set <MathJax inline>{"$E \\subset X$"}</MathJax> is <a href="../definition/open-and-closed">closed</a> and <a href="../definition/bounded">bounded</a> <MathJax inline>{"$\\iff$"}</MathJax> <MathJax inline>{"$E$"}</MathJax> is <a href="../definition/compactness">compact</a>.

</span>

const proof = <span></span>

const ClosedBoundedCompact = new Theorem(id, title, theorem, proof)

export default ClosedBoundedCompact;