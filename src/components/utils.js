// Returns the width of a component as a percentage of the total width, as integer
export function getWidthAsPercentOfTotalWidth(percent, totalWidth) {
    return parseInt(totalWidth * percent / 100, 10);
}
