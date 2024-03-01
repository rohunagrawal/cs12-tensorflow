import Definition from '../../../definition'
import Tags from '../../../../Tags/tags'

import { MathJax } from "better-react-mathjax";

const id =  "expectation"
const title = "Expectation"
const body =
    <div>
        The expectation of a random variable <MathJax inline>{"$X$"}</MathJax>, denoted <MathJax inline>{"$\\mathbb{E}(X)$"}</MathJax>, is the average value of the random variable.
    </div>

const Expectation = new Definition(id, title, body)

export default Expectation;