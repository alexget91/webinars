import React from "react";
import Card from "../card/card";
import Banner from "../banner/banner";
import Pagination from "../pagination/pagination";
import {CardLabel} from "../../common/constants";

const Catalog = () => <section className="catalog">
  <div className="catalog__content">
    <Card
      title="HTTPS & SSL Does Not Mean You Have a Secure Website"
      text="Having an SSL certificate does not mean you have a secure website, and with the new European GDPR regulations"
      imageSrc="pictures/article1.jpg"
      url="#"
      cssClass="catalog__card"
    />
    <Card
      title="SEMrush 101"
      text="In this blog post, I share how to use three easily obtainable PPC reports to help improve your organic search performance."
      imageSrc="pictures/article2.jpg"
      url="#"
      cssClass="catalog__card"
    />
    <Card
      title="SEMrush Real-Time Site Analysis of VisionDirect"
      text="Learn more about SEMrush"
      imageSrc="pictures/article3.jpg"
      label={CardLabel.ADVANCED}
      url="#"
      cssClass="catalog__card"
    />
    <Card
      title="SEO Surgery India"
      text="I couldn’t be happier to share with you data and insights from Ghergich & Co.’s latest partnership with SEMrush."
      imageSrc="pictures/article2.jpg"
      label={CardLabel.BASIC}
      url="#"
      cssClass="catalog__card"
    />
    <Banner
      title="Banner"
      srcBig="pictures/banner-big.png"
      srcSmall="pictures/banner-small.jpg"
      url="#"
      cssClass="catalog__card catalog__card--double"
    />
    <Card
      title="HTTPS & SSL Does Not Mean You Have a Secure Website"
      text="Having an SSL certificate does not mean you have a secure website, and with the new European GDPR regulations"
      imageSrc="pictures/article1.jpg"
      url="#"
      cssClass="catalog__card"
    />
  </div>
  <Pagination cssClass="catalog__pagination"/>
</section>;

export default Catalog;
