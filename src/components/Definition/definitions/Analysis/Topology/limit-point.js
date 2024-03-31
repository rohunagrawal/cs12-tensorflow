import Definition from '../../../definition'

import { MathJax } from "better-react-mathjax";

const id =  "limit-point"
const title = "Limit Point"
const body =
    <div>
        In a <a href="./metric-space">metric space</a> <MathJax inline>{"$X$"}</MathJax>, a point <MathJax inline>{"$p$"}</MathJax> is a <b>limit point</b> of a set <MathJax inline>{"$E \\subset X$"}</MathJax> if every <a href="./open-and-closed">neighborhood</a> of <MathJax inline>{"$p$"}</MathJax> contains a point <MathJax inline>{"$q \\neq p$"}</MathJax> such that <MathJax inline>{"$q \\in E$"}</MathJax>. 
        
        <br></br><br></br>

        Essentially, a limit point is a point that is either in the <a href="./interior">interior</a> or on the <a href="./open-and-closed">boundary</a> of a set, regardless if the set is <a href="./open-and-closed">closed</a>. A good way to think about this is if you have a point on the boundary of an <a href="./open-and-closed">open</a> set, then as you take a smaller and smaller neighborhood, the neighborhood will still intersect some part of the open set. 
    </div>

const LimitPoint = new Definition(id, title, body)

export default LimitPoint;