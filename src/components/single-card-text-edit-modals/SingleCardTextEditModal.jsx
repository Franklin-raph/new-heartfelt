import React, { useState } from "react";

//Text Color Modal

export default function TextEditColorModal({
  commentStyles,
  setCommentStyles,
}) {
  // input color states
  const [inputColorOne, setInputColorOne] = useState("#212529");
  //
  const colors = [
    "#868e96",
    "#e8590c",
    "#fab005",
    "#099268",
    "#3b5bdb",
    "#7950f2",
    "#868e96",
    "#fff5f5",
    "#495057",
    "#fff5f5",
    "#ffa8a8",
    "#ffe066",
    "#ffec99",
    "#b2f2bb",
    "#748ffc",
    "#b197fc",
    "#868e96",
  ];

  //
  return (
    <div className="text_edit_color_modal">
      <label
        htmlFor="black_one"
        className="black_one"
        style={{ background: inputColorOne }}
      ></label>
      <input
        type="color"
        id="black_one"
        defaultValue={inputColorOne}
        onChange={(e) =>
          setCommentStyles({ ...commentStyles, color: e.target.value })
        }
      />
      {/*  */}
      {colors.map((color, i) => (
        <label
          key={i}
          style={{ background: color }}
          onClick={() => setCommentStyles({ ...commentStyles, color: color })}
        ></label>
      ))}
    </div>
  );
}

// Font Family Modal

export const TextEditFamilyModal = ({ commentStyles, setCommentStyles }) => {
  const textFonts = [
    "Poppins",
    "Inter",
    "Nunito Sans",
    "Cedarville Cursive",
    "Recursive",
  ];
  //
  return (
    <div className="font_family_edit_modal">
      {textFonts.map((fonts, i) => (
        <div
          key={i}
          className="text_family_fonts"
          onClick={() => setCommentStyles({ ...commentStyles, font: fonts })}
        >
          {fonts}
        </div>
      ))}
    </div>
  );
};

// Text Sizes Modal

export const TextEditSizeModal = ({ commentStyles, setCommentStyles }) => {
  return (
    <div className="text_edit_size_modal">
      <div
        className="text_size_holder"
        onClick={() => setCommentStyles({ ...commentStyles, size: "12px" })}
      >
        <p>Small</p>
      </div>
      <div
        className="text_size_holder"
        onClick={() => setCommentStyles({ ...commentStyles, size: "16px" })}
      >
        <p>Medium</p>
      </div>
      <div
        className="text_size_holder"
        onClick={() => setCommentStyles({ ...commentStyles, size: "18px" })}
      >
        <p>Large</p>
      </div>
      <div
        className="text_size_holder"
        onClick={() => setCommentStyles({ ...commentStyles, size: "20px" })}
      >
        <p>Extra large</p>
      </div>
      <div
        className="text_size_holder"
        onClick={() => setCommentStyles({ ...commentStyles, size: "24px" })}
      >
        <p>Huge</p>
      </div>
      <input
        type="number"
        placeholder="custom font size"
        onChange={(e) =>
          setCommentStyles({ ...commentStyles, size: `${e.target.value}px` })
        }
      />
    </div>
  );
};

// Text Align Modal

export const TextEditAlignModal = ({ commentStyles, setCommentStyles }) => {
  return (
    <div className="text_align_modal">
      <div
        className="text_align_bars bar_one"
        onClick={() => setCommentStyles({ ...commentStyles, align: "left" })}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        className="text_align_bars bar_two"
        onClick={() => setCommentStyles({ ...commentStyles, align: "center" })}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        className="text_align_bars bar_three"
        onClick={() => setCommentStyles({ ...commentStyles, align: "right" })}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
