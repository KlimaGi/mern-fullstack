import React from "react";
import PropTypes from "prop-types";
import CotestPreview from "./ContestPreview";

const ContestList = ({ contests }) => (
  <div className="ContestList">
    {contests.map((contest) => (
      <CotestPreview key={contest.id} {...contest} />
    ))}
  </div>
);

// ContestList.propTypes = {
//   contests: React.PropTypes.array,
// };

export default ContestList;
