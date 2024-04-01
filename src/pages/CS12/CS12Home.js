import "./cs12.css"

function CS12Home() {
    return (
        <div class="cs12-container">

            <header class="intro-section" Style = "padding-top: 20px;">
                <img id = "tensorflow-logo" src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="TensorFlow Logo" width="100" height="100" />
                <div>
                    <h1>CS 12: TensorFlow (Section 2)</h1>
                    <p>Welcome to CS 12: TensorFlow! This course is intended as a fast-paced introduction to machine learning with TensorFlow and Keras, focused particularly on neural networks. It gives a whirlwind tour of several types of models, and brief coverage of several machine learning topics, but its primary goal is first and foremost to get you comfortable with writing, training, and deploying sophisticated models in TensorFlow.</p>
                    
                </div>
            </header>
            <section class="instructor-info">
                <h2>Instructor Info</h2>
                <p><b>Instructor:</b> Rohun Agrawal
                    (OH: Sundays 4-5pm on <a href="https://caltech.zoom.us/j/3996022900">zoom</a>, rohun@caltech.edu) <br />
                    <b>TA:</b> Patrick Rim (OH: Thursdays 12-1pm, patrick@caltech.edu) <br />
                    
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
                <p>Lectures will be from 8-9pm on Tuesdays in ANB 105. Labs come out on Monday and are due the following Monday by 11:59pm.</p>

                <p>To submit labs, make a private GitHub repository. Give read access to @rohunagrawal and @patrickqrim, then for each assignment, submit the commit hash for your homework on Canvas. I'll send out the relevant information (GitHub usernames, email addresses, etc) once people have registered for the class.</p>
            </section>
            

            <section class="weekly-schedule">
                <h2>Weekly Schedule</h2>
                <table>
                <thead>
                    <tr>
                        <th>Topic</th>
                        <th>Lecture</th>
                        <th>Lab</th>
                        <th>Due</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Introduction</td>
                        <td>link</td>
                        <td>link</td>
                        <td>04/08/24</td>
                    </tr>
                    <tr>
                        <td>Tensorflow Basics</td>
                        <td>link</td>
                        <td>link</td>
                        <td>04/15/24</td>
                    </tr>
                    <tr>
                        <td>Linear Models</td>
                        <td>link</td>
                        <td>link</td>
                        <td>04/22/24</td>
                    </tr>
                    <tr>
                        <td>Dense Neural Networks</td>
                        <td>link</td>
                        <td>link</td>
                        <td>04/29/24</td>
                    </tr>
                    <tr>
                        <td>Convolutional Neural Networks</td>
                        <td>link</td>
                        <td>link</td>
                        <td>05/06/24</td>
                    </tr>
                    <tr>
                        <td>Adversarial Attacks</td>
                        <td>link</td>
                        <td>link</td>
                        <td>05/13/24</td>
                    </tr>
                    <tr>
                        <td>Transformers Pt. 1</td>
                        <td>link</td>
                        <td>link</td>
                        <td>05/20/24</td>
                    </tr>
                    <tr>
                        <td>Transformers Pt. 2</td>
                        <td>link</td>
                        <td>link</td>
                        <td>06/10/24</td>
                    </tr>
                </tbody>
            </table>
            </section>
            <section class="Grading">
                <h2>Grading</h2>
                <p>This course is pass-fail. Each lab is graded on a scale of 3. To pass you must submit all labs with an average of at least 2/3. Grading is mostly based on an attempt, and we want everyone to easily pass.</p>
            </section>
            <section class="Collaboration Policy">
                <h2>Collaboration Policy</h2>
                <p>Feel free to collaborate on concepts, algorithms, etc, but please don't share code in any way. Tensorflow documentation and Stack Overflow for syntax is alright. </p>
            </section>

            <section class="Submitting Assignments">
                <h2>Submitting Assignments</h2>
                <p>Follow the instructions in the <a href = "./#/cs12/setup">setup guide</a></p>
            </section>

            
        </div>
    );
  }
  
  export default CS12Home;