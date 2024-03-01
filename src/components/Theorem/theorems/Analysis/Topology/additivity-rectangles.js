import Theorem from '../../../theorem'

import { MathJax } from "better-react-mathjax";

const id =  "additivity-rectangles"
const title = "Additivity of Rectangles"
const theorem = <span>
    A <a href="../definition/rectangles-and-cubes">rectangle</a> <MathJax inline>{"$R$"}</MathJax> that is the <a href="../definition/disjoint">almost disjoint</a> union of finitely many other rectangles, so <MathJax inline>{"$R = \\bigcup_{i = 1}^N R_i$"}</MathJax>, has a volume that is the sum of the volumes of the rectangles that form it. Formally, <MathJax >{"$$|R| = \\sum_{i = 1}^N |R_i|$$"}</MathJax>

</span>

const proof = <span></span>

const AdditivityRectangles = new Theorem(id, title, theorem, proof)

export default AdditivityRectangles;