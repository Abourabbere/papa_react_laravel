import { Center, Text } from "@mantine/core";
import React from "react";

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "#fffe",
        borderRadius: "10px",
        paddingTop: '5px',
        overflow: 'hidden',
      }}
    >
      <Center style={{ display: "flex" }}>
        <img
          src="./assets/insta.jpg"
          alt="instagramme"
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            margin: "0 7px",
            cursor: 'pointer',
            objectFit: 'cover',
          }}
        />
        <img
          src="./assets/faceboock.jpg"
          alt="faceboock"
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            margin: "0 7px",
            cursor: 'pointer',
            objectFit: 'cover',
          }}
        />
        <img
          src="./assets/youtube.jpg"
          alt="youtube"
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            margin: "0 7px",
            cursor: 'pointer',
            objectFit: 'cover',
          }}
        />
        <img
          src="./assets/twitter.jpg"
          alt="twitter"
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            margin: "0 7px",
            cursor: 'pointer',
            objectFit: 'cover',
          }}
        />
      </Center>
      <Text style={{ backgroundColor: '#cdcdcdbf', fontSize: '0.7em', textAlign: 'center', marginTop: '3px' }}>created by @ hackbou from scratch to 2021 / 2022</Text>
    </div>
  );
}

export default Footer;
