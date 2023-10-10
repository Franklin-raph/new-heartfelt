export const FillInAllFormDetails = ({ error_modal_1, close_modal_1 }) => {
  return (
    <div className="delivery_details_error_container" ref={error_modal_1}>
      <div className="delivery_details_error_box">
        <i className="bx bx-x-circle"></i>
        <h4>Please fill in all details</h4>
        <div className="close_error_modal" style={{ cursor:"pointer" }} onClick={close_modal_1}>
          Ok
        </div>
      </div>
    </div>
  );
};
