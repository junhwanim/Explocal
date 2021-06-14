import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import SecondNavbar from "../components/SecondNavbar";
import { MdEmail } from "react-icons/md";
import Footer from "../components/Footer";
import ReactStars from "react-rating-stars-component";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { DataContext } from "../components/DataContext";
import { CgUnavailable } from "react-icons/cg";
import { Link } from "react-router-dom";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import ScrollToTop from "../components/ScrollToTop";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const starsRating = {
  size: 30,
  count: 5,
  color: "#cbb162",
  activeColor: "#cbb162",
  isHalf: true,
  edit: true,
  emptyIcon: <FaRegStar />,
  halfIcon: <FaStarHalfAlt />,
  filledIcon: <FaStar />,
};

const RatedStar = {
  size: 20,
  count: 5,
  color: "#cbb162",
  activeColor: "#cbb162",
  isHalf: true,
  emptyIcon: <FaRegStar />,
  halfIcon: <FaStarHalfAlt />,
  filledIcon: <FaStar />,
  edit: false,
};

function LocalDetail() {
  const [user, setUser] = useState({});
  const [inputValue, setInputValue] = useState(null);
  const [starValue, setStarValue] = useState(null);
  const [reload, setReload] = useState(true);
  const [starKeyForce, setStarKeyForce] = useState(0);
  const { currentUser, allUsers} = useContext(DataContext);
  const { id } = useParams();
  const history = useHistory();
  const inputRef = useRef(null);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: "-100vw",
      scale: 0.5
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: "100vw",
      scale: 1.5
    },
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1
  };

  const animatedScroll = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    setStarKeyForce((prev) => prev + 1);
  }, [starValue, reload]);

  useEffect(() => {
    if (!reload) {
      return;
    }
    fetch(`/api/user/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setUser(json.data);
        setReload(false);
      });
  }, [id, reload]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (inputValue && starValue) {
      fetch(`/api/user/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rateNum: starValue,
          rateReview: inputValue,
          reviewer: currentUser.name,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success:", data);
          setReload(true);
          setStarValue(0);
        })
        .catch((error) => {
          console.log("Fail");
        });
    }
  };

  const getNumbers = user.rating?.map((num) => {
    return num.rate;
  });
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const addedNumber =
    user.rating?.length > 0 &&
    getNumbers?.reduce(reducer) / user.rating?.length;

  const sortedReviews = user.rating?.sort((a, b) => {
    const d1 = Date.parse(a.timeStamp);
    const d2 = Date.parse(b.timeStamp);
    return d2 - d1;
  });

  const findUser = (findName) => {
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].name === findName) {
        return allUsers[i]._id;
      }
    }
  };

  return (
    <>
      <ScrollToTop />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{position: "absolute", width: "100vw"}}
      >
      <Background></Background>
      <SecondNavbar style={{ width: "100%" }} />
      <DetailContainer>
        <DetailWrapper>
          <ArrowIconWrap onClick={() => history.push(`/locals/${user.city}`)}>
            <FaLongArrowAltLeft
              size={40}
              style={{ marginRight: "10px", paddingLeft: "20px" }}
            />
            Go Back to Main Page
          </ArrowIconWrap>
          <RowDiv>
            <Img src={user.avatarSrc} isAvailable={user.local} />
            <TextWrapper>
              <Name>{user.name}</Name>
              <City>
                From {user.city} in{" "}
                {user.country === "Philippines"
                  ? `The ${user.country}`
                  : `${user.country}`}
              </City>
              <RatingWrap>
                <IconWrapper>
                  <FaStar size={17} style={{ color: "#cbb162" }} />
                </IconWrapper>
                <Rate>
                  {Number.isInteger(addedNumber)
                    ? Number(addedNumber).toFixed(0)
                    : Number(addedNumber).toFixed(1)}{" "}
                  / 5{" "}
                  <span style={{ marginLeft: "15px" }}>
                    ({user.rating?.length}{" "}
                    {user.rating?.length > 1 ? "reviews" : "review"})
                  </span>
                </Rate>
              </RatingWrap>
              <Bio>{user.bio}</Bio>
              {user.local === "false" ? (
                <UnavailableWrap>
                  <CgUnavailable size={20} style={{ marginRight: "5px" }} />
                  <Unavailable>Unavailable for the moment</Unavailable>
                </UnavailableWrap>
              ) : (
                <>
                  <Row href={`mailto:${user.email}`}>
                    <IconWrapper>
                      <MdEmail size={17} />
                    </IconWrapper>
                    <Email>{user.email}</Email>
                  </Row>
                  <Icons>
                    <SocialIconLink>
                      <Twitter size={35} />
                    </SocialIconLink>
                    <SocialIconLink
                      href="https://www.instagram.com/jh_im_______/"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <Instagram size={35} />
                    </SocialIconLink>
                    <SocialIconLink
                      href="https://www.facebook.com/profile.php?id=100004271558231"
                      target="_blank"
                      aria-label="Facebook"
                    >
                      <Facebook size={35} />
                    </SocialIconLink>
                  </Icons>
                </>
              )}
            </TextWrapper>
          </RowDiv>
        </DetailWrapper>
      </DetailContainer>
      <RateWrapper>
        <HeadingWrapper>
          <Hr />
          <Review>Review</Review>
          <Hr />
        </HeadingWrapper>
        <ContentsWrapper>
          {currentUser.username !== user.username && (
            <>
              <StarWrap>
                <ReactStars
                  {...starsRating}
                  key={starKeyForce}
                  value={starValue}
                  onChange={(newValue) => {
                    setStarValue(newValue);
                  }}
                />
              </StarWrap>
              <InputDiv>
                <OuterSpan>
                  <Input
                    className="inputText"
                    type="text"
                    name="review"
                    required
                    onChange={(e) => setInputValue(e.target.value)}
                    ref={inputRef}
                  />
                  <InnerSpan className="floating-label">
                    Write a review here
                  </InnerSpan>
                </OuterSpan>
                <BtnWrap>
                  <Button
                    onClick={(e) => {
                      console.log("fasefaes");
                      handleSubmit(e);
                      inputRef.current.value = "";
                    }}
                  >
                    Submit
                  </Button>
                </BtnWrap>
              </InputDiv>
            </>
          )}
          <ReviewContainer>
            {sortedReviews?.map((review, index) => {
              return (
                <ReviewWrapper key={index}>
                  <ReactStars
                    key={`star-${index}-${starKeyForce}`}
                    {...RatedStar}
                    value={review.rate}
                  />
                  <Reviewer>
                    <ReviewedBy
                      onClick={() => {
                        setReload(true);
                        animatedScroll();
                      }}
                      to={`/local/${findUser(review.by)}`}
                    >
                      {review.by}
                    </ReviewedBy>
                    <VerifiedSpan>
                      <AiOutlineCheck
                        size={20}
                        style={{ marginRight: "5px" }}
                      />{" "}
                      Verified Reviewer
                    </VerifiedSpan>
                  </Reviewer>
                  <ReviewTime>Original review: {review.timeStamp}</ReviewTime>
                  <SingleReview>{review.review}</SingleReview>
                </ReviewWrapper>
              );
            })}
          </ReviewContainer>
        </ContentsWrapper>
      </RateWrapper>
      <Footer />
      </motion.div>
    </>
  );
}

