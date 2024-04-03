import "./cs12.css"

function CS12Setup() {
    return (
        <div class="cs12-container">

            <h1>CS 12 Setup</h1>

            <h2>Private Github Repo</h2>

            <p>To submit labs, make a private github repository and give read access to @rohunagrawal and @patrickqrim.
            Then, clone this <a href="https://github.com/rohunagrawal/cs12-tensorflow-sp24">repository</a> that will be updated with the labs as they come out. Then copy the lab folder you are working on from the labs repo to your private repo. You can do this with <code>cp -a [source dir] [destination dir]</code> </p> 

            <h2>Submitting Assignments</h2>

            <p>Once you are done with the lab, push your changes to your private github repo that is shared with us. We will grade the latest commit that is pushed before the deadline.</p>

            <h2>Virtual environments</h2>

            <p>Virtual environments simulate a "clean" Python install on your system so you don't need to worry about library conflicts and dependency issues. You can use either virtualenv or conda. I would recommend using conda. </p>

            <h4>Conda</h4>

            <p>Follow this link to install Conda if you don't have it already: <a href = "https://conda.io/projects/conda/en/latest/user-guide/install/index.html">https://conda.io/projects/conda/en/latest/user-guide/install/index.html</a> <br></br>
            
            Once you've done that, create a new environment and activate it.
            <code>conda create -n cs12<br></br>conda activate cs12</code>
            Install all the packages you'll need for the labs: 
            <code>pip install numpy scipy matplotlib ipython jupyter pandas scikit-learn tensorflow keras</code>

            Then, try running `python -c "import tensorflow"` in your shell.<br></br>
            If the line executes successfully (printing nothing), your setup is probably fine. <br></br>
            If you get an error message like `ModuleNotFoundError: No module named 'tensorflow'` then something went wrong.

            </p>
            <h4>Virtualenv</h4>
            
            <p>
            
            First, install virtualenv and virtualenvwrapper:<br></br>
            <code>
            pip install virtualenv <br></br>
            pip install virtualenvwrapper
            </code>
            
            Then, create and check the virtual environment:
            <br></br>
            <code>mkvirtualenv -p /usr/bin/python3.6 cs12-tensorflow  # Point to the Python binary you'll be using <br></br>
            workon cs12-tensorflow <br></br>
            python --version  # Should print "Python 3.x.y" where x is 5, 6, 7, or 8 </code>
            

            To activate the environment, use `workon cs12-tensorflow`. <br></br>
            To deactivate it when you're done, use `deactivate`.

            <br></br>
            Once you're in the virtual environment, run<br></br>
            <code>
            pip install numpy scipy matplotlib ipython jupyter pandas scikit-learn tensorflow keras
            </code>
            Then, try running `python -c "import tensorflow"` in your shell.<br></br>
            If the line executes successfully (printing nothing), your setup is probably fine.<br></br>
            If you get an error message like `ModuleNotFoundError: No module named 'tensorflow'` then something went wrong.
            </p>

            <h2>Running the code</h2>
            With the virtual environment active, run
            <code>jupyter-notebook</code>
            to host the notebook server.
            If you haven't used Jupyter notebooks before, here's a good <a href="https://www.dataquest.io/blog/jupyter-notebook-tutorial/">guide</a>.
            <br></br><br></br><br></br>
            

            
        </div>
    );
  }
  
  export default CS12Setup;