import React from "react";

const App = () => {
  return <>
    <header className="page-header">
      <a href="#" className="logo">
        <img src="pictures/logo.png"
          srcSet="pictures/logo@2x.png 2x, pictures/logo@3x.png 3x"
          className="logo__image" alt="SEMrush"/>
      </a>
    </header>

    <main className="page-main">
      <section className="main-header">
        <h1 className="main-header__title">Webinars</h1>
        <p className="main-header__text">Here you can register and take part in educational webinars conducted by the best digital marketing experts.</p>
        <button className="btn">Add new</button>
      </section>
      <section className="catalog">
        <div className="catalog__content">
          <a href="#" className="card catalog__card">
            <img src="pictures/article1.jpg" className="card__image" alt="article1.jpg"/>
            <div className="card__content">
              <h2 className="card__title">HTTPS & SSL Does Not Mean You Have a Secure Website</h2>
              <p className="card__text">Having an SSL certificate does not mean you have a secure website, and with the new European GDPR regulations</p>
              <div className="card__footer"/>
            </div>
          </a>
          <a href="#" className="card catalog__card">
            <img src="pictures/article2.jpg" className="card__image" alt="article2.jpg"/>
            <div className="card__content">
              <h2 className="card__title">SEMrush 101</h2>
              <p className="card__text">In this blog post, I share how to use
                three easily obtainable PPC reports
                to help improve your organic search
                performance. </p>
              <div className="card__footer"/>
            </div>
          </a>
          <a href="#" className="card catalog__card">
            <img src="pictures/article3.jpg" className="card__image" alt="article3.jpg"/>
            <div className="card__content">
              <h2 className="card__title">SEMrush Real-Time Site
                Analysis of VisionDirect</h2>
              <p className="card__text">Learn more about SEMrush</p>
              <div className="card__footer">
                <div className="label">advanced</div>
              </div>
            </div>
          </a>
          <a href="#" className="card catalog__card">
            <img src="pictures/article2.jpg" className="card__image" alt="article2.jpg"/>
            <div className="card__content">
              <h2 className="card__title">SEO Surgery India</h2>
              <p className="card__text">I couldn’t be happier to share with you
                data and insights from Ghergich & Co.’s
                latest partnership with SEMrush.</p>
              <div className="card__footer">
                <div className="label">basic</div>
              </div>
            </div>
          </a>
          <div className="card card--double catalog__card catalog__card--double">
            <a href="#" className="card__double-inner">
              <div className="catalog__mobile-hidden">
                <img src="pictures/banner-big.png" alt="banner-big.png"/>
              </div>
              <div className="catalog__desktop-hidden">
                <img src="pictures/banner-small.jpg" alt="banner-small.jpg"/>
              </div>
            </a>
          </div>
          <a href="#" className="card catalog__card">
            <img src="pictures/article1.jpg" className="card__image" alt="article1.jpg"/>
            <div className="card__content">
              <h2 className="card__title">HTTPS & SSL Does Not Mean You Have a Secure Website</h2>
              <p className="card__text">Having an SSL certificate does not mean you have a secure website, and with the new European GDPR regulations</p>
              <div className="card__footer"/>
            </div>
          </a>
        </div>
        <div className="pagination catalog__pagination">
          <a href="#" className="pagination__link active">1</a>
          <a href="#" className="pagination__link">2</a>
          <a href="#" className="pagination__link">3</a>
          <a href="#" className="pagination__link">4</a>
        </div>
      </section>
      <div className="popup">
        <div className="popup__body">
          <div className="popup__close"/>
          <h2 className="popup__title">Add new</h2>
          <div className="card-add">
            <form className="form">
              <div className="card-add__file-upload">
                <input type="file"/>
              </div>
              <div className="form__field">
                <label htmlFor="card-add-title" className="form__label">Title</label>
                <input type="text" id="card-add-title" className="form__text-input" placeholder="Enter title"/>
              </div>
              <div className="form__field">
                <label htmlFor="card-add-description" className="form__label">Description</label>
                <textarea id="card-add-description" className="form__text-input card-add__description" placeholder="Enter description"/>
              </div>
              <div className="card-add__buttons">
                <input type="submit" className="btn btn--green card-add__submit" value="Save"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </>;
};

export default App;
