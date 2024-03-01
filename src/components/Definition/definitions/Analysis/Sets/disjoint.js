import Definition from '../../../definition'
import TheoremBlock from '../../../../utils/theorem-block';

import { MathJax } from "better-react-mathjax";

const id =  "disjoint"
const title = "Disjoint"
const body =
    <div>
        <b>Disjoint</b> sets have no elements in common, meaning that their <a href="./intersection">intersection</a> is the empty set. Formally, a collection of sets <MathJax inline>{"$A_1, A_2, \\dots, A_n$"}</MathJax> are disjoint if <MathJax inline>{"$A_1 \\cap A_2 \\cap \\dots \\cap A_n = \\emptyset$"}</MathJax>. <br></br><br></br>


        In a <a href = "./metric-space">metric space</a>, a collection of sets <MathJax inline>{"$A_1, A_2, \\dots, A_n$"}</MathJax> are <b>almost disjoint</b> if the <a href="./interior">interiors</a> of the sets are disjoint.
    </div>

const Disjoint = new Definition(id, title, body)

export default Disjoint;