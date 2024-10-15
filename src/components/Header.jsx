export default function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <div className="header-top">
          <button className="header-top-btn animate__animated animate__pulse">
            <img src="images/header-icon.png" width={72} height={72} alt="" />
          </button>
          <div className="header-nav-block">
            <img
              className="header-logo animate__animated animate__pulse"
              src="images/logo.png"
              width={72}
              height={72}
              alt="Logo"
            />
            <nav className="header-nav">
              <ul className="header-nav-list list">
                <li className="header-nav-item header-nav-item-empty tablet" />
                <li className="header-nav-item">
                  <a href="#roadmap" className="header-nav-link">
                    ROADMAP
                  </a>
                </li>
                <li className="header-nav-item">
                  <a href="#pawkenomics" className="header-nav-link">
                    PAWKENOMICS
                  </a>
                </li>
                <li className="header-nav-item header-nav-item-empty" />
                <li className="header-nav-item">
                  <a
                    href="https://www.shibadino.xyz/assets/ShibaDino_Whitepaper-DG-BqMBt.pdf"
                    target="_blank"
                    className="header-nav-link"
                  >
                    WHITEPAPER
                  </a>
                </li>
                <li className="header-nav-item">
                  <a
                    href="https://www.shibadino.xyz/assets/Audit%20ShibaDino-CoE9WAud.pdf"
                    className="header-nav-link"
                    target="_blank"
                  >
                    AUDIT
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <button className="btn animate__animated animate__pulse">
            CONNECT WALLET
          </button>
        </div>
        <div className="header-main">
          <p className="header-sub-title animate__animated animate__fadeInUp">
            FROM THE JUNGLE
          </p>
          <div className="header-title-block animate__animated animate__backInUp">
            <h1 className="header-title">
              <span>SHIBADIN</span>
            </h1>
            <img
              className="header-title-image"
              src="images/title-egg.png"
              width={207}
              height={298}
              alt=""
            />
          </div>
          <div className="header-sale animate__animated animate__flipInY">
            <img
              className="header-sale-top-img"
              src="images/shibadino.png"
              alt="Shibadino"
            />
            <div className="header-sale-info">
              <p className="header-sale-title">
                $DINO PRESALE <br />
                IS NOW LIVE!
              </p>
              <div className="header-sale-timer">
                <div className="header-sale-timer-item">
                  <p className="header-sale-timer-count">01</p>
                  <p className="header-sale-timer-title">DAYS</p>
                </div>
                <div className="header-sale-timer-item">
                  <p className="header-sale-timer-count">02</p>
                  <p className="header-sale-timer-title">HRS</p>
                </div>
                <div className="header-sale-timer-item">
                  <p className="header-sale-timer-count">03</p>
                  <p className="header-sale-timer-title">MINS</p>
                </div>
                <div className="header-sale-timer-item">
                  <p className="header-sale-timer-count">04</p>
                  <p className="header-sale-timer-title">SECS</p>
                </div>
              </div>
              <div className="header-sale-stat">
                <progress className="header-sale-progress" max={100} value={80}>
                  80%
                </progress>
                <div className="header-sale-stat-table">
                  <div className="header-sale-stat-row">
                    <p className="header-sale-stat-row-title">USDT RAISED</p>
                    <p className="header-sale-stat-row-value">
                      $462635.61 / 1KK
                    </p>
                  </div>
                  <div className="header-sale-stat-currenct">
                    <p className="header-sale-stat-currenct-value">
                      1 USDT = 769 DINO
                    </p>
                  </div>
                  <div className="header-sale-stat-row">
                    <p className="header-sale-stat-row-title">
                      YOUR PURCHASED $DINO
                    </p>
                    <p className="header-sale-stat-row-value">0,00</p>
                  </div>
                  <div className="header-sale-stat-row">
                    <p className="header-sale-stat-row-title">
                      YOUR STAKEABLE $DINO
                    </p>
                    <p className="header-sale-stat-row-value">0,00</p>
                  </div>
                </div>
                <div className="header-sale-actions">
                  <button className="header-sale-btn usdt-btn">
                    <img
                      src="images/usdt.png"
                      width={40}
                      height={40}
                      alt="USDT"
                    />
                    <span>USDT</span>
                  </button>
                  <button className="header-sale-btn solana-btn active">
                    <img
                      src="images/sol.png"
                      width={40}
                      height={40}
                      alt="SOL"
                    />
                    <span>SOL</span>
                  </button>
                  <div className="header-sale-field">
                    <input
                      className="header-sale-input pay-input"
                      type="number"
                      placeholder="YOU PAY"
                    />
                    <img
                      className="header-sale-input-img sale-img"
                      src="images/sol.png"
                      width={40}
                      height={40}
                      alt=""
                    />
                  </div>
                  <div className="header-sale-field">
                    <input
                      className="header-sale-input"
                      type="number"
                      placeholder="RECEIVE"
                    />
                    <img
                      className="header-sale-input-img"
                      src="images/shibano-small.png"
                      width={40}
                      height={40}
                      alt="Shibadino"
                    />
                  </div>
                  <button className="header-sale-btn">
                    <span>CONNECT YOUR WALLET</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="promo-strings header-strings">
        <section className="promo-string-carousel promo-string splide">
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <span className="promo-string-text">$DINO</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="promo-string promo-string-two">
          <ul className="list">
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
            <li>
              <span className="promo-string-text">$DINO</span>
            </li>
          </ul>
        </section>
      </div>
      <img
        className="header-bottom-bg"
        src="images/head-bottom-bg.png"
        alt=""
        role="presentation"
      />
    </header>
  );
}
