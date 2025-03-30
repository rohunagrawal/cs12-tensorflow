import "./styles.css"

function Home() {
    return (
        <div class="cs12-container">

            <header class="intro-section" Style = "padding-top: 20px;">
                <img id = "tensorflow-logo" src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="TensorFlow Logo" width="100" height="100" />
                <div>
                    <h1>CS 12: TensorFlow (Spring 2025)</h1>
                    <p>Welcome to CS 12: TensorFlow! This course is intended as a fast-paced introduction to machine learning with TensorFlow and Keras, focused particularly on neural networks. It gives a whirlwind tour of several types of models, and brief coverage of several machine learning topics, but its primary goal is first and foremost to get you comfortable with writing, training, and deploying sophisticated models in TensorFlow.</p>
                    
                </div>
            </header>
            <section class="instructor-info">
                <h2>Instructor Info</h2>
                <p><b>Instructor:</b> Rohun Agrawal
                    (OH: Friday 3-4pm on <a href="https://caltech.zoom.us/j/3996022900">zoom</a>, rohun@caltech.edu) <br />
                   
                    <b>Supervisor:</b> Michael Vanier (mvanier@cms.caltech.edu) </p>
                
            </section>
            <section class="prerequisites">
                <h2>Prerequisites</h2>
                <ul>
                    <li>CS 1-level Python programming knowledge.</li>
                    <li>Experience with machine learning equivalent to CS 156a.</li>
                    <li>Basic familiarity with Linux, NumPy, and Jupyter notebooks.</li>
                </ul>
            </section>
            <section class="prerequisites">
                <h2>Lectures and Labs</h2>
                <p>Lectures will be from 8-9pm on Wednesdays in ANB 121. Lecture slides will be added <a href = "https://drive.google.com/drive/folders/1EejMci2ojV_hsa-LN7oB0gtOMkc2yCO0?usp=share_link">here</a>.<br></br>
                    
                    Labs come out on Monday and are due the following Monday by 11:59pm, with the exception of the last lab that is due 2 weeks after its release. The labs will be posted in <a href = "https://github.com/rohunagrawal/cs12-tensorflow-sp25">this github repo</a>.</p>
            </section>
            <section class="Piazza">
                <h2>Piazza</h2>
                <p>Please join the <a href = "https://piazza.com/caltech/spring2025/cs12">piazza</a> for this course. We will be using it to post announcements and answer questions.</p>
            </section>
            

            <section class="weekly-schedule">
                <h2>Weekly Schedule</h2>
                <table>
                <thead>
                    <tr>
                        <th>Topic</th>
                        <th>Due</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Introduction</td>
                        <td>04/07/24</td>
                    </tr>
                    <tr>
                        <td>Tensorflow Basics</td>
                        <td>04/14/24</td>
                    </tr>
                    <tr>
                        <td>Linear Models</td>
                        <td>04/21/24</td>
                    </tr>
                    <tr>
                        <td>Dense Neural Networks</td>
                        <td>04/28/24</td>
                    </tr>
                    <tr>
                        <td>Convolutional Neural Networks</td>
                        <td>05/05/24</td>
                    </tr>
                    <tr>
                        <td>Adversarial Attacks</td>
                        <td>05/12/24</td>
                    </tr>
                    <tr>
                        <td>Transformers Pt. 1</td>
                        <td>05/19/24</td>
                    </tr>
                    <tr>
                        <td>Transformers Pt. 2</td>
                        <td>06/02/24</td>
                    </tr>
                </tbody>
            </table>
            </section>
            <section class="Grading">
                <h2>Grading</h2>
                <p>This course is pass-fail. Each lab is graded on a scale of 3. To pass you must submit all labs with an average of at least 2/3. Commiting labs past the deadline results in a deduction of 0.5 points out of 3. Grading is mostly based on an attempt, and we want everyone to easily pass.</p>
            </section>
            <section class="Collaboration Policy">
                <h2>Collaboration Policy</h2>
                <p>Feel free to collaborate on concepts, algorithms, etc, but please don't share code in any way. Tensorflow documentation and Stack Overflow for syntax is alright. </p>
            </section>

            <section class="Submitting Assignments">
                <h2>Submitting Assignments</h2>
                <p>Follow the instructions in the <a href = "/#/setup">setup guide</a></p>
            </section>

            
        </div>
    );
  }
  
  export default Home; 