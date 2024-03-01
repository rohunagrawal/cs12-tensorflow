import Definition from '../../../definition'
import TheoremBlock from '../../../../utils/theorem-block';

import { MathJax } from "better-react-mathjax";
import ClosedBoundedCompact from '../../../../Theorem/theorems/Analysis/Topology/closed-bounded-compact';

const id =  "compactness"
const title = "Compactness"
const body =
    <div>
        In a <a href="./metric-space">metric space</a> <MathJax inline>{"$X$"}</MathJax>, a set <MathJax inline>{"$K \\subset X$"}</MathJax> is <b>compact</b> if every <a href="./definition/covering">open cover</a> of <MathJax inline>{"$K$"}</MathJax> contains a finite subcover.

        <TheoremBlock title = "Theorem" link="../theorem/closed-bounded-compact">{ClosedBoundedCompact.theorem}</TheoremBlock>    
    </div>

const Compactness = new Definition(id, title, body)

export default Compactness;