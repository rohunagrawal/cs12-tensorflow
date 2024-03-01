import Definition from '../../../definition'
import TheoremBlock from '../../../../utils/theorem-block';

import { MathJax } from "better-react-mathjax";
import ClosedBoundedCompact from '../../../../Theorem/theorems/Analysis/Topology/closed-bounded-compact';

const id =  "bounded"
const title = "Bounded"
const body =
    <div>
        Given an ordered set <MathJax inline>{"$S$"}</MathJax>, and a subset <MathJax inline>{"$E \\subset S$"}</MathJax>, if there exists a <MathJax inline>{"$\\beta \\in S$"}</MathJax> such that <MathJax inline>{"$x \\leq \\beta, \\forall x \\in E$"}</MathJax>, then we say that <MathJax inline>{"$E$"}</MathJax> is bounded above by <MathJax inline>{"$\\beta$"}</MathJax>. Vice-Versa for bounded from below. 

        <br></br><br></br>

        If <MathJax inline>{"$\\alpha$"}</MathJax> is an upper bound of <MathJax inline>{"$E$"}</MathJax> and if <MathJax inline>{"$\\gamma < \\alpha$"}</MathJax> then <MathJax inline>{"$\\gamma$"}</MathJax> is not an upper bound, then <MathJax inline>{"$\\alpha = \\sup E$"}</MathJax> is the <b>supremum</b> or <b>least upper bound</b> of <MathJax inline>{"$E$"}</MathJax>. Vice-versa for <b>infimum</b> or <b>greatest lower bound</b>. 

        <br></br><br></br>

        In a <a href="./metric-space">metric space</a> <MathJax inline>{"$(X, \\rho)$"}</MathJax>, a set <MathJax inline>{"$E \\subset X$"}</MathJax> is <b>bounded</b> if <MathJax inline>{"$\\exists M \\in \\mathbb{R}$"}</MathJax> and a point <MathJax inline>{"$q \\in X$"}</MathJax> such that <MathJax inline>{"$\\rho(q, p) < M,  \\forall p \\in E$"}</MathJax>. Basically, there's a certain center point within the set such that an <a href="open-and-closed">open ball</a> around the center point contains the set.

        <TheoremBlock title = "Theorem" link="../theorem/closed-bounded-compact">{ClosedBoundedCompact.theorem}</TheoremBlock>

    </div>

const Bounded = new Definition(id, title, body)

export default Bounded;