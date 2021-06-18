import React from "react";
import FaHeadphones from "react-icons/lib/fa/headphones";

// --------------------------------------Global Variables ---------------------------------------

const styles = {
  inspiration: {
    fontSize: 20,
    fontWeight: 800
  },
  songCard: {
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
  },

  songCardNoCameras: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    marginTop: 20,
    borderRadius: 20
  },
  musicText: {
    color: "purple",
    fontSize: 32,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    backgroundColor: "rgba(230, 230, 230, 0.5)"
  },
  bigLetter: {
    fontSize: 120,
    color: "green"
  },
  bigLetterH: {
    fontSize: 120,
    color: "purple"
  },
  songTitle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    fontSize: 24,
    color: "green",
    display: "block",
    textAlign: "center",
    height: 100
  },
  summary: {
    textAlign: "center",
    padding: 0,
    color: "purple",
    fontWeight: 300
  },
  sound: {
    textAlign: "center"
  },
  aboutWithHatSpace: {
    marginTop: 100
  }
};
const listenButtonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 29
};

const listenButtonStyle = {
  color: "white",
  hoverColor: "blue",
  fontSize: 32,
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 160,
  width: 160,
  marginTop: 40,
  borderColor: "black",
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 4,
  backgroundColor: "black"
};

const spotifyButtonStyle = {
  color: "white",
  hoverColor: "blue",
  fontSize: 32,
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 120,
  width: 120,
  marginTop: 40,
  borderColor: "black",
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 4,
  backgroundColor: "black"
};

const appleButtonStyle = {
  color: "black",
  hoverColor: "blue",
  fontSize: 32,
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 120,
  width: 120,
  marginTop: 40,
  borderColor: "black",
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 4,
  backgroundColor: "white"
};

const createAudioFile = hrefToUse => {
  return (
    <div style={listenButtonContainerStyle}>
      <div>
        <a style={listenButtonStyle} href={hrefToUse} target="_blank">
          <div>Listen &nbsp;</div>
          <FaHeadphones />
        </a>
      </div>
    </div>
  );
};

// Component to export

// add thin light dividers rather than bulky boxes

