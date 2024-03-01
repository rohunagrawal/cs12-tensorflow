import Definition from '../../../../definition'
import TheoremBlock from '../../../../../utils/theorem-block';

import MonotonicityExteriorMeasure from '../../../../../Theorem/theorems/Analysis/Measure/Exterior Measure/monotonicity-exterior-measure';
import CountableSubadditivityExteriorMeasure from '../../../../../Theorem/theorems/Analysis/Measure/Exterior Measure/countable-subadditivity-exterior-measure';
import SmallestCoveringExteriorMeasure from '../../../../../Theorem/theorems/Analysis/Measure/Exterior Measure/smallest-covering-exterior-measure';

import { MathJax } from "better-react-mathjax";

const id =  "exterior-measure"
const title = "Exterior Measure"
const body =
    <div>
        <b>Exterior measure</b> tries to measure the volume of a set by approximating it from the outside. For a set <MathJax inline>{"$E \\subset \\mathbb{R}^d$"}</MathJax>, we can measure the volume of the set with a covering of cubes. The finer the covering, the better the approximation of measure. It's worth noting that the exterior measure also applies to immeasureable sets.
        <br></br><br></br>
    Formally, exterior measure is a function that maps a set to a volume and is defined as <MathJax>{"$$m_*(E) = \\inf\\sum_{j = 1}^\\infty |Q_j|$$"}</MathJax>
    where the <a href="./infimum">infimum</a> is taken over all countable coverings <MathJax inline>{"$E \\subset \\bigcup_{j = 1}^\\infty Q_j$"}</MathJax> by closed <a href="./rectangles-and-cubes">cubes</a>. In general, <MathJax inline>{"$0 \\leq m_*(E) \\leq \\infty$"}</MathJax>.

    <TheoremBlock title="Example" link="">The exterior measure of a closed or open <a href="rectangles-and-cubes">rectangle</a> <MathJax inline>{"$R$"}</MathJax> is its volume, <MathJax inline>{"$m_*(R) = |R|$"}</MathJax></TheoremBlock> 

    <TheoremBlock title="Theorem (Monotinicity)" link="../theorem/monotonicity-exterior-measure">{MonotonicityExteriorMeasure.theorem}</TheoremBlock>

    <TheoremBlock title="Theorem (Countable Sub-additivity)" link="../theorem/countable-subadditivity-exterior-measure">{CountableSubadditivityExteriorMeasure.theorem}</TheoremBlock>

    <TheoremBlock title="Theorem" link="../theorem/smallest-covering-exterior-measure">{SmallestCoveringExteriorMeasure.theorem}</TheoremBlock>
    </div>

const ExteriorMeasure = new Definition(id, title, body)

export default ExteriorMeasure;