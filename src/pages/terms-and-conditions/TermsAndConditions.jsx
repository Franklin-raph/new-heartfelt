import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  //
  return (
    <div className="terms_and_conditions_section">
      {/*  */}
      <div className="terms_and_conditions_sidebar">
        <h4>The Pages Shows</h4>
        <a href="#terms_and_conditions" className="terms_link active">
          Terms and Conditions
        </a>
        <a href="#privacy_policy" className="terms_link ">
          Privacy & Cookie Policy
        </a>
        <a href="#use_policy" className="terms_link ">
          Acceptable Use Policy
        </a>
        <a href="#terms_of_use" className="terms_link ">
          Terms of Use
        </a>
        <a href="#terms_of_service" className="terms_link ">
          Terms of Service
        </a>
      </div>
      {/*  */}
      <article className="terms_and_conditions_main_content">
        <p className="terms_updated_date">Last Updated: 15th Apr 2023</p>
        {/*  */}
        <div id="terms_and_conditions" className="terms_and_condtions_segment">
          <h2>Terms And Conditions</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
            perferendis maiores maxime veritatis rem autem praesentium
            voluptatum error magnam non, sunt odit itaque vel? Quia alias
            voluptatibus ipsa fugiat reiciendis!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque a
            labore vitae tempore quas. Suscipit praesentium odio officiis?
            Cumque a doloribus molestiae ipsum praesentium, voluptatibus cum
            dolorem animi vel quasi quidem, ea excepturi! Possimus optio
            expedita, debitis totam, itaque amet vero rem repellat animi sunt
            iusto provident illum cumque iste hic eveniet quos quisquam
            architecto libero pariatur aliquam sint. Aut?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            aliquid repudiandae ducimus aspernatur beatae asperiores. Odio
            numquam eaque voluptate est sequi saepe esse dolore, incidunt ex
            alias officia nobis rem.
          </p>
        </div>
        {/*  */}
        <div id="privacy_policy" className="terms_and_condtions_segment">
          <h2>Privacy & Cookie Policy</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            aliquid repudiandae ducimus aspernatur beatae asperiores. Odio
            numquam eaque voluptate est sequi saepe esse dolore, incidunt ex
            alias officia nobis rem.
          </p>
        </div>
        {/*  */}
        <div id="use_policy" className="terms_and_condtions_segment">
          <h2>Acceptable Use Policy</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit
            earum quas provident rem neque quidem officia.
          </p>
        </div>
        {/*  */}
        <div id="terms_of_use" className="terms_and_condtions_segment">
          <h2>Terms of Use</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit
            earum quas provident rem neque quidem officia. ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </div>
        {/*  */}
        <div id="terms_of_service" className="terms_and_condtions_segment">
          <h2>Terms of Service</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            deserunt impedit possimus repellendus accusantium delectus aliquam
            corporis facere dolor labore error, laborum eius rerum sed illum ab
            veniam?
          </p>
        </div>
        {/*  */}
      </article>
    </div>
  );
};

export default TermsAndConditions;