export const MusicContext = () => {
  return (
    <div className="row">
      <div className="row" style={styles.musicText}>
        <div className="col-xs-12"> Music </div>
      </div>

      <div className="row">
        <div className="row">
          <div
            className="col-xs-5"
            style={{ textAlign: "center", marginTop: 140 }}
            href={"https://open.spotify.com/artist/2O5OAXnx7ntM9e9qipzgbz"}
            target="_blank"
          >
            <a
              href={"https://open.spotify.com/artist/2O5OAXnx7ntM9e9qipzgbz"}
              target="_blank"
            >
              <div style={listenButtonContainerStyle}>
                <div>
                  <a
                    style={spotifyButtonStyle}
                    href={
                      "https://open.spotify.com/artist/2O5OAXnx7ntM9e9qipzgbz"
                    }
                    target="_blank"
                  >
                    <img
                      height={80}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQldcF6XgFCexE0vRF_z4Kmio9wKywb7qjq5fRSEy1ZbxqlTxNQ"
                      alt="Spotify Button"
                    />
                  </a>
                </div>
              </div>
            </a>
            <a
              href={"https://open.spotify.com/artist/2O5OAXnx7ntM9e9qipzgbz"}
              style={{ color: "green" }}
              target="_blank"
            >
              Spotify
            </a>
          </div>

          <div
            className="col-xs-5 col-xs-offset-1"
            style={{ textAlign: "center", marginTop: 140 }}
            href={"https://open.spotify.com/artist/2O5OAXnx7ntM9e9qipzgbz"}
            target="_blank"
          >
            <a
              href={"https://open.spotify.com/artist/2O5OAXnx7ntM9e9qipzgbz"}
              target="_blank"
            >
              <div style={listenButtonContainerStyle}>
                <div>
                  <a
                    style={appleButtonStyle}
                    href={
                      "https://itunes.apple.com/us/artist/hr-imagination/1307315333"
                    }
                    target="_blank"
                  >
                    <img
                      height={80}
                      src="https://tc-itservices.com/wp-content/uploads/2017/06/AppleMusic-1.jpg"
                      alt="apple button"
                    />
                  </a>
                </div>
              </div>
            </a>
            <a
              style={{ color: "green" }}
              href={
                "https://geo.itunes.apple.com/us/album/hr-1-ep/1307768330?mt=1&app=music"
              }
              target="_blank"
            >
              Apple Music
            </a>
          </div>
        </div>

        <div style={{ marginBottom: 30 }}> &nbsp; </div>
      </div>

      <div className="row" style={styles.songCardNoCameras}>
        <div className="row">
          <div style={styles.songTitle} className="col-xs-12">
            {" "}
            No Cameras{" "}
          </div>
        </div>

        <div className="row">
          <div style={styles.summary} className="col-xs-12 col-md-6">
            <div style={styles.inspiration}>Inspiration</div>
            <blockquote style={{ paddingRight: 60, paddingLeft: 60 }}>
              {" "}
              No Cameras is inspired by “ride with me” / Nelly. We interpreted
              “ride with me” as follows: Nelly is explaining how his life
              changes after he becomes rich and famous - he loves certain perks,
              such as having a nice Mercedes, but overall doesn’t enjoy the fact
              that people are treating him differently because of his money. So
              we took this concept and told a story about a random man who is
              newly famous and is now getting treated differently.
            </blockquote>
          </div>

          <div style={styles.sound} className="col-xs-12 col-md-6">
            {createAudioFile("https://soundcloud.com/user-44658808/no-cameras")}
          </div>
        </div>
      </div>
			<div className="row" style={Object.assign(styles.songCard, {borderTopWidth: 2, borderTopColor: 'black', borderTopStyle: 'solid'})}>
				<div className="row" style={styles.songTitle}>
					<div className="col-xs-12"> Switch </div>
				</div>

				<div className="row">
					<div style={styles.summary} className="col-xs-12 col-md-6">
						<div style={styles.inspiration}>Inspiration</div>
						<blockquote style={{ paddingRight: 60, paddingLeft: 60 }}>
							{" "}
							Switch is inspired by a parking ticket. There was a day when one of
							the members of HR Imagination got off of work and found a parking
							ticket on his car. This inconsequential incident ruined his
							afternoon. He then went home and realized there was no beer left in
							the fridge to soothe his nerves. It was just after this moment of
							agitation that he he took a major step back and realized that he
							shouldn't be stressing about such trivial things. There are millions
							of people in the world who live on less than 3 dollars a day and
							here he was brooding about a parking ticket and no beer. He decided
							to "switch" up how he thinks and made a decision to stop worrying about paltry
							problems.
						</blockquote>
					</div>

					<div style={styles.sound} className="col-xs-12 col-md-6">
						{createAudioFile("https://soundcloud.com/user-44658808/switch")}
					</div>
				</div>
			</div>

      <div className="row" style={Object.assign(styles.songCard, {borderTopWidth: 2, borderTopColor: 'black', borderTopStyle: 'solid'})}>
        <div className="row" style={styles.songTitle}>
          <div className="col-xs-12"> Confidence Vs. Doubt </div>
        </div>

        <div className="row">
          <div style={styles.summary} className="col-xs-12 col-md-6">
            <div style={styles.inspiration}>Inspiration</div>
            <blockquote style={{ paddingRight: 60, paddingLeft: 60 }}>
              {" "}
              Confidence vs. Doubt is about one person with two competing
              emotions (confidence and doubt). The person realizes that these
              emotions appear to alternate without one remaining prominent over
              the other. ("There ain't no sunny days without any stormy
              weather"). Confidence says things like "let's escape town" (leave
              doubt behind) "on the first greyhound that you see". Doubt says things like: "i've been running, running so so long",
              "mother nature always holds you down". Doubt is telling the person
              that he / she has been running after his / her dreams for so long
              and will probably run out of energy or time before he / she gets
              to them. The song continues as this hypothetical character
              witnesses a tumultous war between these two competing emotions.
            </blockquote>
          </div>

          <div style={styles.sound} className="col-xs-12 col-md-6">
            {createAudioFile(
              "https://soundcloud.com/user-44658808/confidence-vs-doubt"
            )}
          </div>
        </div>
      </div>

			<div className="row" style={Object.assign(styles.songCard, {borderTopWidth: 0})}>
        <div className="row" style={styles.songTitle}>
          <div className="col-xs-12"> Winter </div>
        </div>

        <div className="row">
          <div style={styles.summary} className="col-xs-12 col-md-6">
            <div style={styles.inspiration}>Inspiration</div>
            <blockquote style={{ paddingRight: 60, paddingLeft: 60 }}>
              {" "}
              Winter 2016 
            </blockquote>
          </div>
					<div>
						<div style={Object.assign(styles.sound, {marginTop: -30, marginBottom: 21})} className="col-xs-12 col-md-6">
							{createAudioFile(
								"https://soundcloud.com/user-44658808/winter"
							)}
						</div>
					</div>
          
        </div>
      </div>

      <div className="row">
        <div className="row" style={styles.songTitle}>
          <div className="col-xs-12"> Wonderful Conversation </div>
        </div>

        <div className="row">
          <div style={styles.summary} className="col-xs-12 col-md-6">
            <div style={styles.inspiration}>Inspiration</div>
            <blockquote style={{ paddingRight: 60, paddingLeft: 60 }}>
              {" "}
              Wonderful Conversation is inspired by the book, Wonder (R.J
              Palacio). Wonder is a book that tells a story about a kid who has
              a deformed face and is treated differently by the world because of
              it. This song tells a story of a person who encounters a man with a deformity in
              a city. This man pulls the narrator aside and the two have a
              wonderful conversation.
            </blockquote>
          </div>

          <div style={styles.sound} className="col-xs-12 col-md-6">
            {createAudioFile(
              "https://soundcloud.com/user-44658808/wonderful-conversation"
            )}
          </div>
        </div>
      </div>

      
    </div>
  );
};
