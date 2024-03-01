import Definition from '../../../definition'
import TheoremBlock from '../../../../utils/theorem-block';

import { MathJax } from "better-react-mathjax";

import ComplementOpenClosed from '../../../../Theorem/theorems/Analysis/Topology/complement-of-open-is-closed';
import ClosedBoundedCompact from '../../../../Theorem/theorems/Analysis/Topology/closed-bounded-compact';

const id =  "open-and-closed"
const title = "Open and Closed Sets"
const body =
    <div>
        In a <a href="./metric-space">metric space</a> <MathJax inline>{"$X$"}</MathJax>, a set <MathJax inline>{"$E \\subset X$"}</MathJax> is <b>open</b> if every point of <MathJax inline>{"$E$"}</MathJax> is an <a href="./interior-point">interior point</a> of <MathJax inline>{"$E$"}</MathJax>. In other words, an open set has no boundary. 

        <TheoremBlock title="Example">On the real line <MathJax inline>{"$\\mathbb{R}$"}</MathJax>, the open interval <MathJax inline>{"$(a, b)$"}</MathJax> from <MathJax inline>{"$a$"}</MathJax> to <MathJax inline>{"$b$"}</MathJax> is an open set.</TheoremBlock>

        <TheoremBlock title="Example"> A <b>neighborhood</b> or <b>open ball</b> is the set of all points within a certain metric distance from a point. Formally, the open ball is the open set <MathJax>{"$$B_r(p) = \\{x \\in X : \\rho(p, x) < r\\}$$"}</MathJax> with radius <MathJax inline>{"$r > 0$"}</MathJax> around point <MathJax inline>{"$p \\in X$"}</MathJax>, using the <a href="./metric-space">metric</a> <MathJax inline>{"$\\rho$"}</MathJax> associated with <MathJax inline>{"$X$"}</MathJax>.</TheoremBlock>

        A set <MathJax inline>{"$F \\subset X$"}</MathJax> is <b>closed</b> if every <a href="./limit-point">limit point</a> of <MathJax inline>{"$F$"}</MathJax> is a point of <MathJax inline>{"$F$"}</MathJax>.

        <TheoremBlock title="Theorem" link = "../theorem/complement-of-open-is-closed">{ComplementOpenClosed.theorem}</TheoremBlock>

        <TheoremBlock title = "Theorem" link="../theorem/closed-bounded-compact">{ClosedBoundedCompact.theorem}</TheoremBlock>    
    </div>

const OpenAndClosed = new Definition(id, title, body)

export default OpenAndClosed;