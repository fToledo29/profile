
(function() {

        let mainSVG = null;
        let containerLeft = null;
        let containerBottom = null;
        let containerTop = null;
        let svgBounding = null;

        /**
         * Initializes SVGCore.
         * @param {string} svgQuery SVG Target.
         */
        let SCore = function(svgQuery) {
                mainSVG = document.querySelector(svgQuery);
                svgBounding = mainSVG.getBoundingClientRect()
        };

        /**
         * Gets all the requested elements from inside the current SVG instance.
         * @param {string} elementQuery Element target.
         */
        SCore.prototype.getInnerElements = function(elementQuery) {
                return [...mainSVG.querySelectorAll(elementQuery)];
        };

        /**
         * Gets an inner element from the current SVG instance, based on  the given query.
         * @param {string} query CSS query to select the desired element.
         */
        SCore.prototype.getInnerElement = function(query) {
                return mainSVG.querySelector(query);
        };

        SCore.prototype.getInnerElementTop = function() {
                return (svgBounding.top - svgBounding.top) + 'px'
        };

        /**
         * Gets X Axis based on the given element and the X number.
         * @param {string} element Element target.
         * @param {string|number} axisNum X Number of the requested axis, if any.
         */
        SCore.prototype.getXAxis = function(element, axisNum) {

                const xAxis = axisNum ? 'x' + axisNum : 'x'; 

                return ((element[xAxis].baseVal.value - element.getBBox().width) * element.nearestViewportElement.getScreenCTM().a - element.nearestViewportElement.getScreenCTM().e)  + "px";
        };

        /**
         * Gets Y Axis based on the given element and the Y numbers.
         * @param {string} element Element target.
         * @param {string|number} axisNum Y Number of the requested axis, if any.
         */
        SCore.prototype.getYAxis = function(element, axisNum) {

                const xAxis = axisNum ? 'y' + axisNum : 'y'; 

                return ((element[xAxis].baseVal.value - element.getBBox().width) * element.nearestViewportElement.getScreenCTM().a - element.nearestViewportElement.getScreenCTM().e)  + "px";
        };

        window.SCore = SCore;

        return SCore;
})();

// temp2.style.top = ((temp1.y1.baseVal.value + temp1.getBBox().width) * temp1.nearestViewportElement.getScreenCTM().a + temp1.nearestViewportElement.getScreenCTM().e)  + "px";
// temp2.style.top = temp1.y2.baseVal.value + 'px'

 