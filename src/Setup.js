import "./styles.css"

function Setup() {
    return (
        <div class="cs12-container">

            <h1>CS 12 Setup</h1>

            <h2>Private Github Repo</h2>

            <p>To submit labs, make a private github repository and give read access to @rohunagrawal.
            Then, clone this <a href="https://github.com/rohunagrawal/cs12-tensorflow-sp25">repository</a> that will be updated with the labs as they come out. Then copy the lab folder you are working on from the labs repo to your private repo. You can do this with <code>cp -a [source dir] [destination dir]</code> </p> 

            <h2>Submitting Assignments</h2>

            <p>Once you are done with the lab, push your changes to your private github repo that is shared with us. We will grade the latest commit that is pushed before the deadline.</p>

            <h2>Virtual environments</h2>

            <p>Virtual environments simulate a "clean" Python install on your system so you don't need to worry about library conflicts and dependency issues. You can use either uv, virtualenv, or conda. I would recommend using uv. </p>

            <h4>uv</h4>

            <p>First, install uv from <a href = "https://docs.astral.sh/uv/getting-started/installation/">here</a>.</p>

            In the same directory as your labs, create a file with the name <i>"pyproject.toml"</i> and the following content:

            <code>
            [project] <br></br>
            name = "cs12" <br></br>
            version = "0.1.0" <br></br>
            requires-python = "&gt;=3.9, &lt;=3.11" <br></br>
            dependencies = [ <br></br>
                &emsp;&emsp;"tensorflow", <br></br>
                &emsp;&emsp;"numpy", <br></br>
                &emsp;&emsp;"matplotlib", <br></br>
                &emsp;&emsp;"pandas", <br></br>
                &emsp;&emsp;"ipykernel" <br></br>
            ] <br></br>
            </code>

            Then run <code>uv sync</code>
            which will download all the packages listed in the dependencies list and store it in a folder called <i>"/.venv"</i>.
            Then in your ide, you can select .venv as the kernel for the python notebook.

            If you run into issues, delete the '.venv' folder, change the python version requirements in the 'pyproject.toml' file, and run "uv sync" again.

            <h4>Conda</h4>

            <p>Follow this link to install Conda if you don't have it already: <a href = "https://conda.io/projects/conda/en/latest/user-guide/install/index.html">https://conda.io/projects/conda/en/latest/user-guide/install/index.html</a> <br></br>
            
            Once you've done that, create a new environment and activate it.
            <code>conda create -n cs12 python<br></br>conda activate cs12</code>
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
            If you get an error message like `ModuleNotFoundError: No module named 'tensorflow'` then something went wrong. You can use `pip list` to check if tensorflow is installed.
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
  
  export default Setup; 