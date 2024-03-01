import Definition from '../../../definition'
import TheoremBlock from '../../../../utils/theorem-block';

import { MathJax } from "better-react-mathjax";

const id =  "rectangles-and-cubes"
const title = "Rectangles and Cubes"
const body =
    <div>
        A closed <b>rectangle</b> <MathJax inline>{"$R \\subset \\mathbb{R}^d$"}</MathJax> is the product of one-dimensional closed and bounded intervals <MathJax >{"$$R = [a_1, b_1] \\times [a_2, b_2] \\times \\dots \\times [a_d, b_d]$$"}</MathJax>
        where <MathJax inline>{"$a_i, b_i \\in \\mathbb{R}, a_i \\leq b_i, i = 1, 2, \\dots, d$"}</MathJax>. This is equivalent to <MathJax>{"$$R = \\{(x_1, \\dots, x_d) \\in \\mathbb{R}^d : a_i \\leq x_i \\leq b_i, i = 1, \\dots, d\\}$$"}</MathJax>

        The <b>volume</b> of a rectangle is the product of the length of its sides. Formally, the volume of a rectangle <MathJax inline>{"$R \\subset \\mathbb{R}^d$"}</MathJax> is denoted <MathJax>{"$$|R| = \\prod_{i = 1}^d{b_i - a_i}$$"}</MathJax>
        <TheoremBlock title="Example">A <b>cube</b> is a rectangle where all the sides have the same length. Thus for some length <MathJax inline>{"$l$"}</MathJax>, the cube <MathJax inline>{"$Q \\subset \\mathbb{R}^d$"}</MathJax> has side lengths <MathJax inline>{"$b_1 - a_1 = b_2 - a_2 = \\dots = b_d - a_d = l$"}</MathJax> and volume <MathJax inline>{"$|Q| = l^d$"}</MathJax></TheoremBlock>


    </div>

const RectanglesAndCubes = new Definition(id, title, body)

export default RectanglesAndCubes;