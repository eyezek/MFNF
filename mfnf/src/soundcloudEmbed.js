import React from "react";

class SoundcloudEmbed extends React.Component {
  render() {
    return (
      <div id="soundcloudembed">
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1289687155&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
        <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
          <a
            href="https://soundcloud.com/jamesgorczyca1"
            title="JAMES GORCZYCA"
            target="_blank"
            style="color: #cccccc; text-decoration: none;"
          >
            JAMES GORCZYCA
          </a>{" "}
          ·{" "}
          <a
            href="https://soundcloud.com/jamesgorczyca1/sets/make-family-not-friends"
            title="MAKE FAMILY NOT FRIENDS"
            target="_blank"
            style="color: #cccccc; text-decoration: none;"
          >
            MAKE FAMILY NOT FRIENDS
          </a>
        </div>
      </div>
    );
  }
}

export default SoundcloudEmbed;
