import React from "react";
import phonelogo from "../../imgs/Rectangle.png";
import phonelogo2 from "../../imgs/Rectangle (1).png";
import phonelogo3 from "../../imgs/photo3.png";
import phonelogo4 from "../../imgs/phonelogo4.png";
import phonelogo5 from "../../imgs/phonelogo5.png";
import phonelogo6 from "../../imgs/phonelogo6.png";
import photologo7 from "../../imgs/photologo7.png";

import payAppleLogo from "../../imgs/Group (1).png";
import payGoogleLogo from "../../imgs/Group (2).png";
import getGoogle from "../../imgs/getGoogle.png";
import getApp from "../../imgs/getApp.png";

function CardPages() {
  return (
    <div>
      <div className="body">
        <div className="body_about">
          <p>In every beginning, there is chaos.</p>
          <h1>Peaceful shopping.</h1>
          <h1>Mindful money.</h1>
          <p>
            See how we can help with making your shopping experience and money
            management more ZEN.
          </p>
          <div className="get_downloader">
            <div>
              <a href="https://apps.apple.com/us/app/mastercard-for-you/id1095630542">
                <img src={getApp} alt="getApp" />
              </a>
            </div>
            <div>
              <a href="https://play.google.com/store/apps/details?id=com.mastercard.mastercardforyou&hl=ru&gl=US">
                <img src={getGoogle} alt="getGoole" />
              </a>
            </div>
          </div>
        </div>
        <div className="body_phonelog">
          <img src={phonelogo} alt="phonelogo1" />
        </div>
      </div>

      <div className="body">
        <div className="body_phonelog">
          <img src={phonelogo2} alt="phonelogo2" />
        </div>
        <div className="body_about">
          <h1>1-year warranty boost</h1>
          <p>
            ZEN cards have a very neat feature that will help you whenever your
            electronic devices start failing after the standard warranty ends,
            which is pretty common.
          </p>
          <br />
          <p>
            When you buy any electronics with your ZEN shopping Mastercard®,
            their warranty gets extended by one year. How does it work? It
            simply does. Automatically.
          </p>
        </div>
      </div>
      {/* Page 3 */}
      <div className="body">
        <div className="body_about" id="Zen">
          <h1>ZEN Care</h1>
          <p>
            Shopping online is usually a delightful experience. Until it's not.
          </p>
          <br />
          <p>
            Until something you buy, proves to be faulty, missing or a totally
            wrong item, you’ re in for long product return procedures.
          </p>
          <br />
          <p>
            But, here comes ZEN Care: a free, built-in shopping protection. You
            can rest assured we’ll handle all of the transaction-related
            problems faster and with higher success rates. Where lone consumers
            can be ignored or dumped by dishonest merchants, ZEN doesn't get
            discouraged. ZEN persists.
          </p>
        </div>
        <div className="body_phonelog">
          <img src={phonelogo3} alt="phonelogo2" />
        </div>
      </div>
      <div>
        <div className="about_cashback" id="cashback">
          <h1>and cashback!</h1>
          <h4>
            It saves a little bit of money while you’re shopping, but in many
            cases it takes ages to get anything out of it. We gave it a thought
            and made cashback way more friendly. Up to 14% of what you spend
            using ZEN Mastercard ® will materialize on your account right after
            the purchase. It's like you haggled some cash, despite you didn't
            have to. Just don't forget to use in-app cashback link.
          </h4>
        </div>
      
      </div>
      <div className="body">
        <div className="body_about" id="MasterCard">
          <h1>ZEN shopping Mastercard</h1>
          <br />
          <p>
            You shouldn’t be bound to use one card at a time, especially when it
            has so many benefits! With ZEN, you can manage your shopping and
            finances with both physical and virtual cards. It’s convenient,
            streamlined, and works like a charm. You can have a shopping card, a
            subscription card, and whatever other cards that make sense to you.
          </p>
          <div className="payBy">
            <img src={payAppleLogo} alt="App" />
            <img src={payGoogleLogo} alt="Google" />
          </div>
        </div>
        <div className="body_phonelog">
          <img src={phonelogo4} alt="phonelogo4" />
        </div>
      </div>
      <div className="body">
        <div className="body_phonelog">
          <img src={phonelogo5} alt="phonelogo5" />
        </div>
        <div className="body_about">
          <h1>Shopping with no fees</h1>
          <br />
          <p>
            Online shopping is flawed with all kind of fees. Currency exchange
            fees, processing fees and even fees for having multiple fees.
            Getting rid of them became our hobby. Same goes for ATM withdrawal
            fees.
          </p>
          <br />
          <p>
            Enjoy your money globally. Every uncut part of it. Keep reading. ZEN
            goes beyond shopping with a fully functional account.
          </p>
        </div>
      </div>

      <div className="body">
        <div className="body_about">
          <h1>One app, one account, many currencies</h1>
          <br />
          <p>
            ZEN Mastercard® was made for spending money. ZEN account is here to
            store and manage it peacefully, from the inside of your pocket.
          </p>
          <br />
          <p>
            You can use it just like a regular account, as it has its own IBAN
            and works just the way any bank account would — but better. Store up
            to 30 currencies and transfer them easily in many ways.
          </p>
        </div>
        <div className="body_phonelog">
          <img src={phonelogo6} alt="phonelogo6" />
        </div>
      </div>
      <div className="body">
        <div className="body_phonelog">
          <img src={photologo7} alt="phonelogo7" />
        </div>
        <div className="body_about">
          <h1>Quick and easy account creation</h1>
          <br />
          <p>
            Now, you might be thinking that it’s just like any other account
            creation… Long, tiresome and full of endless blanks to fill in.
            Well, it’s not.
          </p>
          <br />
          <p>
            We have designed the whole process to make it the simplest and the
            shortest one ever conceived for a personal account. Download the app
            and see for yourself!
          </p>
          <div className="payBy">
            <a href="https://apps.apple.com/us/app/mastercard-for-you/id1095630542">
              <img src={getApp} alt="appStore" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.mastercard.mastercardforyou&hl=ru&gl=US">
              <img src={getGoogle} alt="googleStore" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPages;
