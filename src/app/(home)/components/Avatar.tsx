import React from "react";
import { Link, Avatar as Picture } from "@radix-ui/themes";

const Avatar = () => {
  return (
    <Link
      href="https://instagram.fdel25-1.fna.fbcdn.net/v/t51.2885-19/461321812_2924875337688284_6768627478489554162_n.jpg?_nc_ht=instagram.fdel25-1.fna.fbcdn.net&amp;_nc_cat=108&amp;_nc_ohc=ULurNJpsRRkQ7kNvgHDePkq&amp;_nc_gid=5dd24c69bab24ca5a9adff40b6931c48&amp;edm=AP4sbd4BAAAA&amp;ccb=7-5&amp;oh=00_AYC3oHTVQe_hGui7_jWbh4AOURoc_rpgDRaJ7Mz1kzNJwg&amp;oe=6732F74A&amp;_nc_sid=7a9f4b"
      target="_blank"
    >
      <img
        src="https://media.licdn.com/dms/image/D4E03AQH9beqf_Pj6fw/profile-displayphoto-shrink_400_400/0/1726139553548?e=1736380800&v=beta&t=gVFn0P8g1F2sd5Ly9_KeY6dXhfJiFSgGCynw_fCQTkc"
        alt="Suyash Parmar"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
      />
    </Link>
  );
};

export default Avatar;
