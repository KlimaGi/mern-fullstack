import React from "react";
import PropTypes from "prop-types";
import CotestPreview from "./ContestPreview";

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {Object.keys(contests).map((contestId) => (
      <CotestPreview
        key={contestId}
        onClick={onContestClick}
        {...contests[contestId]}
      />
    ))}
  </div>
);

// ContestList.propTypes = {
//   contests: React.PropTypes.object,
// onContestClick: React.PropTypes.func.isRequired,
// };

export default ContestList;
