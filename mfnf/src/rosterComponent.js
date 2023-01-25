import React from "react";

export default function RosterComponent({ name, soundcloud, instagram }) {
  // replace all spaces/parentheses in names so it can be used in img src
  let nameNoSpace = name.replace(/[- )(]/g, "-");

  return (
    <div id={name} className="rostercomponent">
      <img
        style={{ width: 200, height: 200 }}
        alt={name + " avatar"}
        src={"./avatars/" + nameNoSpace + ".jpg"}
      />
      <h1 className="artistname">{name}</h1>
      <a href={soundcloud}>
        <img
          className="soundcloudicon"
          src={"./icons/icons8-soundcloud-50.png"}
          alt={name + "Soundcloud"}
        />
      </a>
      <h2>{instagram}</h2>
    </div>
  );
}
