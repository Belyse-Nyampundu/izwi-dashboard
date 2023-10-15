import BarChartOne from "../ResponsesGraph";
import BarChartTwo from "../JobPostsGraph";
import Labels from "../GraphLabels";

const ParentComponent = () => {
  return (
    <div className="grid grid-cols-3 mt-32 ml-[328px] gap-[180px]">
      
      <div>
        <BarChartOne />
      </div>
      <div>
        <BarChartTwo />
      </div>
      <div>
        <Labels />
      </div>
    </div>
  );
};
export default ParentComponent;


