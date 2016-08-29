The idea

About a month ago I got an email from Christian Wisniewski with a sketch that looked a bit like a Chord diagram but with "nodes" in the center. It seemed very intriguing and since I have a fond history of hacking the chord diagram for other purposes I wanted to try to create my own version of Christian's idea at some point and when I came across the LotR word count data I thought that would fit the layout very well

The layout

To build this layout I used d3's chord and ribbon functions as my basis but then started systematically making alterations to the chords and adding another level of data through the inner labels. I'll create a  blog on the layout in case you might be interested in re-using it for something else.

I got many great suggestions for naming the layout, butterfly, Labrys, Ginko leaf and eye of Sauron, I eventually chose the one that would best fit the shape even for different data (this data just happened to be symmetrical, but that is not a prerequesite). Also, just like d3.chord has d3.ribbon, I actually needed 2 names for these functions. So I went for loom() and strings()

The colors

The colors are based on picking colors from screenshots of that location in the movie (and my own personal feeling on what color represented my memory of that location) and sometimes made a bit more vibrant 

Data collection & preparation

In original dataset I had information on the number of words spoken by each character by scene and what race that character is. However, I found scenes to be a bit arbitrary. They are attached to the making of the movie, not the movie experience perse. So instead I went ahead and manually added an on-screen location to each of the ±800 rows of data. Besides a map of Middle-Earth, I relied heavily on the Age of the Ring scripts of the extended editions and the original scripts of the non-extended editions found on [IMSDb](http://www.imsdb.com/). These scripts sometimes mention the location when they talk about the scene in general. And of course, I used my own memory of watching the movies time and time again. 

I made two columns, one with a broad location (Gondor for example) and an extra with a more detailed location (Minas Tirith). I feel that the general location was straightforward to find. The only issue was that I didn't quite know where to group certain very specific location to. The Grey Havens for example; not the Shire or Rivendell... But it is too small to really are its own broad location. 
The detailed location, on the other hand, was sometimes just not known, too general or I couldn't find any mention of it in the scripts, but I think that about 90% have good detailed locations. However, during the buld of this visual I saw early on that there were already too many strings for the general location, so I aggregated the dataset on character and location.

Eventually this was a labor of love, during a lovely Sunday, and I tried my very best to add the right data to each scene.

Built with [blockbuilder.org](http://blockbuilder.org)