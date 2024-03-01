import ComplementOpenClosed from "./theorems/Analysis/Topology/complement-of-open-is-closed";
import AdditivityRectangles from "./theorems/Analysis/Topology/additivity-rectangles";
import MonotonicityExteriorMeasure from "./theorems/Analysis/Measure/Exterior Measure/monotonicity-exterior-measure";
import CountableSubadditivityExteriorMeasure from "./theorems/Analysis/Measure/Exterior Measure/countable-subadditivity-exterior-measure";
import SmallestCoveringExteriorMeasure from "./theorems/Analysis/Measure/Exterior Measure/smallest-covering-exterior-measure";
import ClosedBoundedCompact from "./theorems/Analysis/Topology/closed-bounded-compact";

const allTheorems = [ComplementOpenClosed, AdditivityRectangles, MonotonicityExteriorMeasure, CountableSubadditivityExteriorMeasure, SmallestCoveringExteriorMeasure, ClosedBoundedCompact]

export default allTheorems;