const ReviewedBy = styled(Link)`
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  &:visited {
    color: #051747;
  }

  &:active {
    transform: scale(1);
  }
`;

const UnavailableWrap = styled.div`
  display: flex;
  margin-top: 50px;
  opacity: 0.7;
  color: red;
`;

const Unavailable = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
`;

const RatingWrap = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Rate = styled.p`
  font-size: 1rem;
`;

const RowDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 20px;
  border-radius: 14px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  z-index: 5;

  @media screen and (max-width: 825px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const ArrowIconWrap = styled.div`
  position: relative;
  z-index: 2;
  transform: translateY(25px);
  height: 80px;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 20px 0 50px 0;
  justify-content: flex-start;
  color: rgba(203, 177, 98, 0.5);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 1px solid transparent;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &:hover {
    border-top: 1px solid transparent;
    box-shadow: rgba(203, 177, 98, 0.8) 0px 7px 30px -3px;
    color: #cbb162;
  }
`;

const ReviewTime = styled.p`
  font-size: 0.9rem;
  margin-bottom: 10px;
  opacity: 0.7;
`;

const VerifiedSpan = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 40px;
  color: #535f80;
`;

const SingleReview = styled.p``;

const Reviewer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 15px 0;
  color: #051747;
`;

const ReviewWrapper = styled.div`
  width: 55vw;
  margin: 0 0 10px 0;
  border: 1px solid RGBA(5, 23, 71, 0.2);
  padding: 20px;
