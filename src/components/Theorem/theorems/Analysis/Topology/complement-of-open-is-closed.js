import Theorem from '../../../theorem'

import { MathJax } from "better-react-mathjax";

const id =  "complement-of-open-is-closed"
const title = "Complement of an open set is closed"
const theorem = <span> A set <MathJax inline>{"$E$"}</MathJax> is <a href="../definition/open-and-closed">open</a> <MathJax inline>{"$\\iff$"}</MathJax> the <a href="../definition/complement">complement</a> of <MathJax inline>{"$E$"}</MathJax> is closed
    </span>

const proof = <span></span>

const ComplementOpenClosed = new Theorem(id, title, theorem, proof)

export default ComplementOpenClosed;