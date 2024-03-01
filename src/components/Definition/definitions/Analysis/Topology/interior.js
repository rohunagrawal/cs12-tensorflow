import Definition from '../../../definition'
import TheoremBlock from '../../../../utils/theorem-block';

import { MathJax } from "better-react-mathjax";

const id =  "interior"
const title = "Interior"
const body =
    <div>
        In a <a href="./metric-space">metric space</a> <MathJax inline>{"$X$"}</MathJax> the <b>interior</b> of a set <MathJax inline>{"$E \\subset X$"}</MathJax> is the set of all interior points of <MathJax inline>{"$E$"}</MathJax>. <br></br><br></br>A point <MathJax inline>{"$p$"}</MathJax> is an <b>interior point</b> of <MathJax inline>{"$E$"}</MathJax> if <MathJax inline>{"$\\exists$"}</MathJax> a <a href="./open-and-closed">neighborhood</a> <MathJax inline>{"$N$"}</MathJax> of <MathJax inline>{"$p$"}</MathJax> such that <MathJax inline>{"$N \\subset E$"}</MathJax>.
        <br></br><br></br>
        The interior of <MathJax inline>{"$E$"}</MathJax> is <a href="./open-and-closed">open</a>.
    </div>

const Interior = new Definition(id, title, body)

export default Interior;