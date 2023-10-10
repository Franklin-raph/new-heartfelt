import { useState, useEffect } from "react";

const BackToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop >= 30) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  function backToTop() {
    document.documentElement.scrollTop = "0";
  }

  return (
    <>
      {showBtn && (
        <div className="back-to-top" onClick={() => backToTop()}>
          <i className="ri-arrow-up-s-line"></i>
        </div>
      )}
    </>
  );
};

export default BackToTop;
