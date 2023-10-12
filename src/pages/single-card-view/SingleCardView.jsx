import imagePreview_1 from "../../assets/images/card_preview_template.jpg";
import imagePreview_2 from "../../assets/images/delivery-details-card-sample.png";
import imagePreview_3 from "../../assets/images/birthday-card-template-image.jpg";
import imagePreview_4 from "../../assets/images/sign-card-initial-view.webp";
import ourLogo from "../../assets/images/heartfelt-logo.png";
import deliveryDetailsImage from "../../assets/images/delivery-details-img.png";
import { useEffect, useRef, useState } from "react";
import SingleCardViewModal, {
  ViewModalInputControls,
} from "../../components/single-card-view-modal/SingleCardViewModal";
import "./Bookflip.css";

import { Link, useParams } from "react-router-dom";
import SuccessAlert from "../../components/alert/SuccessAlert";
import ErrorAlert from "../../components/alert/ErrorAlert";
//
import { useDrag } from "@use-gesture/react";
import Draggable from "react-draggable";
import { AudioRecorder } from "react-audio-voice-recorder";
//

const SingleCardView = ({ baseUrl }) => {
  const [isGiftCardSettingsOpen, setIsGiftCardSettingsOpen] = useState(false);
  const [isHowGiftCardWorksOpen, setIsHowGiftCardWorksOpen] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  //
  const [addAudio, setAddAudio] = useState(false);

  //
  const [commentStyles, setCommentStyles] = useState({
    color: "#212529",
    font: "Poppins",
    size: "12px",
    style: "normal",
    align: "left",
  });
  //
  const changeCommentStyle = () => {
    if (commentStyles.style === "normal") {
      setCommentStyles({ ...commentStyles, style: "italic" });
    } else if (commentStyles.style === "italic") {
      setCommentStyles({ ...commentStyles, style: "normal" });
    } else {
      return;
    }
  };

  // =======================
  // =======================
  const [colorToolTip, setColorToolTip] = useState(false);
  const [typefaceToolTip, setTypefaceToolTip] = useState(false);
  const [textSizeToolTip, setTextSizeToolTip] = useState(false);
  const [textStyleToolTip, setTextStyleToolTip] = useState(false);
  const [textAlignToolTip, setTextAlignToolTip] = useState(false);
  const [senderNameToolTip, setSenderNameToolTip] = useState(false);

  // Wants Text Edit States
  const [showColorPalette, setShowColorPalette] = useState(false);
  const [textEditFonts, setTextEditFonts] = useState(false);
  const [showEditSizeModal, setShowEditSizeModal] = useState(false);
  const [showTextAlignModal, setShowTextAlignModal] = useState(false);
  // =======================
  // =======================
  // ======================
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [comment, setComment] = useState();
  const [signedCardDetails, setSignedCardDetails] = useState();
  const [signedCardSignatures, setSignedCardSignatures] = useState([]);
  const cardID = JSON.parse(localStorage.getItem("cardID"));
  const user = JSON.parse(localStorage.getItem("user"));
  const { cardId } = useParams();
  // =======================
  // =======================
  //
  const handleShowColorPalette = () => {
    setShowColorPalette(!showColorPalette);
    setTextEditFonts(false);
    setShowEditSizeModal(false);
    setShowTextAlignModal(false);
  };

  //
  const handleShowTextEditFonts = () => {
    setTextEditFonts(!textEditFonts);
    setShowColorPalette(false);
    setShowEditSizeModal(false);
    setShowTextAlignModal(false);
  };

  //
  const handleShowTextSizeModal = () => {
    setShowEditSizeModal(!showEditSizeModal);
    setTextEditFonts(false);
    setShowColorPalette(false);
    setShowTextAlignModal(false);
  };

  //
  const handleShowTextAlignModal = () => {
    setShowTextAlignModal(!showTextAlignModal);
    setTextEditFonts(false);
    setShowEditSizeModal(false);
    setShowColorPalette(false);
  };
  // =======================

  // =======================
  // ======================
  const handleSignCard = async (e) => {
    console.log("sign");
    if (!comment) {
      setError("Cannot save empty content");
    } else {
      setLoader(true);
      e.preventDefault();
      try {
        const res = await fetch(`${baseUrl}/sign-card`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${user.accessToken}`,
          },
          body: JSON.stringify({
            comment: comment,
            // commentBy: user.user.email,
            cardID: cardId,
          }),
        });
        if (res) setLoader(false);
        const data = await res.json();
        if (res.ok) {
          setSuccess(data.message);
          setShowTextEditModalBtn(false);
          getCardInfo();
        }
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  // ======================
  // =======================

  //
  const [showTextEditModalBtn, setShowTextEditModalBtn] = useState(false);
  const uploadedCard = JSON.parse(localStorage.getItem("uploaded-card"));

  function openGiftCardSettings() {
    setIsGiftCardSettingsOpen(!isGiftCardSettingsOpen);
  }

  // const card_view_modal_overlay = useRef();

  const show_card_view_modal = () => {
    setShowTextEditModalBtn(true);
  };

  const close_card_view_modal = () => {
    setShowTextEditModalBtn(false);
  };

  //
  const user_code = useRef();
  const user_code_copy_btn = useRef();

  //
  const handleCopyUserCode = () => {
    navigator.clipboard.writeText(user_code.current.textContent);
    user_code_copy_btn.current.textContent = "Copied!";
    user_code_copy_btn.current.style.background = "transparent";
    user_code_copy_btn.current.style.boxShadow = "0 0 0 1.3px #061818";
    user_code_copy_btn.current.style.color = " #061818";
    setTimeout(() => {
      user_code_copy_btn.current.textContent = "Copy";
      user_code_copy_btn.current.style.background = "#061818";
      user_code_copy_btn.current.style.boxShadow = "none";
      user_code_copy_btn.current.style.color = "#ffffff";
    }, 4000);
  };

  // ========
  const paper_1 = useRef();
  const paper_2 = useRef();
  const paper_3 = useRef();
  // ========
  const [paperPage, setPaperPage] = useState(1);
  // ========
  const handleToggleNextPage = () => {
    if (paperPage === 3) {
      return;
    }
    setPaperPage((prev) => prev + 1);
    if (paperPage === 1) {
      paper_1.current.classList.add("toggle_paper");
    } else if (paperPage === 2) {
      paper_2.current.classList.add("toggle_paper");
    }
  };
  // ========
  // ========
  const handleTogglePrevPage = () => {
    if (paperPage === 1) {
      return;
    }
    setPaperPage((prev) => prev - 1);
    if (paperPage === 3) {
      paper_2.current.classList.remove("toggle_paper");
    } else if (paperPage === 2) {
      paper_1.current.classList.remove("toggle_paper");
    }
  };
  // ========
  const card_page_num_1 = useRef();
  const card_page_num_2 = useRef();
  const card_page_num_3 = useRef();

  async function getCardInfo() {
    const response = await fetch(`${baseUrl}/get-card-sign-details/${cardId}`);
    const data = await response.json();
    setSignedCardSignatures(data.signatures);
    setSignedCardDetails(data.details);
    console.log(data);
  }

  //
  useEffect(() => {
    switch (paperPage) {
      case 1:
        card_page_num_1.current.classList.add("toggle_card_page_num");
        card_page_num_2.current.classList.remove("toggle_card_page_num");
        card_page_num_3.current.classList.remove("toggle_card_page_num");
        break;
      case 2:
        card_page_num_2.current.classList.add("toggle_card_page_num");
        card_page_num_1.current.classList.remove("toggle_card_page_num");
        card_page_num_3.current.classList.remove("toggle_card_page_num");
        break;
      case 3:
        card_page_num_3.current.classList.add("toggle_card_page_num");
        card_page_num_2.current.classList.remove("toggle_card_page_num");
        card_page_num_1.current.classList.remove("toggle_card_page_num");
        break;
      default:
        throw new Error("State not found");
    }
    getCardInfo();
  }, [paperPage]);
  // ===========
  useEffect(() => {
    const cardFlipPageNums = document.querySelectorAll(
      ".card_flip_books_page_nums"
    );
    cardFlipPageNums.forEach((pageNum) => {
      pageNum.addEventListener("click", (e) => {
        switch (Number(e.target.innerText)) {
          case 1:
            card_page_num_1.current.classList.add("toggle_card_page_num");
            card_page_num_2.current.classList.remove("toggle_card_page_num");
            card_page_num_3.current.classList.remove("toggle_card_page_num");
            paper_1.current.classList.remove("toggle_paper");
            paper_2.current.classList.remove("toggle_paper");
            paper_3.current.classList.remove("toggle_paper");
            break;
          case 2:
            card_page_num_1.current.classList.remove("toggle_card_page_num");
            card_page_num_2.current.classList.add("toggle_card_page_num");
            card_page_num_3.current.classList.remove("toggle_card_page_num");
            paper_1.current.classList.add("toggle_paper");
            paper_3.current.classList.add("toggle_paper");
            paper_2.current.classList.remove("toggle_paper");
            break;
          case 3:
            card_page_num_1.current.classList.remove("toggle_card_page_num");
            card_page_num_2.current.classList.remove("toggle_card_page_num");
            card_page_num_3.current.classList.add("toggle_card_page_num");
            paper_1.current.classList.add("toggle_paper");
            paper_2.current.classList.add("toggle_paper");
            break;
          default:
            throw new Error("state not found");
        }
      });
    });
  }, []);
  // ========
  // ========
  const [textPos, setTextPos] = useState({ x: 0, y: 0 });
  const bindTextPos = useDrag((params) => {
    setTextPos({
      x: params.offset[0],
      y: params.offset[1],
    });
  });
  // ========
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    <article className="single_card_view_section">
      {success && <SuccessAlert success={success} setSuccess={setSuccess} />}
      {error && <ErrorAlert error={error} setError={setError} />}
      <div className="single_card_page_header">
        <h2 className="single_card_header_h3">
          A card for {signedCardDetails && signedCardDetails.recipientFullName}
        </h2>
        <div className="single_card_countdown_row">
          <p>
            {signedCardDetails && signedCardDetails.date}{" "}
            {signedCardDetails && signedCardDetails.time}
          </p>
          {/* <div className="single_card_countdown_col">
            <h4>DAYS</h4>
            <div>
              <h4>83</h4>
              <span>:</span>
            </div>
          </div>
          <div className="single_card_countdown_col">
            <h4>HOURS</h4>
            <div>
              <h4>02</h4>
              <span>:</span>
            </div>
          </div>
          <div className="single_card_countdown_col">
            <h4>MINUTES</h4>
            <div>
              <h4>53</h4>
              <span>:</span>
            </div>
          </div>
          <div className="single_card_countdown_col">
            <h4>SECONDS</h4>
            <div>
              <h4>87</h4>
            </div>
          </div> */}
        </div>
      </div>

      <div className="single_card_view_row">
        <div className="single_card_col col_1">
          <div onClick={openGiftCardSettings}>
            <i className="bx bx-cog"></i>
            <p>Card Settings</p>
          </div>

          {/* <div>
            <i className="bx bxl-telegram"></i>
            <p>Contribute to Gift Card</p>
          </div> */}

          <div>
            <i className="bx bx-credit-card"></i>
            <p>Preview Card</p>
          </div>

          <div>
            <i className="bx bx-link-alt"></i>
            <p>Hide Invite Links</p>
          </div>
        </div>

        {/* col 2 */}
        <div className="card_flip_book">
          <div className="card_flip_paper card_flip_paper_1" ref={paper_1}>
            {/* <img src={uploadedCard ? uploadedCard : imagePreview_2} alt="" /> */}
            {signedCardDetails && (
              <img src={signedCardDetails.cardCoverUrl} alt="card cover" />
            )}
          </div>
          <div className="card_flip_paper card_flip_paper_2 " ref={paper_2}>
            {addAudio && (
              <AudioRecorder
                onRecordingComplete={addAudioElement}
                audioTrackConstraints={{
                  noiseSuppression: true,
                  echoCancellation: true,
                }}
                downloadOnSavePress={true}
                downloadFileExtension="webm"
              />
            )}
            {/*  */}
            {/* {showTextEditModalBtn && (
              <div className="signCardModalBg">
                <ViewModalInputControls
                  colorToolTip={colorToolTip}
                  typefaceToolTip={typefaceToolTip}
                  textSizeToolTip={textSizeToolTip}
                  textStyleToolTip={textStyleToolTip}
                  textAlignToolTip={textAlignToolTip}
                  senderNameToolTip={senderNameToolTip}
                  showColorPalette={showColorPalette}
                  textEditFonts={textEditFonts}
                  showEditSizeModal={showEditSizeModal}
                  showTextAlignModal={showTextAlignModal}
                  setColorToolTip={setColorToolTip}
                  handleShowColorPalette={handleShowColorPalette}
                  setTypefaceToolTip={setTypefaceToolTip}
                  handleShowTextEditFonts={handleShowTextEditFonts}
                  setTextSizeToolTip={setTextSizeToolTip}
                  handleShowTextSizeModal={handleShowTextSizeModal}
                  setTextStyleToolTip={setTextStyleToolTip}
                  setTextAlignToolTip={setTextAlignToolTip}
                  handleShowTextAlignModal={handleShowTextAlignModal}
                  setSenderNameToolTip={setSenderNameToolTip}
                  commentStyles={commentStyles}
                  setCommentStyles={setCommentStyles}
                  changeCommentStyle={changeCommentStyle}
                />
                <textarea
                  rows="8"
                  placeholder="Sign card here..."
                  onChange={(e) => setComment(e.target.value)}
                  style={{
                    color: commentStyles.color,
                    fontFamily: commentStyles.font,
                    fontSize: commentStyles.size,
                    fontStyle: commentStyles.style,
                    textAlign: commentStyles.align,
                  }}
                ></textarea>
              </div>
            )} */}
            {showTextEditModalBtn && (
              <Draggable>
                <div
                  className="react_draggable_cont"
                  style={{
                    cursor: "move",
                    border: "2px dashed #299e9e",
                    padding: "25px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: "9000",
                  }}
                >
                  <i
                    className="ri-delete-bin-2-fill"
                    style={{
                      position: "absolute",
                      top: "-10px",
                      left: "-10px",
                      backgroundColor: "#299e9e",
                      padding: "5px",
                      color: "#fff",
                      borderRadius: "50px",
                    }}
                  ></i>

                  <ViewModalInputControls
                    colorToolTip={colorToolTip}
                    typefaceToolTip={typefaceToolTip}
                    textSizeToolTip={textSizeToolTip}
                    textStyleToolTip={textStyleToolTip}
                    textAlignToolTip={textAlignToolTip}
                    senderNameToolTip={senderNameToolTip}
                    showColorPalette={showColorPalette}
                    textEditFonts={textEditFonts}
                    showEditSizeModal={showEditSizeModal}
                    showTextAlignModal={showTextAlignModal}
                    setColorToolTip={setColorToolTip}
                    handleShowColorPalette={handleShowColorPalette}
                    setTypefaceToolTip={setTypefaceToolTip}
                    handleShowTextEditFonts={handleShowTextEditFonts}
                    setTextSizeToolTip={setTextSizeToolTip}
                    handleShowTextSizeModal={handleShowTextSizeModal}
                    setTextStyleToolTip={setTextStyleToolTip}
                    setTextAlignToolTip={setTextAlignToolTip}
                    handleShowTextAlignModal={handleShowTextAlignModal}
                    setSenderNameToolTip={setSenderNameToolTip}
                    commentStyles={commentStyles}
                    setCommentStyles={setCommentStyles}
                    changeCommentStyle={changeCommentStyle}
                  />

                  <textarea
                    rows="4"
                    placeholder="Sign card here..."
                    onChange={(e) => setComment(e.target.value)}
                    style={{
                      outline: "none",
                      border: "none",
                      marginTop: "40px",
                      resize: "none",
                      background: "transparent",
                      width: "82%",
                    }}
                    // }}
                  ></textarea>
                </div>
              </Draggable>
            )}

            <div className="card_flip_paper card_flip_paper_3" ref={paper_3}>
              {signedCardSignatures &&
                signedCardSignatures.map((signature, index) => (
                  <h2
                    {...bindTextPos()}
                    style={{
                      position: "relative",
                      top: textPos.y,
                      left: textPos.x,
                      touchAction: "none",
                      fontSize: "12px",
                      fontWeight: "300",
                      userSelect: "none",
                    }}
                    key={index}
                  >
                    <p
                      style={{
                        color: commentStyles.color,
                        fontFamily: commentStyles.font,
                        fontSize: commentStyles.size,
                        fontStyle: commentStyles.style,
                        textAlign: commentStyles.align,
                      }}
                    >
                      {signature.comment}
                    </p>
                  </h2>
                ))}
            </div>
            {/*  */}
          </div>
          <div className="card_flip_paper card_flip_paper_3" ref={paper_3}>
            <img src={imagePreview_4} alt="" />
            <div className="our_logo">
              <img src={ourLogo} alt="" />
            </div>
          </div>
          <div className="card_flip_book_icons">
            <i
              className="fa-solid fa-chevron-left card_flip_icon_left"
              onClick={handleTogglePrevPage}
            ></i>
            <div
              className="card_flip_books_page_nums num_1"
              ref={card_page_num_1}
            >
              1
            </div>
            <div
              className="card_flip_books_page_nums num_2"
              ref={card_page_num_2}
            >
              2
            </div>
            <div
              className="card_flip_books_page_nums num_2"
              ref={card_page_num_3}
            >
              3
            </div>
            <i
              className="fa-solid fa-chevron-right card_flip_icon_right"
              onClick={handleToggleNextPage}
            ></i>
          </div>
        </div>

        {/* col 3 */}
        <div className="single_card_col col_1">
          {!showTextEditModalBtn ? (
            <>
              {paperPage > 1 ? (
                <div onClick={show_card_view_modal}>
                  <i className="bx bx-pencil"></i>
                  <p>Sign Card</p>
                </div>
              ) : (
                <div style={{ cursor: "not-allowed", opacity: "0.5" }}>
                  <i className="bx bx-pencil"></i>
                  <p>Sign Card</p>
                </div>
              )}

              {signedCardDetails &&
                signedCardDetails.addVideoCheck === true && (
                  <>
                    {paperPage > 1 ? (
                      <div>
                        <i className="bx bxs-videos"></i>
                        <p>Add Video</p>
                      </div>
                    ) : (
                      <div style={{ cursor: "not-allowed", opacity: "0.5" }}>
                        <i className="bx bxs-videos"></i>
                        <p>Add Video</p>
                      </div>
                    )}
                  </>
                )}

              {paperPage > 1 ? (
                <div>
                  <i className="bx bxs-image"></i>
                  <p>Add Photo</p>
                </div>
              ) : (
                <div style={{ cursor: "not-allowed", opacity: "0.5" }}>
                  <i className="bx bxs-image"></i>
                  <p>Add Photo</p>
                </div>
              )}

              {signedCardDetails &&
                signedCardDetails.addAudioCheck === true && (
                  <>
                    {paperPage > 1 ? (
                      <div onClick={() => setAddAudio(!addAudio)}>
                        <i className="bx bxs-microphone"></i>
                        <p>Add Audio</p>
                      </div>
                    ) : (
                      <div style={{ cursor: "not-allowed", opacity: "0.5" }}>
                        <i className="bx bxs-microphone"></i>
                        <p>Add Audio</p>
                      </div>
                    )}
                  </>
                )}
              {/* {signedCardDetails &&
                signedCardDetails.addAudioCheck === true && (
                  <>
                    {paperPage > 1 ? (
                      <div>
                        <i className="bx bxs-microphone"></i>
                        <p>Add Audio</p>
                      </div>
                    ) : (
                      <div style={{ cursor: "not-allowed", opacity: "0.5" }}>
                        <i className="bx bxs-microphone"></i>
                        <p>Add Audio</p>
                      </div>
                    )}
                  </>
                )} */}

              {paperPage > 1 ? (
                <div>
                  <i className="bx bx-smile"></i>
                  <p>Add GIF/Sticker</p>
                </div>
              ) : (
                <div style={{ cursor: "not-allowed", opacity: "0.5" }}>
                  <i className="bx bx-smile"></i>
                  <p>Add GIF/Sticker</p>
                </div>
              )}

              {/* {paperPage > 1 ? (
                <div>
                  <i className="bx bx-text"></i>
                  <p>Add Text</p>
                </div>
              ) : (
                <div style={{ cursor: "not-allowed", opacity: "0.5" }}>
                  <i className="bx bx-text"></i>
                  <p>Add Text</p>
                </div>
              )} */}
            </>
          ) : (
            <>
              {loader ? (
                <div className="modal_save_changes">
                  <i className="bx bx-loader"></i>
                </div>
              ) : (
                <div className="modal_save_changes" onClick={handleSignCard}>
                  <i className="bx bxs-file-blank"></i>
                  <p>Save Changes</p>
                </div>
              )}
              <div
                className="modal_cancel_changes"
                onClick={close_card_view_modal}
              >
                <i className="bx bxs-x-circle"></i>
                <p>Cancel</p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="single_card_view_footer">
        <div className="single_card_copy_box">
          <p
            ref={user_code}
            style={{ fontSize: "12px" }}
          >{`https://heartfeltgreetingcard.netlify.app/single-card-view/${cardId}`}</p>
          <button onClick={handleCopyUserCode} ref={user_code_copy_btn}>
            Copy
          </button>
        </div>
        <h6>Share link to sign card</h6>
        <div className="single_card_footer_links">
          <Link
            to={`https://www.facebook.com/sharer/sharer.php?u=${location.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </Link>
          <Link
            to={`https://twitter.com/intent/tweet?url=${location.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </Link>
          <i className="bx bxl-youtube"></i>
          <Link
            to={`https://www.linkedin.com/shareArticle?url=${
              location.href
            }&title=${location.pathname.slice(1)}&summary=${location.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </Link>
          <i className="bx bxs-message-rounded-dots"></i>
        </div>
      </div>

      {isGiftCardSettingsOpen && (
        <GiftCardSettingsModal
          isGiftCardSettingsOpen={isGiftCardSettingsOpen}
          setIsGiftCardSettingsOpen={setIsGiftCardSettingsOpen}
          setIsHowGiftCardWorksOpen={setIsHowGiftCardWorksOpen}
        />
      )}

      {isHowGiftCardWorksOpen && (
        <HowGiftCardWorksModal
          setIsHowGiftCardWorksOpen={setIsHowGiftCardWorksOpen}
        />
      )}
    </article>
  );
};

export default SingleCardView;

export const GiftCardSettingsModal = ({
  isGiftCardSettingsOpen,
  setIsGiftCardSettingsOpen,
  setIsHowGiftCardWorksOpen,
}) => {
  return (
    <div className="gift-card-settings-modal-bg flex-center">
      <div className="gift-card-settings-modal">
        <i
          className="ri-close-fill"
          onClick={() => setIsGiftCardSettingsOpen(!isGiftCardSettingsOpen)}
        ></i>
        <div className="header">
          <h2>Gift Card Settings</h2>
          <p>Gift card can only be canceled within 24 hours after purchase.</p>
        </div>
        <div className="body">
          <h4>eGird Card</h4>
          <img src={localStorage.getItem("uploaded-card")} alt="" />
          <div className="amount">
            <h4>Select Amount</h4>
            <div className="gift_card_settings_modal_prices g-1">
              <p>#500</p>
              <p>#1,500</p>
              <p>#2,000</p>
              <p>#2,500</p>
            </div>
          </div>
          <input type="text" placeholder="# Amount" />
          <div className="flex-start g-1" style={{ marginTop: "10px" }}>
            <input type="checkbox" />
            <label style={{ display: "block", fontSize: "14px" }}>
              Allow other signers contribute
            </label>
            <i
              className="ri-information-fill"
              onClick={() => setIsHowGiftCardWorksOpen(true)}
            ></i>
          </div>
        </div>
        <button className="primary-button">Proceed</button>
      </div>
    </div>
  );
};

// How Gift Card Works Modal Here
export const HowGiftCardWorksModal = ({ setIsHowGiftCardWorksOpen }) => {
  return (
    <div className="how-gift-card-works-modal">
      <div className="header flex-between">
        <p>How gift card works</p>
        <i
          className="ri-close-fill"
          onClick={() => setIsHowGiftCardWorksOpen(false)}
        ></i>
      </div>
      <div className="body">
        <h4>Gift card would</h4>
        <ul>
          <li>
            <h5>Allow people contribute</h5>
            <p>
              Purchase gift card and allow multiple people to contribute to the
              total value of the card.
            </p>
          </li>
          <li>
            <h5>Make signers add more gift card</h5>
            <p>
              Upon sharing your card, signers can add their preferred amount to
              the total value of the gift card.
            </p>
          </li>
          <li>
            <h5>Send to recipient</h5>
            <p>
              All contributions added to the gift card is sent. Each
              contribution has a processing.
            </p>
          </li>
        </ul>
      </div>
      <div className="footer flex-between-start">
        <i className="ri-information-fill"></i>
        <p>
          People can contribute. Option cannot be changed after card purchase.
        </p>
      </div>
    </div>
  );
};

//
