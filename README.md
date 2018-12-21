# Python Graph Demonstration

Created for:  
## San Diego Python Users Group
December 2018 Meetup

Created by:
Keith P Jolley


# Usage
There's a [Jupyter Notebook](https://jupyter.org/install) with quite
a few package dependencies.  I use [Anaconda](https://www.anaconda.com/)
which satisfies the vast majority of the dependencies, but `pip`
should work just fine too.

Because I don't like typing I have a `startit.sh` script to start the 
jupyter server but use what works for you.

The purpose of the notebook was to serve as a slide-deck so it also uses
[Rise](https://damianavila.github.io/RISE/) but that's entirely optional.

I also embedded [d3](https://d3js.org/) because it's my preferred graph
visualization tool.

There is a bug in the silly Karate Club graph I put in the background of
the slideshow. When you exit out of the slide show it doesn't delete the
html div I create so it continues to run at the top of the notebook, and
if you restart the slide show it adds a second graph, and so on. I didn't
bother fixing this but be aware that it's there.

I `gzip`ed the Enron.csv data file to get it under the 100MB github
file size limit. You probably will want to unzip it and update the 
`pd.readcsv()` function call. The downside to leaving it zipped is that
it will slow down reading in the data a bit.
