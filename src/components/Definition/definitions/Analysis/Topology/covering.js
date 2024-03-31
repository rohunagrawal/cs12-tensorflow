import Definition from '../../../definition'

import { MathJax } from "better-react-mathjax";

const id =  "covering"
const title = "Covering"
const body =
    <div>
        In a <a href="./metric-space">metric space</a> <MathJax inline>{"$X$"}</MathJax>, a <b>cover</b> of a set <MathJax inline>{"$E$"}</MathJax> is a collection <MathJax inline>{"$\\{G_i\\}_{i = 1}^\\infty$"}</MathJax> of sets such that <MathJax inline>{"$E \\subset \\bigcup_{i = 1}^\\infty G_i$"}</MathJax>. A <b>finite cover</b> just has a finite number of <MathJax inline>{"$G_is$"}</MathJax>.
    </div>

const Covering = new Definition(id, title, body)

export default Covering;