`;

const ReviewContainer = styled.div`
  margin-bottom: 50px;
`;

const Button = styled.button`
  border-radius: 5px;
  background: #cbb162;
  padding: 10px 22px;
  color: #000000;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    background: #051747;
    color: #fff;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  @media screen and (max-width: 825px) {
    width: 100%;
  }
`;

const InnerSpan = styled.span`
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 40px;
  width: auto;
  transition: 0.2s ease all;
  opacity: 0.6;
  font-size: 1rem;
`;

const Input = styled.textarea`
  font-size: 1rem;
  height: 120px;
  width: 55vw;
  border: none;
  box-shadow: inset 0 0 5px #051747;
  padding: 10px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: 8px;
  }
  &:focus {
    outline-color: #051747;
  }
`;

const OuterSpan = styled.div``;

const InputDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 30px;
  margin-bottom: 60px;

  @media screen and (max-width: 825px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const StarWrap = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 825px) {
    justify-content: center;
  }
`;

const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ContentsWrapper = styled.div`
  width: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 825px) {
    flex-direction: column;
    justify-content: center;
    width: 300px;
    align-items: center;
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const Review = styled.h2`
  margin: 0 10px;
`;

const SocialIconLink = styled.a`
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:visited {
    color: inherit;
  }

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Facebook = styled(FaFacebookSquare)`
  opacity: 0.6;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const Instagram = styled(FaInstagramSquare)`
  opacity: 0.6;
  margin-right: 20px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const Twitter = styled(FaTwitterSquare)`
  opacity: 0.6;
  margin-right: 20px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const Icons = styled.div`
  display: flex;
  margin-top: 30px;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 825px) {
    padding: 0px;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(
    90deg,
    #051747,
    #12214f,
    #1e2a57,
    #283460,
    #333f68,
    #3d4970,
    #485478,
    #535f80
  );
  position: absolute;
  z-index: -2;

  @media screen and (max-width: 825px) {
    height: 400px;
  }
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const Row = styled.a`
  display: inline-flex;
  position: relative;
  color: #051747;
  opacity: 0.6;
  text-decoration: none;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.7);
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #051747;
    opacity: 1;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  &:after {
    content: "";
    width: 0%;
    height: 3px;
    background-color: #fff;
    background: #ffd89b;
    background: -webkit-linear-gradient(to left, #19547b, #ffd89b);
    background: linear-gradient(to right, #19547b, #ffd89b);

    position: absolute;
    top: 100%;
    bottom: 0%;
    left: 50%;
    border-radius: 10px;
    transition: all 500ms ease;
  }

  &:hover::after {
    left: 0%;
    width: 100%;
  }
`;

const Bio = styled.p`
  font-size: 1.1rem;
  margin-bottom: 15px;
  opacity: 0.6;
`;

const Email = styled.p`
  font-size: 1rem;
  color: #051747;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  &:visited {
    color: none;
  }
`;

const City = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Name = styled.p`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 30px;
  color: #051747;
`;

const Img = styled.img`
  border-radius: 7px;
  width: 400px;
  position: relative;
  z-index: 2;
  opacity: ${({ isAvailable }) => (isAvailable === "false" ? "0.5" : "1")};

  @media screen and (max-width: 825px) {
    width: 300px;
  }
`;

const Hr = styled.hr`
  width: 50px;
  border: none;
  border-top: 6px solid;
  border-radius: 15px;
  color: #051747;
`;

const RateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  color: #051747;
  margin-left: 80px;
  width: 30vw;

  @media screen and (max-width: 825px) {
    margin-top: 30px;
    margin-left: 0;
    padding-bottom: 30px;
    display: block;
    align-items: center;
    width: 35vw;
  }
`;

const DetailContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #051747;
  margin-top: 80px;
`;

export default LocalDetail;
